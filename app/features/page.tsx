"use client";

import { motion, Variants } from "framer-motion";
import {
  Building2, Bell, Users,
  UserCheck, ShieldCheck, SplitSquareHorizontal,
  FileText, Database, TrendingUp,
  Mail, Clock, Repeat,
  Receipt, Wallet, CalendarDays,
  BarChart3, PieChart, LineChart
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Features() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="text-center mx-auto max-w-4xl px-4 md:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge className="mb-6">Platform Capabilities</Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#1f1a22]">
              Unique <span className="text-[#500088]">Features</span>
            </h1>
            <p className="text-lg text-[#4c4452] leading-relaxed">
              Discover how RekrutIQ automates the entire recruitment lifecycle—from client intake to final invoice—with powerful, domain-specific tools designed for modern agencies.
            </p>
          </motion.div>
        </section>

        {/* FEATURE 1: Client & Agreement Management */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-32">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[450px]" style={{ perspective: 1000 }}>
              <motion.div
                variants={itemVariants}
                className="relative h-full overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <video
                  src="/features.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover mix-blend-multiply brightness-[1.05] contrast-[1.05] rounded-3xl"
                />
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <Badge variant="warning" className="mb-4">UNIQUE FEATURES</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#1f1a22]">Comprehensive Client & Agreement Management</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><Building2 className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Centralized Client Data</h4>
                    <p className="text-[#4c4452]">Store all client details, contracts, and rate cards in one secure platform.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><Bell className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Automated Alerts</h4>
                    <p className="text-[#4c4452]">Get notified before agreements expire—ensure continuous billing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><Users className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Role-Specific Workflows</h4>
                    <p className="text-[#4c4452]">Manage permanent and contract staffing with tailored processes.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#500088] text-white p-6 rounded-2xl shadow-md">
                <p className="text-sm leading-relaxed"><strong className="text-[#dfb7ff]">Why it matters:</strong> Many platforms offer basic job tracking, but only RekrutIQ consolidates billing structures, client history, and contract renewals under a single roof—all with proactive reminders.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FEATURE 2: Role-Based Requisition */}
        <section className="bg-white border-y border-[#E5E7EB] py-32 mb-32">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants}>
                <Badge variant="success" className="mb-4">UNIQUE FEATURES</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#1f1a22]">Role-Based Requisition Workflow</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e]"><UserCheck className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Defined User Roles</h4>
                      <p className="text-[#4c4452]">Structured flow from Admin → Team Lead → Recruiter for clear task ownership.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e]"><ShieldCheck className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Standardized Handover</h4>
                      <p className="text-[#4c4452]">Ensure accountability with stage-wise responsibility across teams.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e]"><SplitSquareHorizontal className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Split Pipelines</h4>
                      <p className="text-[#4c4452]">Separate workflows for permanent and contract staffing to streamline operations.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f1a22] text-white p-6 rounded-2xl shadow-md">
                  <p className="text-sm leading-relaxed"><strong className="text-[#dae2fd]">Edge:</strong> Other systems offer generic workflows; RekrutIQ mirrors your agency structure for true end-to-end control.</p>
                </div>
              </motion.div>
              <div className="relative h-[450px]" style={{ perspective: 1000 }}>
                <motion.div
                  variants={itemVariants}
                  className="relative h-full overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.05, rotateY: -5, rotateX: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <video
                    src="/rolebased.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover mix-blend-multiply brightness-[1.05] contrast-[1.05] rounded-3xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURE 3: AI-Powered Talent Database */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-32">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[450px]" style={{ perspective: 1000 }}>
              <motion.div
                variants={itemVariants}
                className="relative h-full overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <video
                  src="/talentdb.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover mix-blend-multiply brightness-[1.05] contrast-[1.05] rounded-3xl"
                />
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <Badge variant="default" className="mb-4">UNIQUE FEATURES</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#1f1a22]">AI-Powered Talent Database & Sourcing</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><FileText className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Automated Resume Parsing</h4>
                    <p className="text-[#4c4452]">Use AI to parse, store, and organize resumes instantly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><Database className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Own Your Talent Pool</h4>
                    <p className="text-[#4c4452]">Build and search your private candidate database anytime.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><TrendingUp className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">AI-Driven Ranking</h4>
                    <p className="text-[#4c4452]">Match candidates to job specs with intelligent scoring—reduce sourcing costs by up to 40%.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#500088] to-[#6B21A8] text-white p-6 rounded-2xl shadow-md">
                <p className="text-sm leading-relaxed"><strong className="text-white">Advantage:</strong> While many platforms use AI for keyword matching, RekrutIQ uses it to own your talent pipeline—continuously improving with each placement.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FEATURE 4: Integrated Communication Hub */}
        <section className="bg-white border-y border-[#E5E7EB] py-32 mb-32">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4">UNIQUE FEATURES</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#1f1a22]">Integrated Communication Hub</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><Mail className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Built-In Email System</h4>
                      <p className="text-[#4c4452]">Streamline communication between recruiters, candidates, and clients.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><Clock className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Automated Templates & Reminders</h4>
                      <p className="text-[#4c4452]">Set up alerts for updates, follow-ups, and status changes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f1dbff] flex items-center justify-center text-[#500088]"><Repeat className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Seamless Coordination</h4>
                      <p className="text-[#4c4452]">Keep all parties aligned from job submission to candidate onboarding.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#500088] text-white p-6 rounded-2xl shadow-md">
                  <p className="text-sm leading-relaxed"><strong className="text-[#dfb7ff]">Insight:</strong> Instead of relying on external emailing tools, RekrutIQ keeps all interactions in-platform—saving time and preventing miscommunication.</p>
                </div>
              </motion.div>
              <div className="relative h-[450px]" style={{ perspective: 1000 }}>
                <motion.div
                  variants={itemVariants}
                  className="relative h-full overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <video
                    src="/communication.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover mix-blend-multiply brightness-[1.05] contrast-[1.05] rounded-3xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURE 5: Invoicing & Finance + Payroll Sync */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-32">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="order-2 lg:order-1 relative h-[450px] flex items-center justify-center">
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image 
                  src="/integrations.png" 
                  alt="Finance Integration" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-contain mix-blend-multiply brightness-[1.05] contrast-[1.05]" 
                />
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <Badge variant="warning" className="mb-4">UNIQUE FEATURES</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#1f1a22]">Invoicing & Finance + Payroll Sync</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffddbb] flex items-center justify-center text-[#2b1700]"><Receipt className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Automated Invoicing</h4>
                    <p className="text-[#4c4452]">Generate invoices automatically when candidates join.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffddbb] flex items-center justify-center text-[#2b1700]"><Wallet className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Seamless Finance Sync</h4>
                    <p className="text-[#4c4452]">Integrate with QuickBooks, Zoho Books and Tally for hassle-free billing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffddbb] flex items-center justify-center text-[#2b1700]"><CalendarDays className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Payroll Automation - yfy®</h4>
                    <p className="text-[#4c4452]">For contract staffing, auto-sync with yfy® Payroll for smooth monthly payouts and client billing.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f1a22] text-white p-6 rounded-2xl shadow-md">
                <p className="text-sm leading-relaxed"><strong className="text-[#ffddbb]">Benefit:</strong> You no longer need to export data for billing. RekrutIQ automates invoicing and payroll—eliminating friction between recruitment and finance teams.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FEATURE 6: Live Dashboards */}
        <section className="bg-white border-y border-[#E5E7EB] py-32 mb-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants}>
                <Badge variant="success" className="mb-4">UNIQUE FEATURES</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#1f1a22]">Live Dashboards & Analytics</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e]"><BarChart3 className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Track Key Metrics</h4>
                      <p className="text-[#4c4452]">Monitor sourcing success rates, interview-to-joining ratios, and revenue trends in real time.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e]"><LineChart className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Revenue & Opportunity Insights</h4>
                      <p className="text-[#4c4452]">Visualize pipeline forecasts, time-to-revenue, and identify lost opportunities.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e]"><PieChart className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-[#1f1a22] mb-1">Team Performance Visibility</h4>
                      <p className="text-[#4c4452]">Evaluate recruiter and team lead performance with actionable, role-specific dashboards.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#500088] text-white p-6 rounded-2xl shadow-md">
                  <p className="text-sm leading-relaxed"><strong className="text-[#dae2fd]">Why it wins:</strong> Deep metrics matter. Many ATSs provide high-level analytics, but few drill into ROI, bottlenecks, or conversion at individual contributor level—RekrutIQ does.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden glass-panel p-2 shadow-xl bg-white h-[450px]">
                <Image src="/experience_graphic.png" alt="Analytics Dashboard" width={800} height={600} className="w-full h-full object-cover rounded-2xl grayscale opacity-90" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
