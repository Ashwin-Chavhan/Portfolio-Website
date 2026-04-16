// import { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   CheckCircle,
//   AlertCircle,
// } from "lucide-react";
// import { personalInfo } from "../data/portfolio";
// import { useInView } from "../hooks/useInView";

// type FormData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// type Status = "idle" | "sending" | "success" | "error";

// const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

// export default function Contact() {
//   const { ref, inView } = useInView();
//   const [form, setForm] = useState<FormData>(initialForm);
//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [status, setStatus] = useState<Status>("idle");

//   const validate = () => {
//     const e: Partial<FormData> = {};
//     if (!form.name.trim()) e.name = "Name is required";
//     if (!form.email.trim()) e.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       e.email = "Invalid email";
//     if (!form.subject.trim()) e.subject = "Subject is required";
//     if (!form.message.trim()) e.message = "Message is required";
//     else if (form.message.trim().length < 20)
//       e.message = "Message must be at least 20 characters";
//     return e;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (errors[name as keyof FormData]) {
//       setErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setStatus("sending");
//     try {
//       const { error } = await supabase.from("contact_submissions").insert({
//         name: form.name.trim(),
//         email: form.email.trim().toLowerCase(),
//         subject: form.subject.trim(),
//         message: form.message.trim(),
//       });

//       if (error) throw error;
//       setStatus("success");
//       setForm(initialForm);
//     } catch {
//       setStatus("error");
//     }
//   };

//   const inputClass = (field: keyof FormData) =>
//     `w-full bg-navy-950/80 border rounded-lg px-4 py-3 text-sm text-slate-200 font-mono placeholder-slate-600 outline-none transition-all duration-200 focus:ring-1 ${
//       errors[field]
//         ? "border-neon-pink/50 focus:border-neon-pink focus:ring-neon-pink/20"
//         : "border-slate-700 focus:border-neon-cyan/50 focus:ring-neon-cyan/10"
//     }`;

//   return (
//     <section id="contact" className="py-24 relative">
//       <div className="section-container" ref={ref}>
//         <div
//           className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//         >
//           <div className="flex items-center gap-4 mb-4">
//             <div className="h-px w-12 bg-neon-cyan opacity-60" />
//             <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">
//               05 / Contact
//             </span>
//           </div>
//           <h2 className="section-title">
//             Let's <span className="text-gradient-cyan">Connect</span>
//           </h2>
//           <p className="text-slate-400 max-w-xl mt-2">
//             Open to full-time opportunities, freelance projects, or just a good
//             technical conversation.
//           </p>
//           <div className="section-divider mt-6" />
//         </div>

//         <div className="grid lg:grid-cols-5 gap-12">
//           <div
//             className={`lg:col-span-2 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
//           >
//             <p className="text-slate-400 leading-relaxed mb-8">
//               I'm actively looking for my next opportunity as a Full Stack
//               Developer. Whether you have a project in mind, a team opening, or
//               just want to talk tech — my inbox is always open.
//             </p>

//             <div className="space-y-4 mb-8">
//               {[
//                 {
//                   icon: Mail,
//                   label: "Email",
//                   value: personalInfo.email,
//                   href: `mailto:${personalInfo.email}`,
//                 },
//                 {
//                   icon: Phone,
//                   label: "Phone",
//                   value: personalInfo.phone,
//                   href: `tel:${personalInfo.phone}`,
//                 },
//                 {
//                   icon: MapPin,
//                   label: "Location",
//                   value: personalInfo.location,
//                   href: null,
//                 },
//               ].map(({ icon: Icon, label, value, href }) => (
//                 <div
//                   key={label}
//                   className="glass-card rounded-lg p-4 flex items-center gap-4"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center flex-shrink-0">
//                     <Icon className="w-4 h-4 text-neon-cyan" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
//                       {label}
//                     </p>
//                     {href ? (
//                       <a
//                         href={href}
//                         className="text-sm text-white hover:text-neon-cyan transition-colors"
//                       >
//                         {value}
//                       </a>
//                     ) : (
//                       <p className="text-sm text-white">{value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="glass-card rounded-xl p-6 border-l-2 border-neon-cyan">
//               <p className="font-mono text-xs text-neon-cyan uppercase tracking-widest mb-3">
//                 Response Time
//               </p>
//               <p className="text-slate-400 text-sm">
//                 I typically respond within{" "}
//                 <span className="text-white font-medium">24 hours</span>. For
//                 urgent inquiries, reaching out on LinkedIn often gets a faster
//                 response.
//               </p>
//               <a
//                 href={personalInfo.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 mt-4 text-neon-cyan text-sm font-mono hover:underline"
//               >
//                 Connect on LinkedIn →
//               </a>
//             </div>
//           </div>

//           <div
//             className={`lg:col-span-3 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
//           >
//             {status === "success" ? (
//               <div
//                 className="glass-card rounded-xl p-12 text-center"
//                 style={{ boxShadow: "0 0 40px rgba(16,185,129,0.1)" }}
//               >
//                 <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-4" />
//                 <h3 className="font-display font-bold text-2xl text-white mb-2">
//                   Message Sent!
//                 </h3>
//                 <p className="text-slate-400 mb-6">
//                   Thanks for reaching out. I'll get back to you within 24 hours.
//                 </p>
//                 <button
//                   onClick={() => setStatus("idle")}
//                   className="btn-primary"
//                 >
//                   Send Another
//                 </button>
//               </div>
//             ) : (
//               <form
//                 onSubmit={handleSubmit}
//                 noValidate
//                 className="glass-card rounded-xl p-6 sm:p-8"
//                 style={{ boxShadow: "0 0 40px rgba(0,212,255,0.05)" }}
//               >
//                 <h3 className="font-display font-bold text-xl text-white mb-6">
//                   Send a Message
//                 </h3>

//                 <div className="grid sm:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={form.name}
//                       onChange={handleChange}
//                       placeholder="Your Name"
//                       className={inputClass("name")}
//                     />
//                     {errors.name && (
//                       <p className="mt-1 text-xs text-neon-pink font-mono flex items-center gap-1">
//                         <AlertCircle className="w-3 h-3" /> {errors.name}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       placeholder="asdf@gmail.com"
//                       className={inputClass("email")}
//                     />
//                     {errors.email && (
//                       <p className="mt-1 text-xs text-neon-pink font-mono flex items-center gap-1">
//                         <AlertCircle className="w-3 h-3" /> {errors.email}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={form.subject}
//                     onChange={handleChange}
//                     placeholder="Job Opportunity / Project Inquiry / Just Saying Hi"
//                     className={inputClass("subject")}
//                   />
//                   {errors.subject && (
//                     <p className="mt-1 text-xs text-neon-pink font-mono flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" /> {errors.subject}
//                     </p>
//                   )}
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     rows={5}
//                     placeholder="Tell me about your project, opportunity, or just say hello..."
//                     className={`${inputClass("message")} resize-none`}
//                   />
//                   {errors.message && (
//                     <p className="mt-1 text-xs text-neon-pink font-mono flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" /> {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 {status === "error" && (
//                   <div className="mb-4 flex items-center gap-2 text-sm text-neon-pink font-mono p-3 rounded-lg bg-neon-pink/5 border border-neon-pink/20">
//                     <AlertCircle className="w-4 h-4 flex-shrink-0" />
//                     Something went wrong. Please try again or email directly.
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={status === "sending"}
//                   className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
//                 >
//                   {status === "sending" ? (
//                     <>
//                       <div className="w-4 h-4 border-2 border-navy-950/40 border-t-navy-950 rounded-full animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// new code begins for email js

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        "service_oy5gnzm",
        "template_w9dv0vu",
        {
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        },
        "OTNMC9UEm2uQP0hV-",
      );

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-navy-950/80 border rounded-lg px-4 py-3 text-sm text-slate-200 font-mono placeholder-slate-600 outline-none transition-all duration-200 focus:ring-1 ${
      errors[field]
        ? "border-neon-pink/50 focus:border-neon-pink focus:ring-neon-pink/20"
        : "border-slate-700 focus:border-neon-cyan/50 focus:ring-neon-cyan/10"
    }`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-neon-cyan opacity-60" />
            <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">
              05 / Contact
            </span>
          </div>
          <h2 className="section-title">
            Let's <span className="text-gradient-cyan">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-2">
            Open to full-time opportunities, freelance projects, or just a good
            technical conversation.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm actively looking for my next opportunity as a Full Stack
              Developer. Whether you have a project in mind, a team opening, or
              just want to talk tech — my inbox is always open.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: personalInfo.location,
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="glass-card rounded-lg p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-white hover:text-neon-cyan transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-xl p-6 border-l-2 border-neon-cyan">
              <p className="font-mono text-xs text-neon-cyan uppercase tracking-widest mb-3">
                Response Time
              </p>
              <p className="text-slate-400 text-sm">
                I typically respond within{" "}
                <span className="text-white font-medium">24 hours</span>. For
                urgent inquiries, reaching out on LinkedIn often gets a faster
                response.
              </p>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-neon-cyan text-sm font-mono hover:underline"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {status === "success" ? (
              <div
                className="glass-card rounded-xl p-12 text-center"
                style={{ boxShadow: "0 0 40px rgba(16,185,129,0.1)" }}
              >
                <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-400 mb-6">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-primary"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="glass-card rounded-xl p-6 sm:p-8"
                style={{ boxShadow: "0 0 40px rgba(0,212,255,0.05)" }}
              >
                <h3 className="font-display font-bold text-xl text-white mb-6">
                  Send a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-neon-pink font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="asdf@gmail.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-neon-pink font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Inquiry / Just Saying Hi"
                    className={inputClass("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-neon-pink font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-neon-pink font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div className="mb-4 flex items-center gap-2 text-sm text-neon-pink font-mono p-3 rounded-lg bg-neon-pink/5 border border-neon-pink/20">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-navy-950/40 border-t-navy-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
//////////////////////////new code

// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   CheckCircle,
//   AlertCircle,
// } from "lucide-react";
// import { personalInfo } from "../data/portfolio";
// import { useInView } from "../hooks/useInView";

// type FormData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// type Status = "idle" | "sending" | "success" | "error";

// const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

// export default function Contact() {
//   const { ref, inView } = useInView();
//   const [form, setForm] = useState<FormData>(initialForm);
//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [status, setStatus] = useState<Status>("idle");

//   const validate = () => {
//     const e: Partial<FormData> = {};
//     if (!form.name.trim()) e.name = "Name is required";
//     if (!form.email.trim()) e.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       e.email = "Invalid email";
//     if (!form.subject.trim()) e.subject = "Subject is required";
//     if (!form.message.trim()) e.message = "Message is required";
//     else if (form.message.trim().length < 20)
//       e.message = "Message must be at least 20 characters";
//     return e;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (errors[name as keyof FormData]) {
//       setErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setStatus("sending");

//     try {
//       await emailjs.send(
//         "service_oy5gnzm",
//         "template_w9dv0vu",
//         {
//           name: form.name.trim(),
//           email: form.email.trim().toLowerCase(),
//           subject: form.subject.trim(),
//           message: form.message.trim(),
//         },
//         "OTNMC9UEm2uQP0hV-",
//       );

//       setStatus("success");
//       setForm(initialForm);
//     } catch {
//       setStatus("error");
//     }
//   };

//   const inputClass = (field: keyof FormData) =>
//     `w-full bg-navy-950/80 border rounded-lg px-4 py-3 text-sm text-slate-200 font-mono placeholder-slate-600 outline-none transition-all duration-200 focus:ring-1 ${
//       errors[field]
//         ? "border-neon-pink/50 focus:border-neon-pink focus:ring-neon-pink/20"
//         : "border-slate-700 focus:border-neon-cyan/50 focus:ring-neon-cyan/10"
//     }`;

//   return (
//     <section id="contact" className="py-24 relative">
//       <div className="section-container" ref={ref}>
//         <div
//           className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//         >
//           <div className="flex items-center gap-4 mb-4">
//             <div className="h-px w-12 bg-neon-cyan opacity-60" />
//             <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">
//               05 / Contact
//             </span>
//           </div>

//           <h2 className="section-title">
//             Let's <span className="text-gradient-cyan">Connect</span>
//           </h2>

//           <p className="text-slate-400 max-w-xl mt-2">
//             Open to full-time opportunities, freelance projects, or just a good
//             technical conversation.
//           </p>

//           <div className="section-divider mt-6" />
//         </div>

//         <div className="grid lg:grid-cols-5 gap-12">
//           <div
//             className={`lg:col-span-2 ${inView ? "opacity-100" : "opacity-0"}`}
//           >
//             <p className="text-slate-400 leading-relaxed mb-8">
//               I'm actively looking for my next opportunity as a Full Stack
//               Developer.
//             </p>

//             <div className="space-y-4 mb-8">
//               {[
//                 {
//                   icon: Mail,
//                   label: "Email",
//                   value: personalInfo.email,
//                   href: `mailto:${personalInfo.email}`,
//                 },
//                 {
//                   icon: Phone,
//                   label: "Phone",
//                   value: personalInfo.phone,
//                   href: `tel:${personalInfo.phone}`,
//                 },
//                 {
//                   icon: MapPin,
//                   label: "Location",
//                   value: personalInfo.location,
//                   href: null,
//                 },
//               ].map(({ icon: Icon, label, value, href }) => (
//                 <div
//                   key={label}
//                   className="glass-card rounded-lg p-4 flex items-center gap-4"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
//                     <Icon className="w-4 h-4 text-neon-cyan" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-500 font-mono uppercase">
//                       {label}
//                     </p>
//                     {href ? (
//                       <a href={href} className="text-sm text-white">
//                         {value}
//                       </a>
//                     ) : (
//                       <p className="text-sm text-white">{value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div
//             className={`lg:col-span-3 ${inView ? "opacity-100" : "opacity-0"}`}
//           >
//             {status === "success" ? (
//               <div className="glass-card rounded-xl p-12 text-center">
//                 <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-4" />
//                 <h3 className="text-2xl text-white mb-2">Message Sent!</h3>
//                 <p className="text-slate-400 mb-6">Thanks for reaching out.</p>
//                 <button
//                   onClick={() => setStatus("idle")}
//                   className="btn-primary"
//                 >
//                   Send Another
//                 </button>
//               </div>
//             ) : (
//               <form
//                 onSubmit={handleSubmit}
//                 className="glass-card rounded-xl p-6 sm:p-8"
//               >
//                 <h3 className="text-xl text-white mb-6">Send a Message</h3>

//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className={inputClass("name")}
//                   placeholder="Your Name"
//                 />
//                 {errors.name && <p>{errors.name}</p>}

//                 <input
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className={inputClass("email")}
//                   placeholder="Your Email"
//                 />
//                 {errors.email && <p>{errors.email}</p>}

//                 <input
//                   name="subject"
//                   value={form.subject}
//                   onChange={handleChange}
//                   className={inputClass("subject")}
//                   placeholder="Subject"
//                 />
//                 {errors.subject && <p>{errors.subject}</p>}

//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className={inputClass("message")}
//                   placeholder="Message"
//                 />
//                 {errors.message && <p>{errors.message}</p>}

//                 <button
//                   type="submit"
//                   disabled={status === "sending"}
//                   className="btn-primary w-full flex items-center justify-center gap-2"
//                 >
//                   {status === "sending" ? "Sending..." : "Send Message"}
//                   <Send className="w-4 h-4" />
//                 </button>

//                 {status === "error" && (
//                   <p className="text-red-400 mt-3 flex items-center gap-2">
//                     <AlertCircle /> Error sending message
//                   </p>
//                 )}
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
