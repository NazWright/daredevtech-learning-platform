'use client';

import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

export default function ConnectSection() {
  return (
    <section id="connect" className="min-h-[50vh] py-24 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-lg text-gray-400 mb-8">
          Want to collab, vibe, or bring me on for a project? Here’s where you’ll find me:
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/NazWright"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/daredevtech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
            aria-label="X (Twitter)"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/nazwright/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
