"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiZap, FiCpu } from "react-icons/fi";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <FiZap className="w-4 h-4" />
            <span>AI-Powered Development Platform</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
        >
          Transform Ideas Into
          <br />
          Production-Ready Code
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Harness the power of AI to build, optimize, and deploy your applications faster than ever before.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2"
          >
            Start Building Free
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
          >
            View Demo
          </motion.button>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: FiCode, title: "Smart Code Generation", desc: "AI-powered code suggestions" },
            { icon: FiZap, title: "Lightning Fast", desc: "Build 10x faster" },
            { icon: FiCpu, title: "Intelligent Optimization", desc: "Auto-optimize performance" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
