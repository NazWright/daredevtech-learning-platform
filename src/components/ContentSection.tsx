import React from 'react';

export default function ContentSection() {
  return (
      <section className="mt-24 space-y-16">
        {/* Medium Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="w-3 h-3 bg-white rounded-full mr-2" />
            Medium
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#1a1a1a] p-6 rounded-lg">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-[#2a2a2a] h-40 rounded-md animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* GitHub Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <svg width="20" height="20" fill="white" viewBox="0 0 512 512">
              <path d="M256 32C132.3 32 32 132.3 32 256s100.3...Z" />
            </svg>
            GitHub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#1a1a1a] p-6 rounded-lg">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-[#2a2a2a] h-32 rounded-md animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* X Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">𝕏</span> X
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#1a1a1a] p-6 rounded-lg">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-[#2a2a2a] h-28 rounded-md animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
  );
}
