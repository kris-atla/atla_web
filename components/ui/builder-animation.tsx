"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BuilderAnimation = () => {
  // Grid of 3x5 blocks
  const [blocks, setBlocks] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks((prev) => {
        if (prev.length >= 15) {
          return []; // Reset when full
        }
        // Add next block index
        return [...prev, prev.length]; 
      });
    }, 400); // Speed of building

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-48 flex flex-col items-center justify-center gap-4 py-6">
       {/* Title or decorative element could go here */}
       
       <div className="grid grid-cols-5 gap-2 p-4 border-2 border-black bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
         {[...Array(15)].map((_, i) => (
           <motion.div
             key={i}
             className={`w-8 h-8 md:w-10 md:h-10 border border-black ${
               blocks.includes(i) ? "bg-blue-500" : "bg-white"
             }`}
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ 
               scale: blocks.includes(i) ? 1 : 0.8, 
               opacity: blocks.includes(i) ? 1 : 0.1 
             }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
           />
         ))}
       </div>
       
       <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mt-2">
         Building Solutions...
       </p>
    </div>
  );
};
