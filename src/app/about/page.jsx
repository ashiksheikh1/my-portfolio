
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  MapPin,
  Server,
  User,
} from "lucide-react";

export default function AboutPage() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "JWT",
    "Git & GitHub",
    "TypeScript",
  ];

  const education = [
    {
      icon: GraduationCap,
      title: "National University",
      subtitle: "Honours / BBA",
      description:
        "Completed my Honours studies and continuing my Master's journey.",
    },
    {
      icon: BookOpen,
      title: "Web Development",
      subtitle: "Programming Hero",
      description:
        "Completed an intensive web development course with practical assignments and projects.",
    },
  ];

  const experience = [
    {
      icon: Briefcase,
      title: "Web Development Projects",
      description:
        "Built modern and responsive web applications using React, Next.js, Node.js, Express.js and MongoDB.",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Working with frontend and backend technologies, authentication, REST APIs and database integration.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />

        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-2 text-sm text-blue-400">
              <User className="h-4 w-4" />
              <span>About Me</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ashik Sheikh
              </span>
            </h1>

            <p className="mt-6 text-xl font-medium text-gray-300">
              Full Stack Web Developer
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
              I build modern, responsive and user-friendly web applications
              using React, Next.js, Node.js, Express.js and MongoDB. I enjoy
              turning ideas into practical digital products and continuously
              improving my development skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Contact Me
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/10 p-3">
                <User className="h-6 w-6 text-blue-400" />
              </div>

              <h2 className="text-2xl font-semibold">Who I Am</h2>
            </div>

            <p className="leading-8 text-gray-400">
              I'm Ashik Sheikh, a passionate Full Stack Web Developer from
              Bangladesh. I enjoy creating clean, responsive and functional
              websites that provide a good user experience.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              My main focus is modern JavaScript development. I work with
              React and Next.js on the frontend and Node.js, Express.js and
              MongoDB on the backend.
            </p>

            <div className="mt-6 flex items-center gap-2 text-gray-300">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Bangladesh</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-purple-500/10 p-3">
                <Code2 className="h-6 w-6 text-purple-400" />
              </div>

              <h2 className="text-2xl font-semibold">What I Do</h2>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <Code2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                <div>
                  <h3 className="font-medium">Frontend Development</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Building responsive interfaces with React, Next.js,
                    JavaScript and Tailwind CSS.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Server className="mt-1 h-5 w-5 shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-medium">Backend Development</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Developing APIs and backend functionality using Node.js
                    and Express.js.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Database className="mt-1 h-5 w-5 shrink-0 text-green-400" />
                <div>
                  <h3 className="font-medium">Database & Authentication</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Working with MongoDB, JWT authentication and REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-7 flex items-center gap-3 text-2xl font-bold">
              <GraduationCap className="h-6 w-6 text-blue-400" />
              Education
            </h2>

            <div className="space-y-5">
              {education.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex gap-4">
                      <div className="rounded-xl bg-blue-500/10 p-3">
                        <Icon className="h-5 w-5 text-blue-400" />
                      </div>

                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-blue-400">
                          {item.subtitle}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-7 flex items-center gap-3 text-2xl font-bold">
              <Briefcase className="h-6 w-6 text-purple-400" />
              Experience
            </h2>

            <div className="space-y-5">
              {experience.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex gap-4">
                      <div className="rounded-xl bg-purple-500/10 p-3">
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>

                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-3xl font-bold">My Skills</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-white/20 hover:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center sm:p-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Build Something Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            I'm always interested in learning, building new projects and
            exploring opportunities in web development.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}

