import { User, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { personalInfo, certifications } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-neon-cyan opacity-60" />
            <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">
              01 / About
            </span>
          </div>
          <h2 className="section-title">
            Who I <span className="text-gradient-cyan">Am</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 relative">
                <div
                  className="w-full h-full rounded-2xl overflow-hidden border border-neon-cyan/20"
                  style={{ boxShadow: "0 0 40px rgba(0, 212, 255, 0.1)" }}
                >
                  <img
                    src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Ashwin Chavhan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-neon-pink/30 rounded-lg -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-neon-cyan/20 rounded-lg -z-10" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-navy-900/90 border border-neon-green/30 rounded-lg px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  <span className="font-mono text-xs text-neon-green">
                    Available
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { icon: User, label: "Name", value: personalInfo.name },
                { icon: Mail, label: "Email", value: personalInfo.email },
                { icon: Phone, label: "Phone", value: personalInfo.phone },
                {
                  icon: MapPin,
                  label: "Location",
                  value: personalInfo.location,
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 glass-card rounded-lg px-4 py-3"
                >
                  <Icon className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                  <span className="text-slate-500 text-sm w-16 font-mono flex-shrink-0">
                    {label}
                  </span>
                  <span className="text-slate-200 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Building the web, one commit at a time
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I'm a{" "}
                <span className="text-neon-cyan font-medium">
                  Full Stack Developer
                </span>{" "}
                with an MCA from RTMNU Nagpur (CGPA: 8.50). My journey into
                software development started with a genuine curiosity about how
                things work on the internet — and turned into a full-blown
                passion for building them.
              </p>
              <p>
                During my{" "}
                <span className="text-white font-medium">
                  6-month internship at Topstech Pvt Ltd
                </span>
                , I worked on real client projects, sharpening my skills in
                responsive design, database integration, and delivering
                production-ready code under real deadlines.
              </p>
              <p>
                My final year project — an{" "}
                <span className="text-white font-medium">
                  E-Learning Platform
                </span>{" "}
                — brought everything together: authentication, dynamic content,
                shopping cart, and a full MERN stack backend. I believe in
                writing clean, purposeful code that's maintainable and scalable.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-mono text-neon-pink uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="h-px w-6 bg-neon-pink/60" />
                Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="glass-card rounded-lg px-3 py-2.5 flex items-start gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-white font-medium leading-snug">
                        {cert.name}
                      </p>
                      <p className="text-xs text-slate-500 font-mono">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={
                  "https://www.linkedin.com/in/ashwin-chavhan-b0317b2a8/details/certifications/"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                LinkedIn Profile
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-outline text-xs"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
