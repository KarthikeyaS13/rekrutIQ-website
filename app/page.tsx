"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Timer, BarChart3, Route, Search, Zap, Building2, Users, Receipt, Mail, Database } from "lucide-react";
import { Button } from "./components/ui/Button";
import { GlassCard } from "./components/ui/GlassCard";
import { Badge } from "./components/ui/Badge";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroCarousel } from "./components/HeroCarousel";
import { IntegrationsSection } from "./components/IntegrationsSection";
import { EcosystemSection } from "./components/EcosystemSection";

// Stagger variations for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="relative mx-auto max-w-7xl px-4 md:px-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="default" className="mb-8">RekrutIQ Next-Gen</Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-[#1f1a22]">
              Intelligent Recruitment Platform
            </h1>
            <p className="text-lg md:text-xl text-[#4c4452] mb-10 max-w-2xl mx-auto leading-relaxed">
              Streamline sourcing, candidate tracking, and invoicing in one enterprise-grade platform. Built for speed, powered by intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2 cursor-pointer">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full cursor-pointer">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          <HeroCarousel />
        </section>

        {/* WHAT MAKES US DIFFERENT SECTION */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-32 pt-10" id="different">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image with Overlay */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pr-0 sm:pr-24 lg:pr-32"
            >
              <div className="rounded-2xl overflow-hidden w-full max-w-md mx-auto lg:mx-0">
                <Image
                  src="/what makesusdefferent.png"
                  alt="What Makes Us Different"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              
              {/* Purple Overlay Card */}
              <div className="sm:absolute relative mt-8 sm:mt-0 sm:top-12 sm:-right-8 lg:-right-16 bg-[#6b21a8] rounded-2xl p-8 text-white shadow-2xl w-full sm:w-[320px] md:w-[380px] z-10">
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-[#6b21a8] flex items-center justify-center mt-1">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Smart ATS, Built for Recruiters</h4>
                      <p className="text-sm text-white/90 leading-relaxed">
                        AI-driven applicant tracking that streamlines sourcing, screening, and hiring.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-[#6b21a8] flex items-center justify-center mt-1">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">CRM Meets Recruitment</h4>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Manage clients, jobs, and communication in one integrated platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-[#6b21a8] flex items-center justify-center mt-1">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Auto-Building Talent Pool</h4>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Resume parsing feeds a dynamic, searchable database of candidates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Text and Progress Bars */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:pl-8 mt-16 lg:mt-0"
            >
              <h4 className="text-xs font-bold tracking-widest text-[#500088] uppercase mb-4">
                Built for Recruiters. Powered by AI.
              </h4>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1f1a22] leading-tight">
                What Makes rekrutIQ® Different?
              </h2>
              <p className="text-[#4c4452] mb-6 leading-relaxed">
                rekrutIQ® isn't just another ATS. It's a recruitment-first platform that combines everything your agency needs:
              </p>
              <p className="text-xs text-[#7e7383] mb-10 italic">
                * These figures can vary based on agency size, team maturity, and adoption level.
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <div className="flex justify-between text-sm font-bold text-[#1f1a22] mb-2">
                    <span>Sourcing Time reduces by *</span>
                    <span>55%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#6b21a8] h-2 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-[#1f1a22] mb-2">
                    <span>Sourcing Cost reduces by *</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#6b21a8] h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-[#1f1a22] mb-2">
                    <span>Turn Around Time (TAT) reduces by *</span>
                    <span>33%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#6b21a8] h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 py-6 text-md font-semibold bg-[#6b21a8] hover:bg-[#581c87] text-white">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* UNIQUE FEATURES MARQUEE SECTION */}
        <section className="bg-[#f5ebf6] py-32 mb-32 overflow-hidden" id="solutions">
          <div className="mx-auto max-w-7xl px-4 md:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge variant="warning" className="mb-6 uppercase">OUR UNIQUE FEATURES</Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[#1f1a22]">
                Discover Our Unique Features
              </h2>
            </motion.div>
          </div>

          <div className="relative flex overflow-hidden w-full group py-4">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[
                {
                  title: "ATS + CRM in One",
                  desc: "Manage candidates, clients, and jobs from a single dashboard.",
                  icon: <Building2 className="w-6 h-6" />,
                  color: "text-[#EF4444]",
                  link: "Read More"
                },
                {
                  title: "Auto Invoicing Integration",
                  desc: "Generate and sync invoices with Zoho, QuickBooks, or Tally.",
                  icon: <Receipt className="w-6 h-6" />,
                  color: "text-[#10B981]",
                  link: "Read More"
                },
                {
                  title: "Live Performance Analytics",
                  desc: "Track recruiter KPIs, revenue, and time-to-fill in real time.",
                  icon: <BarChart3 className="w-6 h-6" />,
                  color: "text-[#8B5CF6]",
                  link: "Read More"
                },
                {
                  title: "AI Candidate Matching",
                  desc: "Surface best-fit profiles instantly from your existing database.",
                  icon: <Search className="w-6 h-6" />,
                  color: "text-[#3B82F6]",
                  link: "Read More"
                },
                {
                  title: "Built-In Communication Tools",
                  desc: "Connect Gmail, Zoom, Teams & more—fully synced in one place.",
                  icon: <Mail className="w-6 h-6" />,
                  color: "text-[#F59E0B]",
                  link: "Read More"
                },
                {
                  title: "AI Resume Database",
                  desc: "Build and reuse a smart, searchable talent pool automatically.",
                  icon: <Database className="w-6 h-6" />,
                  color: "text-[#EC4899]",
                  link: "Read More"
                }
              ].map((item, i) => (
                <div key={i} className="w-[350px] mx-4 shrink-0">
                  <GlassCard className="h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 shadow-sm ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3 text-[#1f1a22]">{item.title}</h3>
                    <p className="text-[#4c4452] mb-6 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                    <a href="#" className="inline-flex items-center text-sm font-semibold text-[#1f1a22] hover:text-[#500088] transition-colors mt-auto">
                      {item.link} <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </GlassCard>
                </div>
              ))}
              {/* Duplicate array for seamless marquee */}
              {[
                {
                  title: "ATS + CRM in One",
                  desc: "Manage candidates, clients, and jobs from a single dashboard.",
                  icon: <Building2 className="w-6 h-6" />,
                  color: "text-[#EF4444]",
                  link: "Read More"
                },
                {
                  title: "Auto Invoicing Integration",
                  desc: "Generate and sync invoices with Zoho, QuickBooks, or Tally.",
                  icon: <Receipt className="w-6 h-6" />,
                  color: "text-[#10B981]",
                  link: "Read More"
                },
                {
                  title: "Live Performance Analytics",
                  desc: "Track recruiter KPIs, revenue, and time-to-fill in real time.",
                  icon: <BarChart3 className="w-6 h-6" />,
                  color: "text-[#8B5CF6]",
                  link: "Read More"
                },
                {
                  title: "AI Candidate Matching",
                  desc: "Surface best-fit profiles instantly from your existing database.",
                  icon: <Search className="w-6 h-6" />,
                  color: "text-[#3B82F6]",
                  link: "Read More"
                },
                {
                  title: "Built-In Communication Tools",
                  desc: "Connect Gmail, Zoom, Teams & more—fully synced in one place.",
                  icon: <Mail className="w-6 h-6" />,
                  color: "text-[#F59E0B]",
                  link: "Read More"
                },
                {
                  title: "AI Resume Database",
                  desc: "Build and reuse a smart, searchable talent pool automatically.",
                  icon: <Database className="w-6 h-6" />,
                  color: "text-[#EC4899]",
                  link: "Read More"
                }
              ].map((item, i) => (
                <div key={`dup-${i}`} className="w-[350px] mx-4 shrink-0">
                  <GlassCard className="h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 shadow-sm ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3 text-[#1f1a22]">{item.title}</h3>
                    <p className="text-[#4c4452] mb-6 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                    <a href="#" className="inline-flex items-center text-sm font-semibold text-[#1f1a22] hover:text-[#500088] transition-colors mt-auto">
                      {item.link} <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUTOMATE EVERY STEP SECTION */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:pr-8"
            >
              <h4 className="text-xs font-bold tracking-widest text-[#6b21a8] uppercase mb-4">
                FROM REQUISITION TO REVENUE — ALL IN ONE PLATFORM
              </h4>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1f1a22] leading-tight">
                Built to Automate Every Step
              </h2>
              <p className="text-[#4c4452] mb-10 leading-relaxed">
                No more tool-hopping or spreadsheet headaches. RekrutIQ simplifies:
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] text-[#6b21a8] flex items-center justify-center mt-1">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#1f1a22] mb-1">Smarter Hiring Workflow</h4>
                    <p className="text-[#4c4452] text-sm leading-relaxed">
                      From creating job orders to sourcing and tracking candidates — manage everything in one place with AI-driven efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] text-[#6b21a8] flex items-center justify-center mt-1">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#1f1a22] mb-1">Seamless Collaboration & Communication</h4>
                    <p className="text-[#4c4452] text-sm leading-relaxed">
                      Keep clients in the loop with centralized messaging and real-time feedback tools built right into your workflow.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] text-[#6b21a8] flex items-center justify-center mt-1">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#1f1a22] mb-1">Automated Financials & Performance Insights</h4>
                    <p className="text-[#4c4452] text-sm leading-relaxed">
                      Instantly generate invoices after placements and track recruiter performance with built-in analytics — no spreadsheets required.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 lg:mt-0"
            >
              <video
                src="/automate.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-3xl mix-blend-multiply"
              />
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mx-auto max-w-5xl px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#500088] rounded-[2rem] p-12 md:p-20 relative overflow-hidden text-white shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6b21a8] to-transparent opacity-50" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Powering Recruitment Agencies from First Hello to Final Invoice.
              </h2>
              <p className="text-[#dfb7ff] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join top recruitment firms scaling their operations with rekrutIQ's intelligent platform. Built for Recruiters. Powered by AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-white text-[#500088] hover:bg-[#fbf0fc]">
                  Get Started Today
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10 hover:text-white">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <IntegrationsSection />
        <EcosystemSection />
      </main>

      <Footer />
    </div>
  );
}
