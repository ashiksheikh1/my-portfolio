
"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceEducation = () => {
  return (
    <section
      id="experience"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Journey
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Experience & Education
          </h2>
        </div>

        {/* Experience & Education */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* ================= EXPERIENCE ================= */}
        
{/* ================= EXPERIENCE ================= */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-2xl border border-white/10 bg-white/5 p-7"
>
  <Briefcase className="mb-5 text-purple-400" />

  <h3 className="text-2xl font-bold">
    Experience
  </h3>

  <div className="mt-8 border-l border-purple-500/30 pl-6">

    {/* Full Stack Web Development */}
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-purple-500" />

      <p className="text-sm text-purple-400">
        2026 – Present
      </p>

      <h4 className="mt-2 text-lg font-semibold">
        Full Stack Web Development
      </h4>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        Building modern, responsive and user-friendly web
        applications using React, Next.js, Node.js,
        Express.js and MongoDB.
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        Working with REST APIs, authentication, JWT,
        Git, GitHub and modern web development tools.
      </p>
    </div>

    {/* Programming Hero */}
    <div className="relative mt-10">
      {/* Timeline Dot */}
      <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-purple-500" />

      <p className="text-sm text-purple-400">
        Programming Hero
      </p>

      <h4 className="mt-2 text-lg font-semibold">
        Level 1 Web Development Course
      </h4>

      <p className="mt-1 text-sm font-medium text-gray-300">
        2022 → Restarted in 2025–2026
      </p>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        Completed the Programming Hero Level 1 Web Development
        Course in 2022. Due to academic commitments, I was unable
        to continue my programming journey at that time.
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        In 2025–2026, I restarted the Level 1 course to strengthen
        my fundamentals and continue developing my web development
        skills.
      </p>
    </div>

  </div>
</motion.div>

          {/* ================= EDUCATION ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <GraduationCap className="mb-5 text-purple-400" />

            <h3 className="text-2xl font-bold">
              Education
            </h3>

            <div className="mt-8 space-y-8 border-l border-purple-500/30 pl-6">

              {/* ================= BBA ================= */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-purple-500" />

                <p className="text-sm text-purple-400">
                  National University
                </p>

                <h4 className="mt-2 text-lg font-semibold">
                  Bachelor of Business Administration (BBA)
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Completed a Bachelor of Business Administration (BBA) with a specialization in Accounting, gaining academic knowledge in accounting, finance, and business management.

                </p>
              </div>

              {/* ================= MBA ================= */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-purple-500" />

                <p className="text-sm text-purple-400">
                  National University
                </p>

                <h4 className="mt-2 text-lg font-semibold">
                  Master of Business Administration (MBA)
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Continuing advanced studies in business
                  administration Completed a Master of Business Administration (MBA) with a specialization in Accounting.
                </p>
              </div>

              {/* ================= KOREAN LANGUAGE ================= */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-purple-500" />

                <p className="text-sm text-purple-400">
                  University of Dhaka
                </p>

                <h4 className="mt-2 text-lg font-semibold">
                  Institute of Modern Languages (IML), University of Dhaka


                </h4>

                <p className="mt-1 text-sm font-medium text-gray-300">
                Korean Language Course Currently in 3rd Year — Running
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Studying Korean language and communication through the Korean Language Course at the Institute of Modern Languages (IML), University of Dhaka.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;

