
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">SaveSum</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SaveSum. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with ❤️ for smart savers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
