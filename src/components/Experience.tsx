import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experience, education } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import ScrollReveal from "./ScrollReveal";
export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="section-container relative" ref={ref}>
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-neon-green opacity-60" />
            <span className="font-mono text-neon-green text-sm tracking-widest uppercase">
              04 / Experience
            </span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-2">
            Education and professional experience that shaped my development
            skills.
          </p>
          <div
            className="section-divider mt-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)",
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h3 className="flex items-center gap-2 font-mono text-sm text-neon-cyan uppercase tracking-widest mb-8">
              <Briefcase className="w-4 h-4" />
              Work Experience
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-cyan/30 to-transparent" />

              {experience.map((item, i) => (
                <div key={i} className="relative pl-12 pb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full border-2 border-neon-cyan bg-navy-900 flex items-center justify-center">
                    <Briefcase className="w-3.5 h-3.5 text-neon-cyan" />
                  </div>

                  <div
                    className="glass-card rounded-xl p-5 hover:border-neon-cyan/30 transition-all duration-300"
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-display font-bold text-white text-lg leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-neon-cyan font-mono text-sm mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                          <Calendar className="w-3 h-3" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {item.description.map((d, di) => (
                        <li
                          key={di}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <span className="text-neon-cyan text-xs mt-1 flex-shrink-0">
                            ▸
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono border border-slate-700 text-slate-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h3 className="flex items-center gap-2 font-mono text-sm text-neon-pink uppercase tracking-widest mb-8">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-pink via-neon-pink/30 to-transparent" />

              {education.map((item, i) => (
                <div key={i} className="relative pl-12 pb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full border-2 border-neon-pink bg-navy-900 flex items-center justify-center">
                    <GraduationCap className="w-3.5 h-3.5 text-neon-pink" />
                  </div>

                  <div
                    className="glass-card rounded-xl p-5 hover:border-neon-pink/20 transition-all duration-300"
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-display font-bold text-white text-lg leading-tight">
                          {item.degree}
                        </h4>
                        <p className="text-neon-pink font-mono text-sm mt-0.5">
                          {item.institution}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                          <Calendar className="w-3 h-3" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-mono bg-neon-amber/10 border border-neon-amber/20 text-neon-amber rounded font-semibold">
                        {item.grade}
                      </span>
                    </div>

                    <ul className="space-y-1">
                      {item.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <span className="text-neon-pink text-xs mt-1 flex-shrink-0">
                            ▸
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-xl p-6 mt-4 border-l-2 border-neon-cyan">
              <h4 className="font-mono text-xs text-neon-cyan uppercase tracking-widest mb-4">
                Achievement Highlights
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "8.50", label: "MCA CGPA", color: "#00d4ff" },
                  { value: "73%", label: "B.Sc. Score", color: "#ff2d78" },
                  { value: "6 mo", label: "Industry Exp.", color: "#10b981" },
                  { value: "2024", label: "Graduated", color: "#f59e0b" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-lg bg-navy-900/50"
                  >
                    <div
                      className="text-xl font-display font-bold"
                      style={{ color: stat.color }}
                    >
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
          <ScrollReveal delay={200} direction="left">
            <div className="timeline-item timeline-item-end">
              <div className="timeline-dot timeline-dot-sm" />
              <div className="exp-open-card">
                <p className="text-text-secondary text-sm font-mono">
                  <span className="text-accent">$</span> Looking for next
                  opportunity...
                  <span className="blink-cursor" />
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
