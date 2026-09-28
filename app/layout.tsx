import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "RekrutIQ | AI-Powered ATS & CRM for Recruitment Agencies",
  description: "RekrutIQ is the ultimate end-to-end recruitment platform for staffing agencies. Combine a smart ATS, CRM, automated invoicing, and AI candidate matching in one unified dashboard.",
  keywords: ["Recruitment agency software", "AI applicant tracking system", "staffing agency CRM", "automated recruitment workflows"],
  openGraph: {
    title: "RekrutIQ | AI-Powered ATS & CRM for Recruitment Agencies",
    description: "RekrutIQ is the ultimate end-to-end recruitment platform for staffing agencies. Combine a smart ATS, CRM, automated invoicing, and AI candidate matching in one unified dashboard.",
    url: "https://rekrutiq.io",
    siteName: "RekrutIQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RekrutIQ | AI-Powered ATS & CRM for Recruitment Agencies",
    description: "RekrutIQ is the ultimate end-to-end recruitment platform for staffing agencies. Combine a smart ATS, CRM, automated invoicing, and AI candidate matching in one unified dashboard.",
  },
  icons: {
    icon: "/iqfavicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R70LMVXZJ3"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R70LMVXZJ3');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${geist.variable} font-sans min-h-screen bg-brand-surface text-brand-on-surface selection:bg-brand-primary-container selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
