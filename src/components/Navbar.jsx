"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  // { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link href="#home">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-white">Ashik Sheikh</span>
            <span className="text-purple-500">.</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm text-gray-400 transition hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-purple-500 transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          {/* GitHub */}
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/ashiksheikh1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            <FaGithub size={19} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ y: -2 }}
            href="https://linkedin.com/in/ashik-sheikh-4356bb259"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            <FaLinkedin size={19} />
          </motion.a>

          {/* Contact Button */}
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-lg border border-purple-500/40 bg-purple-600/10 px-4 py-2 text-sm font-medium text-purple-400 transition hover:bg-purple-600 hover:text-white"
            >
              Let's Talk
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-black px-5 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg bg-purple-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-purple-700"
            >
              Let's Talk
            </Link>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;