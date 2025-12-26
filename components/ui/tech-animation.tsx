"use client";

import { motion } from "framer-motion";
import { Code2, Server, Globe } from "lucide-react";

export const TechAnimation = () => {
  return (
    <div className="w-full h-64 relative flex items-center justify-center overflow-hidden mt-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
      {/* Background Grid Effect - Subtle */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-4 opacity-[0.03]">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="bg-black rounded-sm" />
        ))}
      </div>

      <div className="relative z-10 flex items-center gap-8 md:gap-12">
        {/* Node 1: Code */}
        <div className="relative flex flex-col items-center gap-2 group">
          <motion.div 
            className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 relative"
            whileHover={{ y: -2, rotate: -2 }}
          >
            <Code2 size={24} className="text-black" />
          </motion.div>
          
          {/* Pulse Effect behind Code */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 w-16 h-16 bg-blue-400/20 -z-10"
          />
        </div>

        {/* Connection 1 */}
        <div className="w-12 md:w-16 h-1 bg-black/10 relative overflow-hidden">
           <motion.div 
             className="absolute top-0 left-0 w-4 h-full bg-blue-600"
             animate={{ x: [-20, 80] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           />
        </div>

        {/* Node 2: Server */}
        <div className="relative flex flex-col items-center gap-2">
          <motion.div 
            className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
            whileHover={{ y: -2 }}
          >
            <Server size={24} className="text-black" />
          </motion.div>

          {/* Activity Lights on Server */}
          <div className="absolute -right-2 -top-2 flex gap-1">
             <motion.div 
               animate={{ opacity: [0.2, 1, 0.2] }} 
               transition={{ duration: 0.5, repeat: Infinity }}
               className="w-2 h-2 bg-green-500 rounded-full border border-black" 
             />
             <motion.div 
               animate={{ opacity: [0.2, 1, 0.2] }} 
               transition={{ duration: 0.5, delay: 0.2, repeat: Infinity }}
               className="w-2 h-2 bg-blue-500 rounded-full border border-black" 
             />
          </div>
        </div>

        {/* Connection 2 */}
        <div className="w-12 md:w-16 h-1 bg-black/10 relative overflow-hidden">
           <motion.div 
             className="absolute top-0 left-0 w-4 h-full bg-blue-600"
             animate={{ x: [-20, 80] }}
             transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "linear" }}
           />
        </div>

        {/* Node 3: Globe/Deploy */}
        <div className="relative flex flex-col items-center gap-2">
          <motion.div 
            className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
            whileHover={{ y: -2, rotate: 2 }}
          >
            <Globe size={24} className="text-black" />
          </motion.div>
          
          {/* Orbiting Satellite */}
          <motion.div
            className="absolute w-24 h-24 border border-dashed border-black/20 rounded-full -z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-black rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
