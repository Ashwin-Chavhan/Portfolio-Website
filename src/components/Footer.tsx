import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-slate-800/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded border border-neon-cyan/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-neon-cyan" />
              </div>
              <span className="font-mono text-sm font-semibold text-white">
                <span className="text-neon-cyan">ashwin</span>
                <span className="text-slate-400">.dev</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Full Stack Developer building scalable web applications with the
              MERN stack. Based in Nagpur, India. Open to remote opportunities
              worldwide.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-neon-green text-xs font-mono">
                Available for hire
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-slate-500 hover:text-neon-cyan transition-colors font-mono"
                >
                  <span className="text-neon-cyan/40 mr-1">▸</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-5">
              Get In Touch
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-neon-cyan transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {personalInfo.email}
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-slate-700 rounded flex items-center justify-center text-slate-500 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-slate-700 rounded flex items-center justify-center text-slate-500 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 border border-slate-700 rounded flex items-center justify-center text-slate-500 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-mono flex items-center gap-1.5">
            Built with
            <Heart className="w-3 h-3 text-neon-pink" />
            by Ashwin Chavhan · {new Date().getFullYear()}
          </p>
          <p className="text-slate-500 text-xs font-mono">
            React · JavaScript · Bootstrap · Tailwind · MongoDb
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-12">
          <p className="text-white text-xs font-mono text-center">
            Designed & Developed by Ashwin Chavhan
          </p>
        </div>
      </div>
    </footer>
  );
}
