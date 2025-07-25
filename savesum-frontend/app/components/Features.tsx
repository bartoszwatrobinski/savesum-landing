import React from "react";
import { Share, Search, Wallet, Users } from "lucide-react";

const features = [
  {
    icon: <Share className="h-8 w-8 text-blue-600" />,
    title: "Referral Exchange",
    description:
      "Share and use referral codes to earn rewards from your favorite platforms and services.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-blue-600" />,
    title: "Financial Analysis",
    description:
      "Get personalized AI recommendations on your spending habits and subscription costs.",
  },
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "Deal Finder",
    description:
      "Our AI finds verified discount codes and deals for anything you're planning to buy.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            💸Everything You Need to Save💸
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            SaveSum combines the power of community sharing and AI to help you
            save more, spend smarter, and unlock exclusive deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="h-14 w-14 rounded-lg bg-blue-600/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
