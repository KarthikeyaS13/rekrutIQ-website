"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1f1a22] text-white py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/rekdarkmode.png" 
                  alt="RekrutIQ Logo" 
                  width={200} 
                  height={60} 
                  className="h-12 md:h-14 w-auto object-contain" 
                />
              </Link>

              <div className="flex items-center gap-2.5 pl-3 sm:pl-4 border-l border-[#342e37]">
                <span className="text-[11px] uppercase tracking-wider text-[#7e7383] font-semibold whitespace-nowrap">
                  Powered by
                </span>
                <Link href="https://finnovo.io" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <div className="bg-white rounded-md px-2 py-0.5 flex items-center shadow-sm hover:opacity-90 transition-opacity">
                    <Image 
                      src="/lighmodelogo.png" 
                      alt="FINNOVO®" 
                      width={100} 
                      height={28} 
                      className="h-5 md:h-6 w-auto object-contain" 
                    />
                  </div>
                </Link>
              </div>
            </div>
            <p className="text-[#a199a6] max-w-sm text-sm leading-relaxed">
              Powering Recruitment Agencies from First Hello to Final Invoice. Built for Recruiters. Powered by AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-sm mb-6 tracking-wide text-[#dfb7ff]">PRODUCT</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#a199a6]">
              <li><Link href="#" className="hover:text-white transition-colors">Smart ATS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Matching</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-sm mb-6 tracking-wide text-[#dfb7ff]">COMPANY</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#a199a6]">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#342e37] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7e7383]">
          <p>© {new Date().getFullYear()} RekrutIQ. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/company/finnovo/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
