"use client";

import { motion } from "framer-motion";
import { FiCheck, FiStar } from "react-icons/fi";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out CodesAI",
      features: [
        "100 AI generations/month",
        "Basic code templates",
        "Community support",
        "1 project",
        "Basic integrations",
      ],
      highlighted: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "For professional developers",
      features: [
        "Unlimited AI generations",
        "Advanced code templates",
        "Priority support",
        "Unlimited projects",
        "All integrations",
        "Code review assistance",
        "Custom workflows",
        "Team collaboration",
      ],
      highlighted: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large teams and organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom AI models",
        "On-premise deployment",
        "Advanced security",
        "SLA guarantee",
        "Training & onboarding",
        "Custom integrations",
      ],
      highlighted: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105"
                  : "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold">
                    <FiStar className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-800 dark:text-gray-100"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-gray-100"}`}>
                  {plan.price}
                </span>
                <span className={`ml-2 ${plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p className={`mb-6 ${plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FiCheck className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-blue-200" : "text-green-500"}`} />
                    <span className={plan.highlighted ? "text-white" : "text-gray-700 dark:text-gray-300"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
