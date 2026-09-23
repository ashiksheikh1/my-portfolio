"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Responsive and modern interfaces using React, Next.js and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "REST APIs, authentication and server-side applications using Node.js and Express.js.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Designing and integrating MongoDB databases with secure CRUD operations.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Apps",
    description:
      "Building applications that work smoothly across desktop, tablet and mobile devices.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            What I Can Build
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-white/10 bg-black p-6"
              >
                <Icon className="mb-5 h-9 w-9 text-purple-400" />

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;