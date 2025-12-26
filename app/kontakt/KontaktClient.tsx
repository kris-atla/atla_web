"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, PlusIcon } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/large-name-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { TechAnimation } from "@/components/ui/tech-animation";

export default function KontaktPage() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9e6d0115-ae64-4993-b020-0a8b93df150c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Tack för ditt meddelande! Vi återkommer snart.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Något gick fel. Försök igen senare.");
      }
    } catch (error) {
      setResult("Ett fel uppstod. Kontrollera din anslutning.");
    } finally {
      setIsSubmitting(false);
    }
  };
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

          {/* Main Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full border-2 border-black shadow-2xl bg-white flex flex-col lg:flex-row"
          >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

            {/* Left Side: Info */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black">
              <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
                Låt oss prata
              </h1>
              <p className="text-gray-600 text-lg mb-12 max-w-md">
                Har du ett projekt i åtanke? Låt oss ta en fika och prata om hur vi kan hjälpa er att växa.
                Vi svarar oftast inom 1 arbetsdag.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">info@atlaconsult.se</p>
                    <p className="text-gray-500 text-sm">Vi svarar alla dagar i veckan.</p>
                  </div>
                </div>
              </div>

              {/* Animation */}
              <TechAnimation />
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 bg-gray-50/50">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Förnamn</Label>
                    <Input id="firstName" name="First Name" placeholder="Anna" className="bg-white border-black/20 focus:border-black" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Efternamn</Label>
                    <Input id="lastName" name="Last Name" placeholder="Andersson" className="bg-white border-black/20 focus:border-black" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="anna@foretag.se" className="bg-white border-black/20 focus:border-black" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Meddelande</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Berätta vad ni behöver hjälp med..." 
                    className="min-h-[150px] bg-white border-black/20 focus:border-black" 
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center h-6">
                    <input
                      id="privacy-page"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
                      required
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="privacy-page" className="text-gray-600 cursor-pointer select-none">
                      Jag godkänner ATLA:s hantering av personuppgifter.{" "}
                      <Link href="/integritetspolicy" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
                        Se vår integritetspolicy.
                      </Link>
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                </Button>
                
                {result && (
                  <p className={`text-center text-sm font-medium ${result.includes("Tack") ? "text-green-600" : "text-red-500"}`}>
                    {result}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
