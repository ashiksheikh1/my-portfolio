"use client";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for opportunities
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ashik Sheikh
              </span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
              Full Stack Web Developer
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              I build modern, responsive and user-friendly web applications
              using React, Next.js, Node.js, Express.js and MongoDB. I enjoy
              turning ideas into practical digital products.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-medium transition hover:bg-purple-500"
                >
                  View My Projects
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-gray-700 bg-white/5 px-6 py-3 font-medium text-gray-200 backdrop-blur transition hover:bg-white/10"
                >
                  Contact Me
                </motion.button>
              </Link>

            </div>

            {/* Social / Resume */}
            <div className="mt-8 flex flex-wrap items-center gap-5">

              <a
                href="https://github.com/ashiksheikh1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="/Ashik-Sheikh-CV.pdf"
                download
                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
              >
                <Download size={19} />
                Download CV
              </a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-3xl" />

              {/* Developer Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[300px] rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl sm:w-[360px]"
              >

                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <p className="text-purple-400">
                    const developer = {"{"}
                  </p>

                  <p className="pl-5 text-gray-300">
                    name:{" "}
                    <span className="text-green-400">
                      "Ashik Sheikh"
                    </span>
                  </p>

                  <p className="pl-5 text-gray-300">
                    role:{" "}
                    <span className="text-green-400">
                      "Full Stack Developer"
                    </span>
                  </p>

                  <p className="pl-5 text-gray-300">
                    skills: [
                  </p>

                  <p className="pl-10 text-blue-400">
                    "React",
                  </p>

                  <p className="pl-10 text-blue-400">
                    "Next.js",
                  </p>

                  <p className="pl-10 text-blue-400">
                    "Node.js",
                  </p>

                  <p className="pl-10 text-blue-400">
                    "MongoDB"
                  </p>

                  <p className="pl-5 text-gray-300">
                    ]
                  </p>

                  <p className="text-purple-400">
                    {"}"};
                  </p>
                </div>

              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;