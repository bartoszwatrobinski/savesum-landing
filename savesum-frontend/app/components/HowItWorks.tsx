"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Create an Account",
    description:
      "Sign up for free and tell us about your subscriptions and shopping habits.",
  },
  {
    number: "02",
    title: "Connect with Others",
    description:
      "Find and connect with people to exchange referral codes.",
  },
  {
    number: "03",
    title: "Get AI Recommendations",
    description:
      "Our AI analyzes your spending and suggests personalized ways to save money.",
  },
  {
    number: "🤑",
    title: "Save and Earn",
    description:
      "Start saving money and earning rewards through shared referrals and personalized deals.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How SaveSum Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. Follow these steps to begin saving money
            with AI-powered insights and smart strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
                              <div className="bg-blue-600/10 rounded-xl p-6 h-full">
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#9b87f5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to start saving?</h3>
          <p className="mb-6 max-w-lg mx-auto">
            Join thousands of users already using SaveSum to save money with
            AI-powered insights.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-blue-600 border-none"
            onClick={() => {
              const waitlistForm = document.getElementById('waitlist-form');
              if (waitlistForm) {
                waitlistForm.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
                
                // Highlight the input field after scrolling
                setTimeout(() => {
                  const emailInput = document.getElementById('email-input');
                  if (emailInput) {
                    emailInput.focus();
                    // Add a pulse animation
                    emailInput.classList.add('animate-pulse');
                    setTimeout(() => {
                      emailInput.classList.remove('animate-pulse');
                    }, 1000);
                  }
                }, 500);
              }
            }}
          >
            Start Saving
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
