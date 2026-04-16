import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, Terminal } from "lucide-react";
import { terminalLines, personalInfo } from "../data/portfolio";

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
      return () => clearTimeout(timer);
    });
  }, []);

  const roles = [
    "Full Stack Developer",
    "MERN Enthusiast",
    "Problem Solver",
    "MCA Graduate",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
        setIsTyping(true);
      }, 80);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 50);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
      setIsTyping(false);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #00d4ff, transparent)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #ff2d78, transparent)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{
            background: "radial-gradient(circle, #00d4ff, transparent)",
          }}
        />
      </div>

      <div className="section-container w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-neon-cyan opacity-60" />
              <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">
                Available for work
              </span>
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-slow" />
            </div>

            <h1 className="font-display font-black leading-none mb-4">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">
                ASHWIN
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient-cyan tracking-tight">
                CHAVHAN
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-6 h-10">
              <span className="text-slate-400 font-mono text-lg">&gt;</span>
              <span className="text-white font-mono text-lg sm:text-xl">
                {displayText}
                <span
                  className={`inline-block w-0.5 h-5 bg-neon-cyan ml-1 ${isTyping ? "" : "animate-blink"}`}
                />
              </span>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              MCA graduate crafting scalable web applications with the MERN
              stack. I turn complex problems into elegant, performant solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex items-center gap-5">
              <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">
                Find me on
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-slate-700 rounded flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-slate-700 rounded flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-slate-700 rounded flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-200"
                aria-label="EMail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-300">
            <div
              className="terminal-window shadow-2xl"
              style={{ boxShadow: "0 0 60px rgba(0, 212, 255, 0.08)" }}
            >
              <div className="terminal-header">
                <div
                  className="terminal-dot"
                  style={{ background: "#ff5f56" }}
                />
                <div
                  className="terminal-dot"
                  style={{ background: "#ffbd2e" }}
                />
                <div
                  className="terminal-dot"
                  style={{ background: "#27c93f" }}
                />
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    <span className="font-mono text-xs text-slate-500">
                      ashwin@portfolio:~
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 font-mono text-sm min-h-64 space-y-1.5">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={`flex gap-2 transition-all duration-300 ${
                      visibleLines.includes(i)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    <span
                      style={{
                        color: line.color === "#00d4ff" ? "#00d4ff" : "#64748b",
                      }}
                    >
                      {line.prefix}
                    </span>
                    <span style={{ color: line.color }}>{line.text}</span>
                  </div>
                ))}
                {visibleLines.length === terminalLines.length && (
                  <div className="flex gap-2">
                    <span className="text-neon-cyan">$</span>
                    <span className="w-2 h-4 bg-neon-cyan animate-blink" />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: "8.50", label: "MCA CGPA" },
                { value: "6+", label: "Months Exp." },
                { value: "5+", label: "Projects Built" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-display font-bold text-gradient-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-neon-cyan transition-colors group"
          aria-label="Scroll down"
        >
          <span className="font-mono text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
