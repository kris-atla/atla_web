"use client";

import FloatingTerminal from "@/components/FloatingTerminal";
import { PlusIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-24 pb-16"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center">
        {/* Main Bordered Container */}
        <div className="relative w-full border-2 border-black shadow-2xl p-8 md:p-12 lg:p-16 bg-white">
          {/* Corner Plus Icons */}
          <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
          <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-6 z-10">
              
              
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight"
              >
                <span className="lg:hidden">Krånglar tekniken?</span>
                <span className="hidden lg:inline lg:whitespace-nowrap">Ser detta krångligt ut?</span>
                <br />Låt oss sköta det!
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                Vi hjälper er med tekniken, så kan ni göra det ni är bäst på!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 transition text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  Boka en fika
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-50 transition text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  Tjänster
                </a>
              </div>
            </div>

            {/* Right Column - Terminal (Desktop only) */}
            <div className="hidden lg:block relative flex-shrink-0">
              <div className="relative w-[480px]">
                <FloatingTerminal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
