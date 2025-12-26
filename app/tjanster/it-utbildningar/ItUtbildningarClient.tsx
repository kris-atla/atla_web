"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, GraduationCap, ArrowRight, PlusIcon } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/large-name-footer";
import { motion } from "framer-motion";

export default function ITUtbildningarPage() {
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
                  <GraduationCap size={14} />
                  IT-Utbildningar
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
                  IT-utbildningar anpassade för ert team
                </h1>
                
                <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                  Vi erbjuder utbildningar inom programmering, IT-säkerhet, molnplattformar 
                  och agila metoder – praktiskt och direkt användbart.
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

          {/* Intro Section */}
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

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Praktisk kompetens för moderna verksamheter</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Vi erbjuder IT-utbildningar inom flera aktuella och efterfrågade områden, bland annat 
                    AI, IT-säkerhet och andra närliggande teknikområden. Våra utbildningar är utformade för 
                    att ge praktisk och direkt tillämpbar kunskap, oavsett om målgruppen är tekniska specialister, 
                    utvecklare eller verksamhetsnära roller.
                  </p>
                  <p>
                    Innehållet anpassas efter deltagarnas förkunskaper och företagets behov, med fokus på 
                    verkliga användningsfall, bästa praxis och aktuella verktyg och metoder.
                  </p>
                </div>
              </div>
              <div className="flex-1 w-full bg-blue-50 border border-blue-200 p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Vårt mål</h3>
                <p className="text-blue-800 text-lg font-medium leading-relaxed">
                  "Att stärka er interna kompetens, öka säkerheten och hjälpa er att dra nytta av ny teknik 
                  på ett strukturerat och affärsnyttigt sätt."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formats Section */}
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

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Flexibla utbildningsformat</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Workshops", desc: "Intensiva och interaktiva sessioner där vi dyker djupt i ett specifikt ämne." },
                { title: "Utbildningsprogram", desc: "Längre program som bygger kompetens över tid genom teori och praktik." },
                { title: "Skräddarsytt", desc: "Helt anpassade utbildningar för era specifika behov och system." },
              ].map((fmt, i) => (
                <div key={i} className="bg-white border border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{fmt.title}</h3>
                  <p className="text-gray-600">{fmt.desc}</p>
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
