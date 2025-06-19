import AboutSection from "@/components/AboutSection";
import ConnectSection from "@/components/ConnectSection";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";

import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b 
    from-black via-[#1f012d] to-black text-white font-sans px-6 py-12">
      <HeroSection />
      <ContentSection />
      <AboutSection />
      <ConnectSection />
    </main>
  );
}
