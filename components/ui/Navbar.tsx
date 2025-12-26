"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Code, GraduationCap, Heart, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isLightSection, setIsLightSection] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const services = [
    {
      icon: Code,
      title: "Affärssystem",
      desc: "CRM, CMS, LMS eller anpassade system",
      href: "/tjanster/digitala-losningar"
    },
    {
      icon: GraduationCap,
      title: "IT-Utbildningar",
      desc: "Programmering, IT-säkerhet, molnplattformar",
      href: "/tjanster/it-utbildningar"
    },
    {
      icon: Heart,
      title: "Support & Vägledning",
      desc: "Teknisk support och problemlösning",
      href: "/tjanster/support"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show background as soon as user scrolls down
      const scrolled = window.scrollY > 10;
      setIsLightSection(!scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tjänster", href: "/tjanster" },
    { name: "Om oss", href: "/om-oss" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[9999]
        transition-all
        ${isMobileMenuOpen ? "duration-0" : "duration-300"}
        ${
          isMobileMenuOpen
            ? "bg-white shadow-none"
            : isLightSection
            ? "bg-transparent backdrop-blur-0 shadow-none"
            : "bg-white/70 backdrop-blur-md shadow-sm"
        }
      `}
    >
      <div className="w-full px-6 md:px-10">
        <div className="flex justify-between items-center h-24">
          <Link
            href="/"
            className={`
              font-falcon text-4xl tracking-tight relative z-[100]
              transition-all duration-300
              ${isMobileMenuOpen ? "text-black" : (isLightSection ? "text-black" : "text-black")}
            `}
          >
            ATLA<span className="text-blue-500 font-falcon">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {/* Tjänster with dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <Link
                href="/tjanster"
                className={`
                `}
              >
                Tjänster
                <span
                  className={`
                    absolute -bottom-[3px] left-0 h-[2px] 
                    transition-all duration-300 group-hover:w-full
                    ${pathname?.startsWith('/tjanster') ? "w-full" : "w-0"}
                    ${isLightSection ? "bg-black" : "bg-black"}
                  `}
                />
              </Link>

              {/* Dropdown Menu */}
              {showServicesDropdown && (
                <div className="absolute top-full left-0 pt-2">
                  <div 
                    className={`
                      w-80 rounded-xl shadow-2xl overflow-hidden
                      transition-all duration-200
                      ${isLightSection ? "bg-white/95 border border-black/10" : "bg-white/95 border border-black/10"}
                      backdrop-blur-xl
                    `}
                  >
                  {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={idx}
                        href={service.href}
                        className={`
                          flex items-start gap-4 p-4 transition-all duration-200
                          ${isLightSection 
                            ? "hover:bg-black/5 border-b border-black/5 last:border-b-0" 
                            : "hover:bg-black/5 border-b border-black/5 last:border-b-0"
                          }
                        `}
                      >
                        <div className={`
                          w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                          ${isLightSection ? "bg-blue-500/10 text-blue-600" : "bg-blue-500/10 text-blue-600"}
                        `}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`
                            text-sm font-semibold mb-1
                            ${isLightSection ? "text-black" : "text-black"}
                          `}>
                            {service.title}
                          </h4>
                          <p className={`
                            text-xs
                            ${isLightSection ? "text-gray-600" : "text-gray-600"}
                          `}>
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                </div>
              )}
            </div>

            {/* Other nav links */}
            <Link
              href="/om-oss"
              className={`
                text-sm font-medium relative group transition-all duration-200
                ${isLightSection ? "text-black" : "text-black"}
              `}
              >
                Om oss
                <span
                  className={`
                    absolute -bottom-[3px] left-0 h-[2px]
                    transition-all duration-300 group-hover:w-full
                    ${pathname === '/om-oss' ? "w-full" : "w-0"}
                    ${isLightSection ? "bg-black" : "bg-black"}
                  `}
                />
              </Link>

            <Link
              href="/kontakt"
              className={`
                text-sm font-medium relative group transition-all duration-200
                ${isLightSection ? "text-black" : "text-black"}
              `}
              >
                Kontakt
                <span
                  className={`
                    absolute -bottom-[3px] left-0 h-[2px]
                    transition-all duration-300 group-hover:w-full
                    ${pathname === '/kontakt' ? "w-full" : "w-0"}
                    ${isLightSection ? "bg-black" : "bg-black"}
                  `}
                />
              </Link>

            <Link
              href="/kontakt"
              className="
                px-6 py-2.5 text-sm font-semibold rounded-none flex items-center gap-2
                transition-all duration-200
                bg-blue-500 text-white border-2 border-black
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-[2px] hover:translate-y-[2px]
                active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
              "
            >
              Kom igång <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
              md:hidden relative z-[100] p-2 transition-colors duration-300 outline-none
              ${isMobileMenuOpen ? "text-black" : (isLightSection ? "text-black" : "text-black")}
            `}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white border-l-2 border-black z-[95] flex flex-col pt-32 px-10 shadow-[-10px_0px_30px_-10px_rgba(0,0,0,0.1)] md:hidden"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-4xl font-bold text-black hover:text-blue-600 transition-colors tracking-tight group flex items-center justify-between"
                    >
                      {link.name}
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4" size={24} />
                    </Link>
                  </motion.div>
                ))}

                <motion.div 
                  custom={3} 
                  variants={linkVariants}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <Link
                    href="/kontakt"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
                      w-full py-4 text-center text-lg font-bold rounded-none flex items-center justify-center gap-2
                      transition-all duration-200
                      bg-blue-600 text-white border-2 border-black
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                      active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
                    "
                  >
                    Starta projekt <ArrowRight size={20} />
                  </Link>
                </motion.div>
                
                {/* Social/Extra links could go here */}
                <motion.div 
                  custom={4}
                  variants={linkVariants}
                  className="mt-auto pb-10 text-gray-400 text-sm font-medium"
                >
                  <p>© 2025 ATLA AB</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
