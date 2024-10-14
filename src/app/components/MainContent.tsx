"use client";
import { motion } from 'framer-motion';

export default function MainContent() {
  return (
    <main className="flex-grow container mx-auto p-4">
      <section id="about" className="mb-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-4" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm MeBot!
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm here to help you learn about [Your Name]. Ask me anything!
        </motion.p>
      </section>

      <section id="chat" className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="h-64 overflow-y-auto mb-4 p-2 border rounded">
            {/* Chat messages go here */}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Ask me anything!"
              className="flex-grow border rounded-l px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-white px-4 py-2 rounded-r hover:bg-yellow-500 transition duration-200"
            >
              Send
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
}
