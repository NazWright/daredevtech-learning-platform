import Link from "next/link";
import { User, Shield, ScrollText, ServerCog } from "lucide-react";

export default function LearningPage() {
  return (
    <main className="min-h-screen bg-[#0A0E17] text-white px-6 py-8 font-sans relative">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
        <h1 className="text-sm text-orange-400 tracking-wide uppercase">learn.daredeviot.com</h1>
        <Link href="https://daredeviot.com" className="text-sm text-blue-400 underline hover:text-blue-300">
          Back to Main Site ↗
        </Link>
      </header>

      {/* Cube Icon (Top Right) */}
      <div className="absolute top-6 right-6 hidden md:block">
        <img src="/assets/orange-cube.svg" alt="Cube Icon" className="w-6 h-6" />
      </div>

      {/* Hero Section */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-4xl font-bold text-orange-400 mb-2">Learn AWS by Building</h2>
          <p className="text-md text-gray-400 max-w-xl">
            Gamify your AWS Developer Associate prep — interactive, visual, real.
          </p>
        </div>
        <div className="flex justify-end">
          <img src="/computer.png" alt="Laptop" className="w-32 md:w-40 h-auto" />
        </div>
      </section>

      <hr className="border-white/10 mb-6" />

      {/* IAM Module Section */}
      <section className="mb-6">
        <h3 className="text-lg text-orange-400 font-semibold mb-1 tracking-wider uppercase">Featured Module</h3>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="text-2xl font-bold text-orange-400 mb-2">IAM Module</h4>
            <p className="text-gray-400 mb-4">Start learning about IAM</p>
            <Link href="/iam">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 text-sm">
                Start Module
              </button>
            </Link>
          </div>
          <div className="bg-[#111827] p-4 rounded border border-white/10">
            <h5 className="text-white font-medium text-sm mb-1">What is IAM?</h5>
            <p className="text-gray-400 text-sm">
              AWS Identity and Access Management (IAM) enables you to manage access
              to AWS services and resources securely.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white/10 my-6" />

      {/* Visual Sandbox Section */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-md font-medium text-white tracking-wide">Visual Sandbox</h3>
          <span className="text-xs text-blue-400 cursor-pointer hover:text-blue-300">Next Slide →</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-3 rounded border border-blue-500 text-blue-400">
            <User className="w-5 h-5 mb-1" />
            <span className="text-xs">User</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded border border-orange-500 text-orange-400">
            <Shield className="w-5 h-5 mb-1" />
            <span className="text-xs">Role</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded border border-blue-500 text-blue-400">
            <ScrollText className="w-5 h-5 mb-1" />
            <span className="text-xs">Policy</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded border border-orange-500 text-orange-400">
            <ServerCog className="w-5 h-5 mb-1" />
            <span className="text-xs">Resource</span>
          </div>
        </div>
      </section>

      <hr className="border-white/10 my-6" />

      {/* Cognito Section */}
      <section className="space-y-3">
        <h3 className="text-md font-medium text-white tracking-wide">Onboard with Amazon Cognito</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-700">
            Personal Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-500">
            Onboard with Cognito
          </button>
        </div>
      </section>
    </main>
  );
}