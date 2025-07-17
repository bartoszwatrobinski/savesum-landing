import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (for production, use Redis/database)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per minute per IP

// Track submitted emails to prevent duplicates (for production, use database)
const submittedEmails = new Set<string>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  
  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, lastReset: now });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    // Validate email format and length
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || email.length < 5 || email.length > 254) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Normalize email (lowercase, trim)
    const normalizedEmail = email.toLowerCase().trim();

    // Check for duplicate email
    if (submittedEmails.has(normalizedEmail)) {
      return NextResponse.json(
        { message: 'You are already on the waitlist!' },
        { status: 200 }
      );
    }

    // Get the Formspree endpoint from environment variables
    const endpoint = process.env.FORMSPREE_ENDPOINT;
    
    if (!endpoint) {
      console.error('FORMSPREE_ENDPOINT environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    console.log('Attempting to add email to waitlist...');
    
    // Make the API call to Formspree
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: normalizedEmail }),
    });
    
    if (response.ok) {
      // Add email to our duplicate prevention set
      submittedEmails.add(normalizedEmail);
      console.log('Successfully added email to waitlist');
      
      // Create response with security headers
      const successResponse = NextResponse.json(
        { message: 'Successfully joined waitlist' },
        { status: 200 }
      );
      
      // Add security headers
      successResponse.headers.set('X-Content-Type-Options', 'nosniff');
      successResponse.headers.set('X-Frame-Options', 'DENY');
      successResponse.headers.set('X-XSS-Protection', '1; mode=block');
      
      return successResponse;
    } else {
      const errorText = await response.text();
      console.error('Formspree error:', response.status, response.statusText, errorText);
      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 