"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Code, ArrowRight, PlusIcon } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/large-name-footer";
import { motion } from "framer-motion";

export default function AffarssystemPage() {
  return (
    <>
      <Navbar />
      <section className="grid-content relative w-full pt-32 pb-20">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Tillbaka
          </Link>

          {/* Hero Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full border-2 border-black shadow-2xl p-8 md:p-12 lg:p-16 bg-white mb-16"
          >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

            <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
              <div className="flex-1 space-y-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium">
                  <Code size={14} />
                  Affärssystem
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
                  Skräddarsydda affärssystem för er verksamhet
                </h1>
                
                <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                  Vi bygger CRM, CMS, LMS och andra digitala system anpassade efter just era behov. 
                  Inga standardlösningar – bara verktyg som fungerar för er.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/#contact"
                    className="px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 transition text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-2"
                  >
                    Kontakta oss <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hemsidor Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full border-2 border-black shadow-2xl p-8 md:p-12 bg-white mb-16"
          >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Hemsidor – skräddarsydda och underhållsfria</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Vi hjälper dig att ta fram en modern, snabb och säker hemsida för dig eller ditt företag. 
                    Alla våra webbplatser byggs från grunden med modern teknik, exempelvis Next.js, vilket ger 
                    hög prestanda, god säkerhet och utmärkta möjligheter till vidareutveckling.
                  </p>
                  <p>
                    Vi anpassar design och funktion helt efter dina behov – oavsett om det handlar om en enkel 
                    företagshemsida, en landningssida eller en mer avancerad webblösning. Inga färdiga mallar, 
                    utan en lösning som är byggd specifikt för dig.
                  </p>
                  <p>
                    Vi kan även ta över underhåll, vidareutveckla eller förbättra en befintlig hemsida. 
                    Vi analyserar din nuvarande lösning och ser till att den blir snabbare, säkrare och mer ändamålsenlig.
                  </p>
                </div>
              </div>
              
              <div className="flex-1 bg-gray-50 border border-gray-200 p-6 w-full">
                <h3 className="font-bold text-lg mb-4">Drift & Underhåll</h3>
                <p className="text-gray-600 mb-4">
                  För en fast månadsavgift erbjuder vi löpande underhåll av din hemsida.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Uppdateringar
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Teknisk övervakning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Säkerhetsförbättringar
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Mindre justeringar
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Affärssystem Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full border-2 border-black shadow-2xl p-8 md:p-12 bg-white mb-16"
          >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Affärssystem – anpassade för ert arbetssätt</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Vi utvecklar moderna och effektiva affärssystem såsom CMS, CRM och andra interna system som stödjer 
              och effektiviserar ert dagliga arbete. Alla lösningar skräddarsys efter ert företag, era processer 
              och ert team – inte tvärtom.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50/50 p-6 border border-blue-100">
                <div className="font-bold text-lg mb-2 text-blue-900">1. Licensbaserad lösning</div>
                <p className="text-gray-700 text-sm">
                  Ni använder systemet genom en licens och betalar en fast månadsavgift. 
                  I priset ingår drift, uppdateringar, tekniskt underhåll och support.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-200">
                <div className="font-bold text-lg mb-2">2. Ägande av systemet</div>
                <p className="text-gray-600 text-sm">
                  Ni köper systemet och äger lösningen fullt ut. Därefter betalar ni en månadsavgift 
                  för administration och underhåll för att hålla systemet säkert och uppdaterat.
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI & Data Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full border-2 border-black shadow-2xl p-8 md:p-12 bg-white"
          >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">AI & Data</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "AI-lösningar", desc: "För analys, automatisering och effektivare kundhantering." },
                { title: "Chatbots", desc: "Assistenter för kundtjänst, support och interna arbetsflöden." },
                { title: "Dataanalys", desc: "Vi hjälper er att omvandla data till tydliga insikter." },
                { title: "Rådgivning", desc: "Strategisk rådgivning kring AI-implementering." },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-200 hover:border-black transition-colors">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
