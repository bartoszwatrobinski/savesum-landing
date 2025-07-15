
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Smart Savings with <span className="text-blue-600">AI Insights</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              SaveSum helps you save money intelligently with AI-powered insights and automated savings strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Saving Today
              </Button>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600/10">
                  How It Works
                </Button>
              </a>
            </div>
            
            <div className="mt-8 flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(index => (
                  <div key={index} className="h-10 w-10 rounded-full bg-referlut-light-purple border-2 border-white flex items-center justify-center text-xs font-semibold">
                    {index}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">1000+</span> students already saving
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-referlut-purple/20 to-referlut-blue/30 rounded-2xl p-6 relative animate-float">
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
                  <div className="bg-referlut-blue/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Active Memberships</p>
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-md bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">P</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Pret Coffee Subscription</p>
                        <p className="text-xs text-gray-500">Shared with Alice</p>
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
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 border border-referlut-light-purple animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-referlut-orange/20 flex items-center justify-center text-referlut-orange font-semibold">£</div>
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
