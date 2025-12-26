"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, PlusIcon, Heart, ShieldCheck, Zap, Mail, Phone } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/large-name-footer";
import { Button } from "@/components/ui/button";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { GearAnimation } from "@/components/ui/gear-animation";
import { motion } from "framer-motion";

export default function OmOssPage() {
  return (
    <>
      <Navbar />
      
      <div className="grid-content relative w-full pt-32 pb-16 md:pb-24">
        {/* Hero Section */}
        <section className="w-full">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition mb-8 text-sm"
            >
              <ArrowLeft size={16} />
              Tillbaka
            </Link>
            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative border-2 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
                <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
                <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
                <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
                
                <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
                  Mer än bara kod.
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Vi grundade ATLA med en enkel princip: Teknik ska inte bara fungera, den ska skapa värde. 
                  Vi är ingenjörer i grunden, problemlösare i själen och partners i praktiken.
                </p>
              </motion.div>

              {/* Visual Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative border-2 border-black bg-white p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center h-full w-full"
              >
                  <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white z-10" />
                  <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white z-10" />
                  <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white z-10" />
                  <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white z-10" />
                  
                  <div className="w-full h-full p-8 md:p-12 flex items-center justify-center bg-white">
                      <CpuArchitecture text="ATLA" />
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section - 3 Column Grid */}
        <section className="w-full py-16 md:py-24 border-t border-black/5">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border-2 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
              
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Vår Filosofi</h2>
                <p className="text-gray-600 max-w-xl">
                  I en bransch fylld av buzzwords och kortsiktiga lösningar väljer vi en annan väg.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                  <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 border border-blue-200">
                    <ShieldCheck className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Transparens</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Inga dolda avgifter, inga tekniska dimridåer. Vi tror på att utbilda våra kunder så att ni förstår vad ni betalar för och varför. En ärlig relation varar längst.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                  <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 border border-green-200">
                    <Zap className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ingenjörskonst</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vi är dataingenjörer, inte bara webbutvecklare. Det betyder att vi bygger system som håller – skalbara, säkra och optimerade från första raden kod.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="relative border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                  <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 border border-red-200">
                    <Heart className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Långsiktighet</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vi bygger inte bara för lansering, vi bygger för förvaltning. Våra lösningar är gjorda för att leva och växa med er verksamhet under många år.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team/Story Section */}
        <section className="w-full py-20 text-black">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border-2 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
              
              <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold text-black">Vilka är vi?</h2>
                  <div className="w-20 h-1 bg-blue-500"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    ATLA grundades av två vänner och kollegor som delade en vision: IT-konsulting borde vara enklare. 
                    Efter många år av arbete i komplexa projekt identifierade vi behovet av en partner som förenar teknisk spetskompetens med ett genuint personligt engagemang.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Vi drivs av teknikens möjligheter men förstår att teknik i slutändan handlar om människor. 
                    När ni jobbar med oss får ni inte bara leverantörer, utan engagerade medarbetare som bryr sig om ert resultat.
                  </p>
                </div>
                
                <div className="flex-1 w-full">
                  {/* Abstract Team Representation box */}
                  <div className="relative border-2 border-black bg-gray-50 p-8 md:p-12 rounded-lg">
                    <h3 className="text-2xl font-bold mb-6">Vårt löfte</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span className="text-blue-600 font-bold">01.</span>
                        <span className="text-gray-700">Vi talar klarspråk, inte teknisk jargong.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-600 font-bold">02.</span>
                        <span className="text-gray-700">Vi levererar i tid och inom budget.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-600 font-bold">03.</span>
                        <span className="text-gray-700">Vi finns kvar även efter leverans.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Animation below the box */}
                  <div className="mt-8">
                     <GearAnimation />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="w-full py-20">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border-2 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Möt grundarna</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Vi som driver ATLA är civilingenjörer med passion för teknik och affärsutveckling.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Founder 1: Kristian */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative border-2 border-black bg-white p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                  <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
                  
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-24 h-24 bg-blue-100 rounded-full border-2 border-black mb-6 flex items-center justify-center text-2xl font-bold font-falcon">
                        KA
                      </div>
                      <h3 className="text-3xl font-bold font-falcon mb-2">Kristian Atalla</h3>
                      <div className="inline-block bg-blue-100 px-3 py-1 border border-black text-sm font-bold mb-4">
                        CTO & Grundare
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-gray-700 flex-grow">
                      <p>
                        <strong>Civilingenjör i Datateknik</strong> och DevOps Engineer med bred teknisk kompetens och ett starkt fokus på hållbara lösningar.
                      </p>
                      <p className="text-sm">
                        Driven av att bygga skalbara, säkra system som löser verkliga problem. Ansvarar för den tekniska visionen och leveransen på ATLA.
                      </p>
                    </div>

                    <div className="mt-6 space-y-3 font-medium text-gray-800">
                      <div className="flex items-center gap-3">
                        <Mail className="text-blue-600 shrink-0" size={18} />
                        <a href="mailto:kristian@atlaconsult.se" className="hover:text-blue-600 transition-colors">
                          kris@atlaconsult.se
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-blue-600 shrink-0" size={18} />
                        <a href="tel:+46700000000" className="hover:text-blue-600 transition-colors">
                          076 072 25 78
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
                      <Link href="https://www.linkedin.com/in/kristian-atalla-6a279b253/" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                        LinkedIn &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Founder 2: Nicola */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="relative border-2 border-black bg-white p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                  <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
                  <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />
                  
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-24 h-24 bg-green-100 rounded-full border-2 border-black mb-6 flex items-center justify-center text-2xl font-bold font-falcon">
                        NL
                      </div>
                      <h3 className="text-3xl font-bold font-falcon mb-2">Nicola Latouf</h3>
                      <div className="inline-block bg-green-100 px-3 py-1 border border-black text-sm font-bold mb-4">
                        CFO & Grundare
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-gray-700 flex-grow">
                      <p>
                        <strong>Civilingenjör i Datateknik</strong> och DevOps Engineer med fokus på affärsprocesser och strategisk optimering.
                      </p>
                      <p className="text-sm">
                        Specialiserad på att koppla samman tekniska lösningar med affärsmål. Ser till att varje projekt levererar mätbart värde för kunden.
                      </p>
                    </div>

                    <div className="mt-6 space-y-3 font-medium text-gray-800">
                      <div className="flex items-center gap-3">
                        <Mail className="text-green-600 shrink-0" size={18} />
                        <a href="mailto:nicola@atlaconsult.se" className="hover:text-green-600 transition-colors">
                          nicola@atlaconsult.se
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-green-600 shrink-0" size={18} />
                        <a href="tel:+46729323813" className="hover:text-green-600 transition-colors">
                          072 932 38 13
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
                      <Link href="https://www.linkedin.com/in/nicola-latouf-8051811a5/" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                        LinkedIn &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border-2 border-black bg-white p-12 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
              <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Redo att ta nästa steg?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Hör av er till oss för ett förutsättningslöst samtal. Inga säljare, bara ingenjörer som vill hjälpa er framåt.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/kontakt">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    Kontakta oss
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
