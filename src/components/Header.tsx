import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md border-b border-neon-cyan/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
          aria-label="Go to home"
        >
          <div className="w-9 h-9 rounded border border-neon-cyan/30 flex items-center justify-center group-hover:border-neon-cyan/60 transition-colors">
            <Code2 className="w-5 h-5 text-neon-cyan" />
          </div>
          <span className="font-mono text-sm font-semibold text-white hidden sm:block">
            <span className="text-neon-cyan">Ashwin</span>
            <span className="text-slate-400">.dev</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded relative group ${
                  active === id
                    ? "text-neon-cyan"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-neon-cyan transition-all duration-300 ${
                    active === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
          <a
            href="mailto:ashwinc763@gmail.com"
            className="btn-primary ml-4 text-xs"
          >
            Hire Me
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-slate-300 hover:text-neon-cyan transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-navy-800/95 backdrop-blur-md border-t border-neon-cyan/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`text-left px-4 py-3 rounded text-sm font-medium transition-colors ${
                  active === id
                    ? "text-neon-cyan bg-neon-cyan/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="mailto:ashwinc763@gmail.com"
            className="btn-primary text-center mt-2"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
