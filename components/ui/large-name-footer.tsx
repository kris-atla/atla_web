"use client";
import Link from "next/link";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="relative z-10 w-full bg-black py-12 md:py-16 border-t border-zinc-900">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Left Column - Brand */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold font-falcon text-white tracking-tight">
                ATLA<span className="text-blue-500">.</span>
              </span>
            </Link>
            
            <p className="max-w-md text-gray-400 text-sm leading-relaxed">
              Vi omdefinierar vad som är möjligt i den digitala tidsåldern. Vi bygger systemen som driver framtiden.
            </p>

            <div className="flex gap-6">
              {/* Social links removed or just Twitter remaining if needed */}
              {/* <Link href="https://x.com" ...> Twitter </Link> - User didn't ask to remove Twitter, but typically 'remove linkedin and github' implies cleaning up socials. I'll leave Twitter if it exists or just empty the div if no socials are wanted. The user specifically named LinkedIn and GitHub. I'll remove those. */}
             <Link href="https://x.com" className="text-gray-500 hover:text-white transition-colors">
                <Icons.twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Middle Column - Solutions */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">Tjänster</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#services" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Affärssystem
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-gray-500 hover:text-white transition-colors">
                  IT-Utbildningar
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Support & Vägledning
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <Link href="mailto:info@atlaconsult.se" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center text-[10px]">@</span>
                  info@atlaconsult.se
                </Link>
              </li>
              <li>
                <div className="text-sm text-gray-500 flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center text-[10px] mt-0.5 flex-shrink-0">P</span>
                  <span className="leading-tight">
                    Åstadalsvägen 3E<br />
                    702 81 Örebro
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} ATLA IT Consulting AB. Org.nr: 559561-6797.
          </p>
          <div className="flex gap-6">
            <Link href="/integritetspolicy" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Integritetspolicy
            </Link>
            <Link href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Användarvillkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
