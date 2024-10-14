"use client";
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Smile className="h-8 w-8 text-yellow-400 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">MeBot</h1>
        </motion.div>  
      </div>
    </header>
  );
}
