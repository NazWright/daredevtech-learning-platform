import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/shared/TopNav";
import CornerBadge from "@/components/shared/CornerBadge";
import BitcoinOverlay from "@/components/shared/BitcoinOverlay";
import CustomCursor from "@/components/shared/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dare-Dev Tech & Media Co.",
  description: "Sole proprietorship of Nazere Wright, specializing in web development, Bitcoin, and open source.",
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
        <TopNav items={[
          { label: "About The Founder", href: "/about" },
          { label: "Contact Us", href: "/contact" },
          { label: "Connect", href: "#connect" },
          { label: "Blog", href: "/blog" },
          { label: "Learning Platform", href: "/learning" }
        ]} />
        <CornerBadge size={150} imageSrc="/daredevtech-avatar.png" />
        <BitcoinOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
