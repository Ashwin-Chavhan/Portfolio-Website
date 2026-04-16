// import { useState } from "react";
// import { Github, ExternalLink, X, Code, Calendar, Tag } from "lucide-react";
// import { projects } from "../data/portfolio";
// import { useInView } from "../hooks/useInView";

// type Project = (typeof projects)[number];

// function ProjectModal({
//   project,
//   onClose,
// }: {
//   project: Project;
//   onClose: () => void;
// }) {
//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-md" />
//       <div
//         className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//         style={{ boxShadow: "0 0 60px rgba(0, 212, 255, 0.15)" }}
//       >
//         <div className="relative h-48 overflow-hidden">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/90" />
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-900/80 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
//           >
//             <X className="w-4 h-4" />
//           </button>
//           <div className="absolute bottom-4 left-6">
//             <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider bg-neon-cyan/10 border border-neon-cyan/20 px-2 py-1 rounded">
//               {project.subtitle}
//             </span>
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="flex items-start justify-between gap-4 mb-4">
//             <h3 className="font-display font-bold text-2xl text-white">
//               {project.title}
//             </h3>
//             <div className="flex gap-2 flex-shrink-0">
//               {project.githubLink && (
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-8 h-8 border border-slate-700 rounded flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
//                 >
//                   <Github className="w-4 h-4" />
//                 </a>
//               )}
//               {project.liveLink && (
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-8 h-8 border border-slate-700 rounded flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                 </a>
//               )}
//             </div>
//           </div>

//           <p className="text-slate-400 leading-relaxed mb-6">
//             {project.description}
//           </p>

//           <div className="mb-6">
//             <h4 className="text-sm font-mono text-neon-pink uppercase tracking-widest mb-3 flex items-center gap-2">
//               <Tag className="w-3.5 h-3.5" /> Key Features
//             </h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//               {project.features.map((f) => (
//                 <div
//                   key={f}
//                   className="flex items-center gap-2 text-sm text-slate-400"
//                 >
//                   <span className="text-neon-cyan text-xs">▸</span>
//                   {f}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-sm font-mono text-neon-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
//               <Code className="w-3.5 h-3.5" /> Code Sample
//             </h4>
//             <div className="terminal-window">
//               <div className="terminal-header">
//                 <div
//                   className="terminal-dot"
//                   style={{ background: "#ff5f56" }}
//                 />
//                 <div
//                   className="terminal-dot"
//                   style={{ background: "#ffbd2e" }}
//                 />
//                 <div
//                   className="terminal-dot"
//                   style={{ background: "#27c93f" }}
//                 />
//               </div>
//               <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
//                 <code>{project.codeSnippet}</code>
//               </pre>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {project.technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-2.5 py-1 text-xs font-mono border border-neon-cyan/20 text-neon-cyan rounded bg-neon-cyan/5"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Projects() {
//   const { ref, inView } = useInView();
//   const [filter, setFilter] = useState("all");
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const filters = [
//     { key: "all", label: "All Projects" },
//     { key: "academic", label: "Academic" },
//     { key: "internship", label: "Internship" },
//     { key: "personal", label: "Personal" },
//   ];

//   const filtered =
//     filter === "all" ? projects : projects.filter((p) => p.type === filter);

//   return (
//     <section id="projects" className="py-24 relative">
//       <div className="section-container" ref={ref}>
//         <div
//           className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//         >
//           <div className="flex items-center gap-4 mb-4">
//             <div className="h-px w-12 bg-neon-amber opacity-60" />
//             <span className="font-mono text-neon-amber text-sm tracking-widest uppercase">
//               03 / Projects
//             </span>
//           </div>
//           <h2 className="section-title">
//             What I've <span className="text-gradient-cyan">Built</span>
//           </h2>
//           <p className="text-slate-400 max-w-xl mt-2">
//             A showcase of projects that represent my technical journey and
//             problem-solving approach.
//           </p>
//           <div className="section-divider mt-6" />
//         </div>

//         <div
//           className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//         >
//           {filters.map((f) => (
//             <button
//               key={f.key}
//               onClick={() => setFilter(f.key)}
//               className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
//                 filter === f.key
//                   ? "bg-neon-cyan text-navy-950 font-semibold"
//                   : "border border-slate-700 text-slate-400 hover:border-neon-cyan/40 hover:text-neon-cyan"
//               }`}
//             >
//               {f.label}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map((project, i) => (
//             <div
//               key={project.id}
//               className={`glass-card rounded-xl overflow-hidden group cursor-pointer transition-all duration-700 hover:-translate-y-2 ${
//                 inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//               style={{
//                 transitionDelay: `${200 + i * 120}ms`,
//                 boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
//               }}
//               onClick={() => setSelectedProject(project)}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-navy-900/80" />
//                 <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/5 transition-colors duration-300" />

//                 <div className="absolute top-3 left-3">
//                   <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider bg-navy-900/80 border border-neon-cyan/20 px-2 py-1 rounded">
//                     {project.type}
//                   </span>
//                 </div>

//                 <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {project.githubLink && (
//                     <a
//                       href={project.githubLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       onClick={(e) => e.stopPropagation()}
//                       className="w-8 h-8 bg-navy-900/90 rounded flex items-center justify-center text-slate-400 hover:text-neon-cyan transition-colors"
//                     >
//                       <Github className="w-4 h-4" />
//                     </a>
//                   )}
//                 </div>

//                 <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
//                   <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
//                     <Calendar className="w-3 h-3" />
//                     {project.duration}
//                   </div>
//                 </div>
//               </div>

//               <div className="p-5">
//                 <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-neon-cyan transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs text-neon-pink font-mono mb-3">
//                   {project.subtitle}
//                 </p>
//                 <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-1.5 mb-4">
//                   {project.technologies.slice(0, 4).map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2 py-0.5 text-xs font-mono border border-slate-700 text-slate-400 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                   {project.technologies.length > 4 && (
//                     <span className="px-2 py-0.5 text-xs font-mono border border-slate-700 text-slate-500 rounded">
//                       +{project.technologies.length - 4}
//                     </span>
//                   )}
//                 </div>

//                 <button className="text-neon-cyan text-xs font-mono flex items-center gap-1 hover:gap-2 transition-all">
//                   View Details <ExternalLink className="w-3 h-3" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedProject && (
//         <ProjectModal
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       )}
//     </section>
//   );
// }
////new code
import { useState } from "react";
import { Github, ExternalLink, X, Code, Calendar, Tag } from "lucide-react";
import { projects } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

type Project = (typeof projects)[number];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-md" />
      <div
        className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 0 60px rgba(0, 212, 255, 0.15)" }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/90" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-900/80 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider bg-neon-cyan/10 border border-neon-cyan/20 px-2 py-1 rounded">
              {project.subtitle}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display font-bold text-2xl text-white">
              {project.title}
            </h3>
            <div className="flex gap-2 flex-shrink-0">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-slate-700 rounded text-xs text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 font-mono transition-all flex items-center gap-1.5"
                  title="View GitHub repository"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-neon-cyan/40 rounded text-xs text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/5 font-mono transition-all flex items-center gap-1.5"
                  title="View live demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-mono text-neon-pink uppercase tracking-widest mb-3 flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" /> Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <span className="text-neon-cyan text-xs">▸</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-mono text-neon-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <Code className="w-3.5 h-3.5" /> Code Sample
            </h4>
            <div className="terminal-window">
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
              </div>
              <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono border border-neon-cyan/20 text-neon-cyan rounded bg-neon-cyan/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "academic", label: "Academic" },
    { key: "internship", label: "Internship" },
    { key: "personal", label: "Personal" },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-neon-amber opacity-60" />
            <span className="font-mono text-neon-amber text-sm tracking-widest uppercase">
              03 / Projects
            </span>
          </div>
          <h2 className="section-title">
            What I've <span className="text-gradient-cyan">Built</span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-2">
            A showcase of projects that represent my technical journey and
            problem-solving approach.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                filter === f.key
                  ? "bg-neon-cyan text-navy-950 font-semibold"
                  : "border border-slate-700 text-slate-400 hover:border-neon-cyan/40 hover:text-neon-cyan"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`glass-card rounded-xl overflow-hidden group cursor-pointer transition-all duration-700 hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${200 + i * 120}ms`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-navy-900/80" />
                <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/5 transition-colors duration-300" />

                <div className="absolute top-3 left-3">
                  <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider bg-navy-900/80 border border-neon-cyan/20 px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-2.5 py-1 text-xs font-mono bg-navy-900/90 rounded border border-slate-700 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all flex items-center gap-1"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-2.5 py-1 text-xs font-mono bg-navy-900/90 rounded border border-neon-cyan/30 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3 h-3" />
                    {project.duration}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neon-pink font-mono mb-3">
                  {project.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono border border-slate-700 text-slate-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-mono border border-slate-700 text-slate-500 rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <button className="text-neon-cyan text-xs font-mono flex items-center gap-1 hover:gap-2 transition-all">
                  View Details <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
