"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Clock, Send } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScheduleConsultation } from "../components/ScheduleConsultation";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [scheduleData, setScheduleData] = useState<{ date: Date | null; time: string | null }>({
    date: null,
    time: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const isContactInfoFilled = formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleScheduleChange = useCallback((date: Date | null, time: string | null) => {
    setScheduleData({ date, time });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedDate: scheduleData.date,
          selectedTime: scheduleData.time,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
        setScheduleData({ date: null, time: null });

        setTimeout(() => {
          setSubmitted(false);
          setSubmitStatus("idle");
        }, 3500); // 3.5 seconds
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Ready to Transform Your <span className="text-[#500088]">Recruitment Agency?</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Information (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col justify-start pt-4 space-y-10 lg:col-span-5"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#1f1a22] mb-6">Schedule Your Custom Consultation</h3>
                <p className="text-lg text-[#4c4452] leading-relaxed">
                  Discover how RekrutIQ can streamline your sourcing, automate your billing, and increase your agency's margins. Connect with our experts for a tailored demonstration of the platform.
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

            {/* Contact Form / Success View (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-[#E5E7EB] shadow-xl bg-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <Send className="w-48 h-48 text-[#500088]" />
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="min-h-[420px] flex flex-col items-center justify-center text-center space-y-4 py-12 relative z-10"
                    >
                      <div className="w-16 h-16 bg-[#fbf0fc] border border-[#500088]/20 text-[#500088] flex items-center justify-center rounded-full text-2xl font-bold animate-bounce shadow-sm">
                        ✓
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-[#1f1a22]">
                        Consultation Scheduled Successfully
                      </h3>
                      <p className="font-sans text-sm text-[#4c4452] max-w-md leading-relaxed">
                        Our systems have queued your request. A calendar invitation has been sent to your work email address with the meeting details.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="relative z-10 space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-[#1f1a22]">First Name*</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all"
                            placeholder="Rahul"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-[#1f1a22]">Last Name*</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
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
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all"
                            placeholder="rahul@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-[#1f1a22]">Phone Number*</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
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
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#1f1a22]">Write your message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#fbf0fc]/30 focus:outline-none focus:ring-2 focus:ring-[#500088] focus:border-transparent transition-all resize-none"
                          placeholder="Tell us more about your requirements..."
                        />
                      </div>

                      <AnimatePresence>
                        {isContactInfoFilled && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <ScheduleConsultation onScheduleChange={handleScheduleChange} />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <Button type="submit" size="lg" className="w-full mt-4" disabled={isSubmitting}>
                        {isSubmitting ? "Scheduling..." : "Schedule Now"}
                      </Button>

                      {submitStatus === "error" && (
                        <p className="text-red-600 text-sm font-semibold text-center mt-2">There was an error sending your message. Please try again.</p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
