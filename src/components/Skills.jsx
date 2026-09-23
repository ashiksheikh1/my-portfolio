"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Wrench,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST API", "JWT", "Authentication"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MongoDB Atlas", "CRUD", "Mongoose"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["VS Code", "Postman", "npm", "Vercel", "Chrome DevTools"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Git Branching", "Pull Requests"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Technologies and tools I use to build responsive and
            full-stack web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <Icon className="mb-4 h-8 w-8 text-purple-400" />

                <h3 className="mb-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;