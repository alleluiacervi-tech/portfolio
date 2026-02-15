import type { Metadata } from "next";
import "./globals.css";
import StarsCanvasLazy from "@/components/main/StarsCanvasLazy";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
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
