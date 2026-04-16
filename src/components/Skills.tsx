import { useState } from "react";
import { skills } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function Skills() {
  const { ref, inView } = useInView();
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="section-container relative" ref={ref}>
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-neon-pink opacity-60" />
            <span className="font-mono text-neon-pink text-sm tracking-widest uppercase">
              02 / Skills
            </span>
          </div>
          <h2 className="section-title">
            Technical <span className="text-gradient-pink">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-2">
            Technologies I've worked with, from frontend interfaces to backend
            systems and databases.
          </p>
          <div
            className="section-divider mt-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,45,120,0.3), transparent)",
            }}
          />
        </div>

        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-neon-cyan text-navy-950 font-semibold"
                  : "border border-slate-700 text-slate-400 hover:border-neon-cyan/40 hover:text-neon-cyan"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredSkills.map((group, gi) => (
            <div
              key={group.category}
              className={`glass-card rounded-xl p-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + gi * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: group.color }}
                />
                <h3 className="font-display font-semibold text-white text-lg">
                  {group.category}
                </h3>
                <span className="ml-auto font-mono text-xs text-slate-500">
                  {group.items.length} skills
                </span>
              </div>

              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span
                        className="font-mono text-xs font-semibold"
                        style={{ color: group.color }}
                      >
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-navy-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${skill.proficiency}%` : "0%",
                          background: `linear-gradient(90deg, ${group.color}cc, ${group.color})`,
                          transitionDelay: `${300 + gi * 100}ms`,
                          boxShadow: `0 0 8px ${group.color}60`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="font-mono text-neon-cyan text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="h-px w-6 bg-neon-cyan/60" />
            Also Familiar With
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Responsive Design",
              "Cross-Browser Compatibility",
              "Web Accessibility",
              "XAMPP",
              "REST APIs",
              "CRUD Operations",
              "Databases",
              "AJAX",
              "OOP",
              "Data Structures",
              "MVC Pattern",
              "Agile",
              "Linux CLI",
              "Vibe Coding",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-slate-700 rounded text-xs text-slate-400 font-mono hover:border-neon-cyan/30 hover:text-neon-cyan transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
