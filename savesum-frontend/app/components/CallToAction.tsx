import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Start Saving Money Today
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-lg">
                Join thousands of users already using SaveSum to save money
                with AI-powered insights and automated savings strategies.
                It only takes a minute to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90"
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 hidden md:block relative">
              <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 w-64">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-600 font-semibold">
                      £
                    </div>
                    <div className="font-semibold">Savings Report</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">AI Insights</span>
                    <span className="font-medium">£18.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Smart Budgeting
                    </span>
                    <span className="font-medium">£12.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Deal Finder</span>
                    <span className="font-medium">£24.75</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between items-center">
                    <span className="font-semibold">Total Saved</span>
                    <span className="font-bold text-lg">£56.24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
