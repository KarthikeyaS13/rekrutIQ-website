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
            <Link href="/" className="flex items-center mb-6">
              <Image src="/riq_logo.png" alt="RekrutIQ Logo" width={160} height={45} className="h-12 w-auto object-contain" />
            </Link>
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
            <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></Link>
            <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">Twitter <ArrowUpRight className="w-3 h-3" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
