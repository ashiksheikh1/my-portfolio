"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Github, GitBranch, Star } from "lucide-react";

const GithubActivity = () => {
  return (
    <section
      id="github"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          GitHub
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-5xl">
          Coding Activity
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Explore my repositories, projects and development activity
          on GitHub.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8"
        >

          <FaGithub className="mx-auto h-12 w-12 text-purple-400" />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-black p-5">
              <GitBranch className="mx-auto mb-2 text-purple-400" />
              <p className="text-sm text-gray-400">
                Repositories
              </p>
              <p className="mt-1 text-2xl font-bold">
                Projects
              </p>
            </div>

            <div className="rounded-xl bg-black p-5">
              <Star className="mx-auto mb-2 text-purple-400" />
              <p className="text-sm text-gray-400">
                Focus
              </p>
              <p className="mt-1 text-2xl font-bold">
                Open Source
              </p>
            </div>

            <div className="rounded-xl bg-black p-5">
              <FaGithub className="mx-auto mb-2 text-purple-400" />
              <p className="text-sm text-gray-400">
                Profile
              </p>
              <p className="mt-1 text-2xl font-bold">
                GitHub
              </p>
            </div>

          </div>

          <a
            href="https://github.com/ashiksheikh1"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Visit My GitHub
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default GithubActivity;