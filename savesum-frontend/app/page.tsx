import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
} 