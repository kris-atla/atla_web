"use client";

import { motion } from "framer-motion";

export const MailAnimation = () => {
  return (
    <div className="w-full h-64 relative flex items-center justify-center overflow-hidden mt-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
      {/* Abstract Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 10, -10, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-32 h-32 bg-blue-100/50 rounded-full blur-2xl top-10 left-10"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -20, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-40 h-40 bg-purple-100/50 rounded-full blur-2xl bottom-0 right-10"
      />

      <div className="relative z-10 w-48 h-48">
        {/* Envelope Base */}
        <motion.div
           className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-20 bg-white border-2 border-black z-10 cursor-pointer"
           whileHover={{ y: -5 }}
        >
          {/* Envelope Flap (Triangle) */}
          <div className="absolute top-0 w-full h-0 border-l-[62px] border-r-[62px] border-t-[40px] border-l-transparent border-r-transparent border-t-black/10 absolute left-0 top-0 pointer-events-none"></div>
          
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="w-8 h-1 bg-black/10 rounded-full"></div>
          </div>
        </motion.div>

        {/* Paper Plane */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          animate={{
            x: [0, 60, 0, -60, 0],
            y: [0, -40, -60, -20, 0],
            rotate: [0, 45, 0, -45, 0],
            scale: [0.8, 1, 0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600 fill-blue-50"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-black"
            style={{ width: 4 + i * 2, height: 4 + i * 2 }}
            animate={{
              y: [-10, -30, -10],
              x: [-10 + i * 10, 10 + i * 10, -10 + i * 10],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};
