import type { Metadata } from "next";
import "./globals.css";
import StarsCanvasLazy from "@/components/main/StarsCanvasLazy";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Alleluia Cervi | Brand & Digital Designer",
  description:
    "Portfolio of Alleluia Cervi, a brand and digital designer creating structured visual identities and scalable digital experiences.",
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
        className="relative min-h-screen bg-[#030014] overflow-y-scroll overflow-x-hidden"
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
