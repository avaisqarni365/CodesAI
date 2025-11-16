"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "API", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Community", "Support", "Tutorials", "GitHub", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  const socialLinks = [
    { icon: FiGithub, href: "#", label: "GitHub" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiMail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                CodesAI
              </h3>
              <p className="text-gray-400 mb-6 max-w-xs">
                Empowering developers with AI-powered tools to build the future of software.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-2">
              Stay up to date
            </h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates and news delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} CodesAI. Made with{" "}
            <FiHeart className="text-red-500 w-4 h-4 inline" /> by developers,
            for developers.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
