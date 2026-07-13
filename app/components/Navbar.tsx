"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Plus, User } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel flex items-center justify-between rounded-full px-6 py-3">
          <Link href="/" className="flex items-center">
            <Image src="/riq_logo.png" alt="RekrutIQ Logo" width={140} height={40} className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${isActive
                      ? "bg-[#f1dbff] text-[#500088]"
                      : "text-[#7e7383] hover:text-[#500088] hover:bg-[#fbf0fc]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1dbff] text-[#500088]">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wider text-[#7e7383] uppercase">Mail To :</span>
                <a href="mailto:info@rekrutiq.io" className="text-sm font-bold text-brand-on-surface hover:text-brand-primary transition-colors">info@rekrutiq.io</a>
              </div>
            </div>
            <Link href="/contact" className="flex items-center gap-2 text-sm font-semibold text-[#500088] hover:text-[#380060] transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1dbff]">
                <Plus className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline">Let's Talk</span>
            </Link>
            <Link href="https://yfyai.online" target="_blank" rel="noopener noreferrer">
              <Button size="md" className="rounded-full px-6 gap-2">Login <User className="h-4 w-4" /></Button>
            </Link>

          </div>
        </div>
      </div>
    </motion.header>
  );
}
