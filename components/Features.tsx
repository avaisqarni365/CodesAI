"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiCode,
  FiZap,
  FiShield,
  FiGitBranch,
  FiDatabase,
  FiCloud,
  FiCpu,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: FiCode,
      title: "AI Code Generation",
      description: "Generate clean, efficient code in any programming language with advanced AI models.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiZap,
      title: "Instant Compilation",
      description: "Real-time code compilation and execution with instant feedback and error detection.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FiShield,
      title: "Security First",
      description: "Built-in security analysis and vulnerability detection to keep your code safe.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FiGitBranch,
      title: "Version Control",
      description: "Seamless Git integration with intelligent merge conflict resolution.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiDatabase,
      title: "Database Integration",
      description: "Connect and manage databases with AI-assisted query optimization.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: FiCloud,
      title: "Cloud Deployment",
      description: "One-click deployment to popular cloud platforms with automatic scaling.",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: FiCpu,
      title: "Performance Optimization",
      description: "AI-powered performance analysis and automatic code optimization.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FiLayers,
      title: "Multi-Framework Support",
      description: "Support for all major frameworks and libraries with smart suggestions.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: FiCheckCircle,
      title: "Automated Testing",
      description: "Generate comprehensive test suites automatically with AI-powered testing.",
      color: "from-green-500 to-lime-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
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
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, test, and deploy production-ready applications with AI assistance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
