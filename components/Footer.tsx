"use client";

import React from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bomstad text-white mb-4">ATLA</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Teknikdrivet konsultbolag som hjälper företag att bygga stabila och 
              framtidssäkra digitala lösningar.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:kontakt@atla.se"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition border border-gray-800 hover:border-gray-700"
                aria-label="Email"
              >
                <Mail size={18} className="text-gray-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition border border-gray-800 hover:border-gray-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition border border-gray-800 hover:border-gray-700"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-400" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-blauer text-sm mb-4">Tjänster</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white text-sm transition flex items-center gap-1 group"
                >
                  Molnarkitektur
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white text-sm transition flex items-center gap-1 group"
                >
                  AI & Automation
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white text-sm transition flex items-center gap-1 group"
                >
                  Cybersäkerhet
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white text-sm transition flex items-center gap-1 group"
                >
                  Fullstack-utveckling
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-blauer text-sm mb-4">Företag</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white text-sm transition flex items-center gap-1 group"
                >
                  Om oss
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white text-sm transition flex items-center gap-1 group"
                >
                  Kontakt
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} ATLA. Alla rättigheter reserverade.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-400 text-sm transition"
              >
                Integritetspolicy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-400 text-sm transition"
              >
                Användarvillkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
