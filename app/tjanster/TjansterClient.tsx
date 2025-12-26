"use client";

import React from "react";
import Link from "next/link";
import { Code, GraduationCap, Heart, ArrowRight, PlusIcon } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Digitala Lösningar & Affärssystem",
    desc: "Vi utvecklar skräddarsydda system som CRM, CMS och LMS, anpassade efter din verksamhets unika behov för att effektivisera och automatisera.",
    href: "/tjanster/digitala-losningar",
    bg: "bg-blue-50"
  },
  {
    icon: GraduationCap,
    title: "IT-Utbildningar",
    desc: "Praktiska utbildningar inom programmering, IT-säkerhet och molnplattformar. Vi höjer kompetensen hos ditt team med anpassade kursplaner.",
    href: "/tjanster/it-utbildningar",
    bg: "bg-purple-50"
  },
  {
    icon: Heart,
    title: "Support & Vägledning",
    desc: "Vi finns där när tekniken strular. Personlig support och rådgivning för att du ska kunna fokusera på din kärnverksamhet.",
    href: "/tjanster/support",
    bg: "bg-green-50"
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
      ease: [0.25, 0.4, 0.25, 1] as any,
    },
  },
};

export default function TjansterClient() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <section className="relative z-10 w-full mb-20 text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto mt-20"
        >
          <div className="relative inline-block border-2 border-black p-10 md:p-14 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12 max-w-5xl">
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white z-10" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white z-10" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white z-10" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white z-10" />
            
            <h1 className="text-4xl md:text-7xl font-medium font-falcon text-black tracking-tight mb-8">
              Våra Tjänster
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Vi erbjuder ett helhetsgrepp om era digitala behov. Från att bygga systemen ni arbetar i, 
              till att utbilda personalen som använder dem, och stötta er när frågor uppstår.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="relative z-[200] w-full px-6 md:px-10 max-w-7xl mx-auto pb-24">
        {/* Main Bordered Container */}
        <div className="relative border-2 border-black p-8 md:p-12 bg-white shadow-lg">
          {/* Corner Plus Icons */}
          <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

          {/* Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="relative flex flex-col h-full overflow-hidden group"
                >
                  <Link href={service.href} className="block h-full">
                    <div className="h-full p-8 border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-50 flex flex-col">
                      
                      {/* Icon */}
                      <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={26} className="text-black" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-base mb-8 leading-relaxed flex-grow">
                        {service.desc}
                      </p>

                      {/* "Read More" Button-like link */}
                      <div className="flex items-center gap-2 font-bold text-black mt-auto group-hover:gap-4 transition-all">
                        Läs mer <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
