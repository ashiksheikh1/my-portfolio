
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Sparkles,
} from "lucide-react";

const learningItems = [
  {
    icon: Code2,
    title: "TypeScript",
    description:
      "Currently learning TypeScript to write more reliable, scalable, and maintainable applications.",
  },
  {
    icon: BookOpen,
    title: "Exploring New Technologies",
    description:
      "Continuously exploring modern tools, frameworks, and development practices to strengthen my skill set.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Preparing for Opportunities",
    description:
      "Improving my coding, problem-solving, and project-building skills to work on real-world projects with professional teams.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CurrentlyLearning() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles className="h-4 w-4" />
            Currently Learning
          </div>

          <h2 className="text-3xl font-bold md:text-5xl">
            Growing Every Day,
            <span className="block bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Building for Tomorrow
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            I&apos;m currently learning TypeScript and exploring modern web
            technologies while building real-world projects and preparing
            myself for professional opportunities.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {learningItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 p-7"
              >
                {/* Hover Glow */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-600/10 blur-3xl transition-all duration-500 group-hover:bg-purple-600/30" />

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                  <Icon className="h-7 w-7 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="relative mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="relative text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="relative mt-6 flex items-center gap-2 text-sm text-purple-400">
                  <span>Learning & Growing</span>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 rounded-2xl border border-purple-500/10 bg-purple-500/[0.03] p-6 text-center"
        >
          <p className="text-gray-400">
            My goal is simple —
            <span className="ml-2 font-medium text-purple-300">
              Learn. Build. Improve. Collaborate.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

