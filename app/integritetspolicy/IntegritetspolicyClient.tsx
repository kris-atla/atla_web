"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, PlusIcon } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/large-name-footer";
import { motion } from "framer-motion";

export default function IntegritetspolicyPage() {
  return (
    <>
      <Navbar />
      <section className="grid-content relative w-full pt-32 pb-20">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-10">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Tillbaka
          </Link>

          {/* Main Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full border-2 border-black shadow-2xl bg-white p-8 md:p-12 lg:p-16"
          >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

            <h1 className="text-3xl md:text-5xl font-bold text-black mb-8">
              Integritetspolicy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-bold text-black mt-8 mb-4">1. Personuppgiftsansvarig</h3>
              <p>
                <strong>ATLA IT Consulting AB</strong> är personuppgiftsansvarig för behandlingen av dina personuppgifter.
              </p>
              <p className="mt-2">
                <strong>Kontakt:</strong> <a href="mailto:info@atlaconsult.se" className="text-blue-600 hover:underline">info@atlaconsult.se</a>
              </p>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">2. Vilka uppgifter samlar vi in?</h3>
              <p>Vi samlar in följande personuppgifter när du kontaktar oss:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Namn</li>
                <li>E-postadress</li>
                <li>Telefonnummer</li>
                <li>Företagsnamn</li>
                <li>Innehåll i meddelanden</li>
              </ul>
              <p className="mt-2">
                Insamling sker via kontaktformulär, e-post eller telefon.
              </p>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">3. Ändamål och laglig grund</h3>
              <p>Vi behandlar dina uppgifter för att:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Besvara förfrågningar och kommunicera med dig (Intresseavvägning/Samtycke).</li>
                <li>Leverera våra tjänster (Avtal).</li>
              </ul>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">4. Mottagare av uppgifter (Biträden)</h3>
              <p>
                Vi använder <strong>Web3Forms</strong> som personuppgiftsbiträde för att hantera våra kontaktformulär. 
                Data kan komma att överföras utanför EU/EES med lämpliga skyddsåtgärder (t.ex. avtalsklausuler).
              </p>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">5. Lagringstid</h3>
              <p>
                Vi sparar dina uppgifter endast så länge det är nödvändigt för att uppfylla ändamålen ovan eller så länge det krävs enligt lag.
              </p>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">6. Cookies</h3>
              <p>
                Vi använder cookies för webbplatsens funktionalitet, analys och för att förbättra användarupplevelsen.
              </p>
              <p className="mt-2">
                <strong>Analys (Vercel Analytics):</strong> Vi använder Vercel Analytics för att analysera trafik och användarbeteende. 
                Dessa cookies sätts <strong>endast om du ger ditt samtycke</strong> via vår cookie-banner.
                Vi samlar in anonymiserad data för att förbättra våra tjänster.
              </p>
              <p className="mt-2">
                Du kan när som helst återkalla ditt samtycke genom att rensa cookies i din webbläsare.
              </p>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">7. Dina rättigheter</h3>
              <p>Enligt GDPR har du rätt att:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Begära tillgång till dina uppgifter (registerutdrag).</li>
                <li>Få felaktiga uppgifter rättade.</li>
                <li>Begära radering ("rätten att bli bortglömd").</li>
                <li>Invända mot behandling eller begära begränsning.</li>
                <li>Lämna klagomål till Integritetsskyddsmyndigheten (IMY).</li>
              </ul>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">8. Kontakt</h3>
              <p>
                För frågor om denna policy eller dina uppgifter, kontakta oss på: <br />
                <a href="mailto:info@atlaconsult.se" className="text-blue-600 hover:underline">info@atlaconsult.se</a>
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
                Senast uppdaterad: 2025-12-24
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
