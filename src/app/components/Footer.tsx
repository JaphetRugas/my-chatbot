"use client";
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-4 mt-12">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <motion.a
          href="#"
          className="text-gray-600 hover:text-gray-800"
          whileHover={{ y: -2 }}
        >
          <Github size={24} />
        </motion.a>
        <motion.a
          href="#"
          className="text-gray-600 hover:text-gray-800"
          whileHover={{ y: -2 }}
        >
          <Linkedin size={24} />
        </motion.a>
        <motion.a
          href="mailto:your.email@example.com"
          className="text-gray-600 hover:text-gray-800"
          whileHover={{ y: -2 }}
        >
          <Mail size={24} />
        </motion.a>
      </div>
    </footer>
  );
}
