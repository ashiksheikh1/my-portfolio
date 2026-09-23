"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Let&apos;s Work Together
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <h3 className="text-2xl font-bold">
              Have a project in mind?
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I&apos;m interested in opportunities where I can build
              useful products and continue growing as a developer.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <Mail className="text-purple-400" />
                <span className="text-gray-300">
                  ashiksheikh.web13@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-purple-400" />
                <span className="text-gray-300">
                  Bangladesh
                </span>
              </div>

            </div>
          </div>


          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 rounded-2xl border border-white/10 bg-black p-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-gray-500 focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-gray-500 focus:border-purple-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-gray-500 focus:border-purple-500"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500"
            >
              <Send size={18} />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;