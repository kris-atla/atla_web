"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Heart, ArrowRight, PlusIcon } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/large-name-footer";
import { motion } from "framer-motion";

export default function SupportPage() {
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
                  <Heart size={14} />
                  Support & Vägledning
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
                  Vi finns här när det strular
                </h1>
                
                <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                  Snabb och professionell IT-support. Vi lyssnar, felsöker och 
                  hittar lösningar så ni kan fokusera på det som faktiskt spelar roll.
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

          {/* Drift & Förvaltning Section */}
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

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Drift, support & förvaltning</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Applikationsdrift och förvaltning</h3>
                  <p className="text-gray-600">
                    Vi ansvarar för säker och stabil drift av era webbplatser och system. Tjänsten omfattar 
                    hosting, övervakning, uppdateringar och backup för att säkerställa hög tillgänglighet.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Tekniskt supportavtal (SLA)</h3>
                  <p className="text-gray-600">
                    Med ett supportavtal får ni tillgång till snabb och strukturerad teknisk support enligt 
                    överenskomna svarstider och servicenivåer.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Prestanda- och tillgänglighetsoptimering</h3>
                  <p className="text-gray-600">
                    Vi analyserar och optimerar era lösningar för bättre laddtider, högre stabilitet och 
                    en förbättrad användarupplevelse.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Backup och återställning</h3>
                  <p className="text-gray-600">
                    Vi implementerar säkra backup-lösningar och tydliga återställningsrutiner, så att 
                    verksamheten snabbt kan återupptas vid incidenter.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Domän- och e-postkontroll Section */}
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
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Domän- och e-postkontroll</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Vi erbjuder kontroller av företagsdomäner och tillhörande e-postadresser för att identifiera 
                    om uppgifter har förekommit i dataläckor eller spridits på nätet.
                  </p>
                  <p>
                    Ni får en tydlig översikt över eventuella exponeringar samt rekommendationer på åtgärder 
                    för att minska risken för obehörig åtkomst och framtida incidenter.
                  </p>
                </div>
              </div>
              <div className="flex-1 w-full bg-red-50 border border-red-100 p-8">
                <h3 className="text-xl font-bold text-red-900 mb-2">Varför är detta viktigt?</h3>
                <p className="text-red-800 text-sm mb-4">
                  Personuppgifter och lösenord på vift är en av de största säkerhetsriskerna för företag idag.
                </p>
                <div className="inline-flex items-center gap-2 text-red-900 font-bold border-b border-red-900 pb-0.5">
                  Säkra er digitala närvaro
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rådgivning Section */}
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

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center">Rådgivning & Strategi</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Digital strategi", desc: "Vi hjälper er ta fram en långsiktig och hållbar strategi för system och utveckling." },
                { title: "Teknisk due diligence", desc: "Granskningar av system och infrastruktur inför investeringar eller uppköp." },
                { title: "Arkitekturrådgivning", desc: "Rådgivning kring teknikval och skalbarhet för hållbara lösningar." },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-gray-50 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
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
