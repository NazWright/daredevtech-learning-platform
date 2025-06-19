import React from 'react';

export default function HeroSection() {
  return (
      <section className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
          <span className="block">DARE DEV</span>
          <span className="block text-purple-500">TECH</span>
          <span className="block text-[1.5rem]">& MEDIA</span>
        </h1>

       <div className="w-full max-w-2xl mx-auto">
         <p className="text-lg md:text-xl font-mono text-gray-300 typewriter">
          Build apps on the cloud and stack sats on the side
          <span className="text-purple-500">.</span>
        </p>
       </div>

        <button className="mt-4 px-6 py-3 border border-purple-500 rounded-md text-white hover:bg-purple-500 transition">
          SEE MY WORK
        </button>
      </section>
  );
}
