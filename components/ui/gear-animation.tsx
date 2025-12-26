"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export const GearAnimation = () => {
  return (
    <div className="w-full h-48 relative flex items-center justify-center overflow-hidden py-4 opacity-80 hover:opacity-100 transition-opacity">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-4 opacity-[0.03]">
        {[...Array(32)].map((_, i) => (
           <div key={i} className="bg-black rounded-full w-1 h-1 mx-auto" />
        ))}
      </div>

      <div className="relative flex items-center justify-center">
        {/* Large Gear - Blue */}
        <motion.div
            className="absolute -left-12 -top-12 text-blue-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
             <Settings size={180} />
        </motion.div>

        {/* Main Big Gear - Black */}
        <motion.div
          className="relative z-10 text-black border-4 border-white bg-white rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Settings size={64} />
        </motion.div>

        {/* Medium Gear - Blue (Interlocked Left) */}
        <motion.div
          className="absolute -left-14 top-4 text-blue-600 border-4 border-white bg-white rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-1 z-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Settings size={48} />
        </motion.div>

        {/* Small Gear - Green (Interlocked Right) */}
        <motion.div
          className="absolute -right-10 -bottom-2 text-green-600 border-4 border-white bg-white rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-1.5 z-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <Settings size={32} />
        </motion.div>
        
        {/* Floating Particles */}
        <motion.div 
            className="absolute top-0 right-10 w-2 h-2 bg-blue-500 rounded-full"
            animate={{ y: [-20, 20], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
            className="absolute bottom-0 left-10 w-2 h-2 bg-green-500 rounded-full"
            animate={{ y: [20, -20], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>
      
      <p className="absolute bottom-2 text-xs text-gray-400 font-mono">System in Motion</p>
    </div>
  );
};
