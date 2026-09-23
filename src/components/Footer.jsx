
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              Ashik<span className="text-cyan-400">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              A passionate frontend developer focused on building
              modern, responsive and user-friendly web experiences.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                GH
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                in
              </a>

              <a
                href="mailto:your-email@example.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                @
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Built With
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "JavaScript",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Let's build something amazing together.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ashik Sheikh. All rights reserved.
          </p>

          <Link
            href="#home"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
          >
            ↑ Back to top
          </Link>

        </div>
      </div>
    </footer>
  );
}

