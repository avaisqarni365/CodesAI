"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiMonitor, FiSmartphone, FiGlobe, FiTool } from "react-icons/fi";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: FiMonitor,
      title: "Web Development",
      description: "Build responsive, modern web applications with cutting-edge technologies.",
      features: ["React & Next.js", "Vue & Angular", "Full-Stack Solutions", "Progressive Web Apps"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiSmartphone,
      title: "Mobile Development",
      description: "Create native and cross-platform mobile apps that users love.",
      features: ["React Native", "Flutter", "iOS & Android", "Mobile-First Design"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FiGlobe,
      title: "API Development",
      description: "Design and build scalable, secure RESTful and GraphQL APIs.",
      features: ["RESTful APIs", "GraphQL", "Microservices", "API Security"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FiTool,
      title: "DevOps & Cloud",
      description: "Automate deployment and scale your infrastructure effortlessly.",
      features: ["CI/CD Pipelines", "Docker & Kubernetes", "AWS/Azure/GCP", "Infrastructure as Code"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive development solutions powered by AI to accelerate your projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500 -z-10`} />

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg
                      className={`w-5 h-5 mr-3 bg-gradient-to-r ${service.gradient} rounded-full p-1`}
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
