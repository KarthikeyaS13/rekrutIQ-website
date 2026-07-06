import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "RekrutIQ | Intelligent Recruitment Platform",
  description: "Streamline sourcing, candidate tracking, and invoicing in one enterprise-grade platform. Built for speed, powered by intelligence.",
  keywords: ["ATS", "Recruitment", "AI Matching", "Agency Software"],
  openGraph: {
    title: "RekrutIQ | Intelligent Recruitment Platform",
    description: "Built for speed, powered by intelligence.",
    url: "https://rekrutiq.io",
    siteName: "RekrutIQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RekrutIQ | Intelligent Recruitment Platform",
    description: "Built for speed, powered by intelligence.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geist.variable} font-sans min-h-screen bg-brand-surface text-brand-on-surface selection:bg-brand-primary-container selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
