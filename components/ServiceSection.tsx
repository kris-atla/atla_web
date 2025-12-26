"use client";

import React from "react";
import { Code, GraduationCap, Heart, PlusIcon } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Affärssystem",
    desc: `Att utveckla skräddarsydda digitala lösningar för företag. Oavsett om du behöver ett CRM, ett CMS, ett LMS eller ett helt eget "vad-som-helst-MS", skapar vi den lösning som passar just din verksamhet. Vi levererar snabbt, robust och anpassat efter dina behov.`,
    
  },
  {
    icon: GraduationCap,
    title: "IT-Utbildningar",
    desc: "Att leverera IT-utbildningar som är anpassade efter verkliga behov. Behöver du kompetens inom programmering, IT-säkerhet, molnplattformar eller något helt skräddarsytt för ditt team? Vi tar fram rätt utbildning – praktisk, relevant och direkt användbar i din organisation.",
    
  },
  {
    icon: Heart,
    title: "Support & Vägledning",
    desc: "Att hjälpa dig även när det bara strular. Om den gamla burken hemma inte startar, nätverket beter sig märkligt eller någon programvara vägrar samarbeta – då finns vi där som ett bollplank. Vi lyssnar, felsöker, förklarar och hittar lösningar som gör att du kan fokusera på det som faktiskt spelar roll.",
    
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative z-[200] w-full py-12 text-black"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Bordered Container */}
        <div className="relative border-2 border-black p-8 md:p-12 bg-white shadow-lg">
          {/* Corner Plus Icons */}
          <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

          {/* Heading */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vad vi gör bäst!</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Vår expertis spänner över hela det digitala spektrumet och levererar precision och strategisk framförhållning.
            </p>
          </motion.div>

          {/* 3 columns grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="relative p-8 bg-gray-50 border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 overflow-visible group"
                >
                  {/* Large background icon */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon size={120} strokeWidth={1} />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-600 flex items-center justify-center rounded-lg mb-6">
                      <Icon size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 text-black">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
