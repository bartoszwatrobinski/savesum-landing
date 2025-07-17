"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setEmail('');
        // Show appropriate message based on response
        if (data.message.includes('already on the waitlist')) {
          alert('You are already on the waitlist!');
        } else {
          alert('You have joined the waitlist!');
        }
      } else if (res.status === 429) {
        setError('Too many requests. Please wait a moment and try again.');
      } else {
        setError(data.error || 'There was a problem. Please try again later.');
      }
    } catch (err) {
      setError('There was a problem. Please try again later.');
    }
  };

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AI that finds savings for you. <span className="text-blue-600">Automatically.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              SaveSum helps you save money intelligently with AI-powered insights and automated savings strategies.
            </p>
            <form id="waitlist-form" onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full sm:w-auto">
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-base w-full sm:w-72 shadow-sm transition-all duration-300`}
                />
                {error && (
                  <span className="mt-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 animate-fadeIn">
                    {error}
                  </span>
                )}
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" type="submit">
                Join the Waitlist
              </Button>
            </form>
            
            <p className="text-lg text-blue-600 mt-4 max-w-lg">
              Get early access. Be the first to save smarter.
            </p>
            
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/30 rounded-2xl p-6 relative">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Your Savings Dashboard</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">New</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Total Saved This Month</p>
                      <p className="text-2xl font-bold">£47.82</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      +
                    </div>
                  </div>
                  <div className="bg-blue-500/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Active Memberships</p>
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-md bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">P</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Pret Coffee Subscription</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 max-w-[180px]">
                <div className="text-sm font-medium text-gray-800">AI Recommendation</div>
                <p className="text-xs text-gray-600 mt-1">Switch your energy provider to save £320/year</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 border border-blue-200">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold">£</div>
                <div>
                  <p className="text-xs font-medium">Cashback Earned</p>
                  <p className="text-sm font-bold">£12.50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
