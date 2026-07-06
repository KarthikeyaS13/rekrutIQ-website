"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle2, Target, Brain, Briefcase, Zap, ShieldCheck, HeartHandshake, Layers } from "lucide-react";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { Badge } from "../components/ui/Badge";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="relative mx-auto max-w-7xl px-4 md:px-8 mb-24 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div>
              <Badge variant="default" className="mb-6">About FINNOVO®</Badge>
              <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-[#1f1a22]">
                Built on Expertise.<br />
                <span className="text-[#500088]">Driven by Innovation.</span>
              </h1>
              <p className="text-lg text-[#4c4452] mb-6 leading-relaxed">
                <strong className="font-semibold text-[#1f1a22]">rekrutIQ™</strong> is a product of <strong className="font-semibold text-[#1f1a22]">FINNOVO®</strong>, a tech-first company with deep roots in finance, HR, and operations. With flagship platforms like yfy.ai for end-to-end HR and payroll automation and rekrutIQ™ for intelligent recruitment, FINNOVO® brings a rare blend of domain expertise and technology innovation.
              </p>
              <p className="text-lg text-[#4c4452] mb-10 leading-relaxed">
                Unlike typical software companies, FINNOVO® is built by finance and compliance professionals, giving it an insider’s view of real-world business challenges—and the tools to solve them at scale.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  <Play className="w-4 h-4 fill-current" /> Watch Video
                </Button>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  To Know More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl"
              >
                <video
                  src="/aboutus.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover mix-blend-multiply brightness-[1.05] contrast-[1.05] rounded-3xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* WHO WE ARE SECTION */}
        <section className="bg-white border-y border-[#E5E7EB] py-24 mb-32">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
              <motion.div variants={itemVariants} className="lg:col-span-5">
                <Badge variant="warning" className="mb-6">Who We Are</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#1f1a22] leading-tight">
                  More Than a Software Company – We’re Your Recruitment Technology Partner.
                </h2>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-3 text-[#500088] font-semibold bg-[#f1dbff] px-4 py-3 rounded-xl w-fit">
                    <Briefcase className="w-5 h-5" /> Domain Expertise
                  </div>
                  <div className="flex items-center gap-3 text-[#131b2e] font-semibold bg-[#dae2fd] px-4 py-3 rounded-xl w-fit">
                    <Brain className="w-5 h-5" /> AI-First Approach
                  </div>
                  <div className="flex items-center gap-3 text-[#2b1700] font-semibold bg-[#ffddbb] px-4 py-3 rounded-xl w-fit">
                    <Target className="w-5 h-5" /> Business-Centric Solutions
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center">
                <p className="text-xl text-[#4c4452] leading-relaxed mb-10">
                  RekrutIQ is developed by <strong className="font-semibold text-[#1f1a22]">Finnovo®</strong>, a pioneering software company born at the intersection of finance and technology. Founded by a team of seasoned accountants, HR experts, and AI engineers, Finnovo equips businesses with cutting-edge SaaS platforms to digitize operations and deliver real-time insights.
                </p>
                <div className="glass-panel p-8 rounded-2xl border border-[#E5E7EB] bg-[#fbf0fc]/50">
                  <h3 className="font-heading font-bold text-2xl text-[#500088] mb-3">Your Recruitment Tech Partner.</h3>
                  <p className="text-[#4c4452]">Building smart solutions to help agencies grow faster.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CORE PILLARS SECTION */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <GlassCard>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 text-[#500088] shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-[#1f1a22]">Built for Agencies, By Experts</h3>
              <p className="text-[#4c4452] leading-relaxed">
                Designed by recruitment veterans and AI specialists—not repurposed HR software.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 text-[#4F46E5] shadow-sm">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-[#1f1a22]">True End-to-End Automation</h3>
              <p className="text-[#4c4452] leading-relaxed">
                From client intake to invoicing and payroll, everything flows seamlessly in one platform.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 text-[#131b2e] shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-[#1f1a22]">AI-Driven Insights & Integrations</h3>
              <p className="text-[#4c4452] leading-relaxed">
                AI-powered sourcing, smart dashboards, and trusted integrations streamline every operation.
              </p>
            </GlassCard>
          </motion.div>
        </section>

        {/* MISSION & DOMAIN-LED TECH */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Mission */}
            <motion.div variants={itemVariants} className="bg-[#500088] rounded-[2rem] p-10 md:p-14 relative overflow-hidden text-white shadow-xl flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6b21a8] to-transparent opacity-50" />
              <div className="relative z-10">
                <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-none">Our Mission</Badge>
                <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Simplify Recruitment.<br />Focus on Growth.
                </h2>
                <p className="text-[#dfb7ff] text-lg mb-10 leading-relaxed">
                  To empower recruitment agencies with a single, intelligent platform that automates their full lifecycle—from client intake to candidate placement and revenue realization—so they can focus on what matters: building relationships and scaling growth.
                </p>
                <Button size="lg" className="bg-white text-[#500088] hover:bg-[#fbf0fc] w-fit">
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Domain-Led Tech */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <Badge variant="success" className="mb-6 w-fit">Expertise that builds smarter software.</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#1f1a22]">
                The Power of Domain-Led Tech
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#500088]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-[#1f1a22] mb-2">Context-Driven Innovation</h4>
                    <p className="text-[#4c4452] text-lg">We build tech that understands the problem before solving it.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#500088]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-[#1f1a22] mb-2">Scalable by Design</h4>
                    <p className="text-[#4c4452] text-lg">Our domain insight future-proofs every feature from day one.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#500088]">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-[#1f1a22] mb-2">Human Logic Meets Code</h4>
                    <p className="text-[#4c4452] text-lg">We bridge business realities with engineering precision.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
