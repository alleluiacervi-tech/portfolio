import type { Metadata } from "next";
import "./globals.css";
import StarsCanvasLazy from "@/components/main/StarsCanvasLazy";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <StarsCanvasLazy />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
