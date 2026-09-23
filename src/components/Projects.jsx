"use client";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ExternalLink,  } from "lucide-react";

const projects = [
  {
    title: "CowGoatHub",
    description:
      "A full-stack livestock marketplace where users can browse animals, view details and manage listings.",
    tech: ["Next.js", "MongoDB", "Better Auth", "Stripe", "Tailwind"],
    github: "https://github.com/ashiksheikh1/CowGoatHub",
    live: "#",
  },
  {
    title: "RecipeHub",
    description:
      "A recipe sharing platform where users can explore recipes, add recipes and manage their cooking content.",
    tech: ["Next.js", "MongoDB", "Node.js", "Express.js", "JWT"],
    github: "#",
    live: "#",
  },
  {
    title: "HireLoop",
    description:
      "A job portal platform with recruiter features, authentication, job management and analytics.",
    tech: ["Next.js", "React", "MongoDB", "Better Auth", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Things I&apos;ve Built
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-purple-900/40 to-blue-900/30">
                <span className="text-2xl font-bold text-white/80">
                  {project.title}
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;