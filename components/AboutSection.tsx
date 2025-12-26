"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cloud, Zap, Shield, PlusIcon } from "lucide-react";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const features = [
  {
    icon: Code2,
    text: "Bygga moderna webb- och systemlösningar",
  },
  {
    icon: Cloud,
    text: "Skapa pålitliga molnmiljöer",
  },
  {
    icon: Zap,
    text: "Automatisera drift och deployment",
  },
  {
    icon: Shield,
    text: "Skala sin teknik på ett säkert sätt",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`relative w-full py-12 ${poppins.className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Bordered Container */}
        <div className="relative border border-black shadow-lg p-8 md:p-12 bg-white">
          <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
          
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 flex-1"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">Om oss</h2>
            
            <p className="text-gray-600 text-base leading-relaxed">
              Vi är ett teknikdrivet konsultbolag grundat av två dataingenjörer med en genuin passion för allt som rör IT.
Vi stöttar företag – oavsett storlek – med hela spektrumet av IT-relaterade behov: från strategiska teknikval och systemutveckling till praktisk support, drift och problemlösning. Vår kombination av ingenjörskompetens och äkta datorintresse gör att vi kan leverera lösningar som är både robusta och smarta.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-6 text-black">Vi hjälper företag att:</h3>
              <div className="space-y-4">
                {features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                        <Icon size={22} className="text-blue-400" />
                      </div>
                      <span className="text-gray-700 text-base">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed pt-4">
              Vårt arbetssätt präglas av tydlig kommunikation, snabba leveranser och teknisk kvalitet. Vi tror på långsiktiga lösningar – inte snabba genvägar.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed italic">
              Oavsett om ni är ett startup, ett mindre företag eller ett växande bolag utan egen IT-avdelning, kan vi fungera som er tekniska partner.
            </p>
          </motion.div>

          {/* Right Column - REST API Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-start lg:items-center flex-shrink-0"
          >
            <div className="border border-gray-800 bg-[#1a1a1a] rounded-3xl p-6 md:p-8 flex justify-center w-full max-w-[500px]">  
              <DatabaseWithRestApi
                title="Datahantering via anpassade REST API:er"
                circleText="API"
                badgeTexts={{
                  first: "GET",
                  second: "POST",
                  third: "PUT",
                  fourth: "DELETE",
                }}
                buttonTexts={{
                  first: "ATLA",
                  second: "backend",
                }}
                lightColor="#3B82F6"
                className="scale-90"
              />
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
