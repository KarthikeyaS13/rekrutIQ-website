"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Send } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-4 md:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <Badge className="mb-6">Contact Us</Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-[#1f1a22]">
              Let’s Start Working<br />
              <span className="text-[#500088]">Together!</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Information (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-10"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#1f1a22] mb-6">Get in Touch</h3>
                <p className="text-lg text-[#4c4452] leading-relaxed">
                  Have questions about RekrutIQ? Want to see a custom demo? Our team is ready to help you streamline your recruitment agency operations.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#500088]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-[#1f1a22] mb-2">Our Office Address:</h4>
                    <p className="text-[#4c4452] text-lg leading-relaxed">
                      FINNOVO® #102, Bhanu Elite, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana - 500 081
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#500088]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-[#1f1a22] mb-2">Email Address:</h4>
                    <p className="text-[#4c4452] text-lg flex flex-col gap-1">
                      <a href="mailto:info@rekrutiq.io" className="hover:text-[#500088] transition-colors">info@rekrutiq.io</a>
                      <a href="mailto:rekrutiq@finnovo.io" className="hover:text-[#500088] transition-colors">rekrutiq@finnovo.io</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#500088]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-[#1f1a22] mb-2">Business Hours:</h4>
                    <p className="text-[#4c4452] text-lg leading-relaxed flex flex-col gap-1">
                      <span>Monday – Friday: 11:00 AM – 05:30 PM (IST)</span>
                      <span>Saturday – Sunday: Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <form className="glass-panel p-8 md:p-10 rounded-[2rem] border border-[#E5E7EB] shadow-xl bg-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Send className="w-48 h-48 text-[#500088]" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#1f1a22]">First Name*</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all"
                        placeholder="Rahul"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#1f1a22]">Last Name*</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all"
                        placeholder="Sharma"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#1f1a22]">Your Mail*</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all"
                        placeholder="rahul@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#1f1a22]">Phone Number*</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1f1a22]">Your Subject*</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1f1a22]">Write your message*</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <Button type="button" size="lg" className="w-full mt-4">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
