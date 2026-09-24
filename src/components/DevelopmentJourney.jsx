
"use client";

import { ArrowRight, Code2, Rocket, Sparkles } from "lucide-react";

const journey = [
  {
    year: "01",
    title: "Started With The Basics",
    description:
      "I started my web development journey with HTML, CSS, and JavaScript.",
    icon: Code2,
  },
  {
    year: "02",
    title: "Building Real Projects",
    description:
      "Instead of only following tutorials, I am building real-world projects to improve my skills.",
    icon: Rocket,
  },
  {
    year: "03",
    title: "Exploring Modern Web",
    description:
      "I am working with React, Next.js, and modern web technologies while continuously learning new concepts.",
    icon: Sparkles,
  },
];

export default function DevelopmentJourney() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            My Journey
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">
              From Learning
              <br />
              <span className="text-purple-400">To Building</span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Every project, every mistake, and every new concept is a part of
              my development journey.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gray-800 md:block" />

          <div className="space-y-8">
            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  className="group relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
                >
                  {/* Number */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-700 bg-black text-sm font-bold text-purple-400 transition-all duration-300 group-hover:border-purple-400">
                    {item.year}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-gray-800 bg-gray-950 p-6 transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-gray-900/70">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-400/10">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-sm leading-6 text-gray-500">
                          {item.description}
                        </p>
                      </div>

                      <ArrowRight className="hidden h-5 w-5 text-gray-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-400 sm:block" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-14 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            <span className="text-gray-300">Still learning.</span>{" "}
            Still building. Still moving forward.
          </p>
        </div>
      </div>
    </section>
  );
}

