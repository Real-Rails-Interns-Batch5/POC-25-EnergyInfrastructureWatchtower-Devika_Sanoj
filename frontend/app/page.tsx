"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main
      className="
      min-h-screen
      bg-[#030712]
      text-white
      flex
      items-center
      justify-center
      overflow-hidden
      relative
    "
    >
      {/* GRID BACKGROUND */}

      <div
        className="
        absolute
        inset-0
        opacity-20
      "
        style={{
          backgroundImage:
            "linear-gradient(#1F2937 1px, transparent 1px), linear-gradient(90deg, #1F2937 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* CYAN GLOW */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        blur-[150px]
        bg-cyan-500/10
      "
      />

      {/* CONTENT */}

      <div
        className="
        relative
        z-10
        max-w-4xl
        text-center
        px-6
      "
      >
        <div
          className="
          inline-block
          mb-6
          px-4
          py-2
          rounded-full
          border
          border-[#1F2937]
          bg-[#0B1117]
          text-[#38BDF8]
          text-sm
        "
        >
          REAL RAILS INTELLIGENCE LIBRARY
        </div>

        <h1
          className="
          text-6xl
          md:text-7xl
          font-extrabold
          tracking-tight
          text-[#38BDF8]
        "
        >
          Energy Infrastructure
          <br />
          Watchtower
        </h1>

        <p
          className="
          mt-6
          text-lg
          text-gray-400
          max-w-2xl
          mx-auto
        "
        >
          Global energy infrastructure intelligence,
          outage monitoring, emissions tracking,
          fuel mix analytics, and regional risk visibility.
        </p>

        <div className="mt-10">
          <Link href="/dashboard">
            <button
              className="
              px-8
              py-4
              bg-[#38BDF8]
              text-black
              font-bold
              rounded-xl
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]
            "
            >
              Enter Dashboard →
            </button>
          </Link>
        </div>

        <div
          className="
          mt-12
          text-xs
          text-gray-500
        "
        >
          Data & Intelligence Rail
        </div>
      </div>
    </main>
  );
}