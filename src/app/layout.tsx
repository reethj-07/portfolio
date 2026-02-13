import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ REVISED METADATA: Honest, Keyword-Rich, and Action-Oriented
export const metadata: Metadata = {
  title: "Reeth Jain | ML, GenAI & Data Science Portfolio",
  description: "Portfolio of Reeth Jain. Building scalable AI systems across NLP, Computer Vision, and Audio. Open to Internships & Full-Time Roles.",
  openGraph: {
    title: "Reeth Jain | ML, GenAI & Data Science Portfolio",
    description: "Showcasing end-to-end projects in RAG, LLMs, and Risk Modeling. Seeking Data Science & ML opportunities.",
    type: "website",
    locale: "en_US",
    url: "https://portfolio-git-main-reeth-jains-projects.vercel.app/",
    siteName: "Reeth Jain Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}