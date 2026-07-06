"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Timer, BarChart3, Route, Search, Zap, Building2, Users } from "lucide-react";
import { Button } from "./components/ui/Button";
import { GlassCard } from "./components/ui/GlassCard";
import { Badge } from "./components/ui/Badge";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Stagger variations for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
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
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{ 
              opacity: { duration: 1, delay: 0.2, ease: "easeOut" },
              scale: { duration: 1, delay: 0.2, ease: "easeOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="mt-16 relative w-[100%] mx-auto rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0px_4px_40px_rgba(0,0,0,0.06)] bg-white/50"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6B21A8]/10 to-transparent mix-blend-multiply" />
            <Image
              src="/rek_banner.png"
              alt="RekrutIQ Banner"
              width={1376}
              height={768}
              className="w-full h-auto object-cover relative z-10 rounded-2xl"
              priority
            />
          </motion.div>
        </section>

        {/* SMART ATS SECTION */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-32" id="product">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div className="order-2 lg:order-1" style={{ perspective: 1000 }}>
              <motion.div 
                variants={itemVariants} 
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <video
                  src="/ats.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover mix-blend-multiply brightness-[1.05] contrast-[1.05] rounded-2xl"
                />
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <motion.div variants={itemVariants}>
                <Badge variant="success" className="mb-6">Performance</Badge>
                <h2 className="font-heading text-4xl font-bold tracking-tight mb-6 text-[#1f1a22]">
                  Smart ATS, Built for Speed.
                </h2>
                <p className="text-lg text-[#4c4452] mb-8 leading-relaxed">
                  Track candidates from sourcing to placement with AI-powered automation. Customize pipelines, parse resumes instantly, and never miss a critical hiring step.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Automated Parsing</h4>
                      <p className="text-[#4c4452]">Extract skills and experience with 99% accuracy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]">
                      <Route className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Custom Pipelines</h4>
                      <p className="text-[#4c4452]">Tailor workflows to match your exact agency process.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* AI INTELLIGENCE SECTION */}
        <section className="bg-[#f5ebf6] py-32 mb-32" id="solutions">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Badge variant="warning" className="mb-6">AI-Powered</Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1f1a22]">
                AI-Driven Intelligence.
              </h2>
              <p className="text-lg text-[#4c4452]">
                Build and search your own talent pool. Surface best-fit profiles instantly and reduce sourcing time.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <GlassCard>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 text-[#4F46E5] shadow-sm">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-[#1f1a22]">AI Resume Database</h3>
                <p className="text-[#4c4452] mb-6 leading-relaxed">
                  Build and reuse a smart, searchable talent pool automatically from your existing data.
                </p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-[#500088] hover:text-[#6b21a8] transition-colors">
                  Explore Database <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </GlassCard>

              <GlassCard>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 text-[#4F46E5] shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-[#1f1a22]">AI Candidate Matching</h3>
                <p className="text-[#4c4452] leading-relaxed">
                  Surface best-fit profiles instantly based on role requirements and historical data.
                </p>
              </GlassCard>

              <GlassCard>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 text-[#4F46E5] shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-[#1f1a22]">AI-Powered Sourcing</h3>
                <p className="text-[#4c4452] leading-relaxed">
                  Source, rank, and submit candidates using intelligent matching algorithms.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* INTEGRATIONS & KPI SECTION */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Left: Integrations */}
            <motion.div variants={itemVariants}>
              <Badge className="mb-6">Workflow</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#1f1a22]">
                Zero Disruptions
              </h2>
              <p className="text-lg text-[#4c4452] mb-8 leading-relaxed">
                No more tool-hopping. Manage everything from client intake to consultant payout in one seamless workflow with out-of-the-box integrations.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#500088]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Client & Job Capture</h4>
                    <p className="text-[#4c4452]">Centralize all client details and requisitions instantly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#500088]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Auto Invoicing Integration</h4>
                    <p className="text-[#4c4452]">Generate and sync invoices seamlessly with Zoho, QuickBooks, or Tally upon placement.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: KPIs */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-[0px_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BarChart3 className="w-64 h-64 text-[#500088]" />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold tracking-tight mb-4 text-[#1f1a22]">Agency Performance</h3>
                <p className="text-[#4c4452] mb-8">
                  Track recruiter KPIs, revenue, and time-to-fill in real time. Know what's working and where you're losing revenue.
                </p>
                <div className="space-y-4">
                  <div className="glass-panel p-4 flex items-center gap-4 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#f1dbff] text-[#500088] flex items-center justify-center"><TrendingUp className="w-5 h-5" /></div>
                    <span className="font-heading font-semibold text-[#1f1a22]">Revenue Per Hire</span>
                  </div>
                  <div className="glass-panel p-4 flex items-center gap-4 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#dae2fd] text-[#131b2e] flex items-center justify-center"><Timer className="w-5 h-5" /></div>
                    <span className="font-heading font-semibold text-[#1f1a22]">Time-to-Fill Analysis</span>
                  </div>
                  <div className="glass-panel p-4 flex items-center gap-4 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#ffddbb] text-[#2b1700] flex items-center justify-center"><BarChart3 className="w-5 h-5" /></div>
                    <span className="font-heading font-semibold text-[#1f1a22]">Team Performance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10 hover:text-white">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
