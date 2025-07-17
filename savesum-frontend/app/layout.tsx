import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaveSum - Smart Savings Platform',
  description: 'SaveSum helps you save money intelligently with AI-powered insights and automated savings strategies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/savesum-logo.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/savesum-logo.png?v=2" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 