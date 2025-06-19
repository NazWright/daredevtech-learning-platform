'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen text-white py-24 px-6 flex flex-col md:flex-row items-center justify-center"
    >
      {/* 👤 Image Cutout (left side on desktop) */}
      <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-8 md:mb-0 md:mr-16">
        <Image
          src="/nazere-wright.png" // put your image in /public and update filename if needed
          alt="Naz Wright portrait"
          fill
          className="object-cover"
        />
      </div>

      {/* 📝 Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">About the Founder</h2>
        <p className="text-lg text-gray-300">
          I’m Naz — a full-stack engineer building secure fintech systems by day and pushing bold tech creativity by night. I created DareDevTech to merge personal freedom, cloud apps, and self-sovereign tools.
        </p>
        <p className="mt-4 text-gray-500">
          I don’t just write code — I write ideas into existence. If it runs on the cloud or stacks sats, I probably built it or broke it.
        </p>
      </div>
    </section>
  );
}
