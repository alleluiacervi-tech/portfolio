import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import StarsCanvasLazy from "@/components/main/StarsCanvasLazy";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alleluia Cervi | Brand & Digital Designer | Software Developer",
  description:
    "Professional portfolio of Alleluia Cervi, a brand and digital designer with development expertise building polished, scalable digital products.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sora.variable} relative min-h-screen overflow-x-hidden overflow-y-scroll bg-[#030014]`}
        style={{ backgroundColor: "#030014" }}
      >
        <StarsCanvasLazy />
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
