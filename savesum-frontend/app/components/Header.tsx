"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
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
      }, 800); // Wait for scroll to complete
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/savesum-logo.png"
            alt="SaveSum Logo"
            className="h-10 w-10"
          ></img>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SaveSum
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            How It Works
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            onClick={scrollToWaitlist}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Start Saving
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition py-2"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition py-2"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 transition py-2"
            >
              How It Works
            </a>
            <div className="pt-2">
              <Button 
                onClick={scrollToWaitlist}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Start Saving
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
