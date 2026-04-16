export const personalInfo = {
  name: "Ashwin Chavhan",
  title: "Full Stack Developer",
  tagline: "Full Stack Developer | Problem Solver | MERN Enthusiast",
  email: "ashwinc763@gmail.com",
  phone: "9284336654",
  location: "Nagpur, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/ashwin-chavhan-b0317b2a8",
  github: "https://github.com/Ashwin-Chavhan",
  summary: `MCA graduate with a passion for building scalable, user-centric web applications.
  I specialize in the MERN stack and enjoy crafting clean code that solves real-world problems.
  From architecting backends to pixel-perfect frontends, I bring ideas to life with modern technology.`,
};

export const skills = [
  {
    category: "Frontend",
    color: "#00d4ff",
    items: [
      { name: "React.js", proficiency: 70 },
      { name: "HTML5 / CSS3", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 80 },
      { name: "Bootstrap", proficiency: 85 },
      { name: "JavaScript (ES6+)", proficiency: 70 },
      { name: "jQuery / AJAX", proficiency: 70 },
    ],
  },
  {
    category: "Backend",
    color: "#ff2d78",
    items: [
      { name: "Node.js", proficiency: 65 },
      { name: "Express.js", proficiency: 65 },
      { name: "PHP", proficiency: 60 },
      { name: "Context API", proficiency: 70 },
      { name: "REST APIs", proficiency: 70 },
    ],
  },
  {
    category: "Database",
    color: "#f59e0b",
    items: [
      { name: "MySQL", proficiency: 70 },
      { name: "PostgreSQL", proficiency: 70 },
      { name: "MongoDB", proficiency: 65 },
      { name: "MariaDB", proficiency: 60 },
      { name: "Firebase", proficiency: 60 },
      { name: "Redis", proficiency: 60 },
    ],
  },
  {
    category: "Tools & Concepts",
    color: "#10b981",
    items: [
      { name: "Git / GitHub", proficiency: 75 },
      // { name: "Figma", proficiency: 65 },
      // { name: "Adobe Photoshop", proficiency: 60 },
      { name: "CRUD Operations", proficiency: 85 },
      { name: "OOP Concepts", proficiency: 65 },
      { name: "Data Structures", proficiency: 65 },
      { name: "GitHub Copilot", proficiency: 80 },
      { name: "Claude AI", proficiency: 80 },
      { name: "ChatGpt", proficiency: 80 },
      { name: "Gemini Code Assist AI", proficiency: 80 },
      { name: "Cursor AI", proficiency: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    subtitle: "Final Year MCA Project",
    duration: "Apr 2024 – Jun 2024",
    type: "academic",
    featured: true,
    description:
      "A full-featured web-based learning platform designed to reduce physical learning constraints. Built as a college-approved final-year project with real database integration and e-commerce capabilities.",
    features: [
      "User authentication & authorization",
      "Dynamic course listings & content management",
      "Shopping cart & secure checkout flow",
      "Admin panel for course management",
      "Responsive design across all devices",
      "Full CRUD operations on all entities",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "Ajax",
      "PHP",
      "MY SQL",
    ],
    image: "/images/elearning.png",
    codeSnippet: `// User Authentication Middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select('-password');
  req.user = user;
  next();
};

// Course enrollment handler
export const enrollCourse = async (req, res) => {
  const { courseId } = req.params;
  const enrollment = await Enrollment.create({
    user: req.user._id,
    course: courseId,
    enrolledAt: new Date(),
  });
  res.json({ success: true, enrollment });
};`,
    githubLink: "https://github.com/Ashwin-Chavhan/E-Learn-Avenue",
    liveLink: "https://github.com/Ashwin-Chavhan/E-Learn-Avenue",
    highlights: [
      "College-approved project",
      "CGPA: 8.50",
      "Full-stack implementation",
    ],
  },
  {
    id: 2,
    title: "Responsive Client Websites",
    subtitle: "Internship @ Topstech Pvt Ltd",
    duration: "Feb 2024 – Jul 2024",
    type: "internship",
    featured: true,
    description:
      "Developed multiple responsive websites for real clients during my internship at Topstech Pvt Ltd. Focused on mobile-first design, cross-browser compatibility, and seamless user experiences.",
    features: [
      "Mobile-first responsive design",
      "Cross-browser compatibility",
      "Form validation with AJAX",
      "PHP + MySQL backend integration",
      "SEO-optimized markup",
      "Dynamic content loading",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "PHP",
      "MySQL",
    ],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    codeSnippet: `// AJAX Form Submission with Validation
$('#contactForm').on('submit', function(e) {
  e.preventDefault();
  const formData = $(this).serialize();

  $.ajax({
    url: 'process.php',
    type: 'POST',
    data: formData,
    success: (response) => {
      const res = JSON.parse(response);
      if (res.status === 'success') {
        showToast('Message sent successfully!', 'success');
        this.reset();
      }
    },
    error: () => showToast('Something went wrong', 'error'),
  });
});`,
    githubLink: "https://github.com/Ashwin-Chavhan/Real-Estate-Website",
    liveLink: "https://real-estate-website-opal-three.vercel.app/",
    highlights: [
      "5+ client websites",
      "Real-world experience",
      "6-month internship",
    ],
  },
  {
    id: 3,
    title: "This Portfolio Website",
    subtitle: "Personal Project",
    duration: "2024 – Present",
    type: "personal",
    featured: true,
    description:
      "The very website you are viewing right now — a full-stack portfolio built with React and Supabase. Features a working contact form, smooth animations, and a developer-focused cyberpunk design aesthetic.",
    features: [
      "Real-time contact form with Email Js backend",
      "Cyberpunk/developer themed design",
      "Interactive terminal typing effect",
      "Animated skill bars and project cards",
      "Fully responsive across all devices",
      "Custom CSS animations & micro-interactions",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Email Js", "Vite"],
    image: "/images/portfolio.png",
    codeSnippet: `// Intersection Observer for scroll animations
const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};`,
    githubLink: "https://github.com/Ashwin-Chavhan/Portfolio-Website",
    liveLink: "https://portfolio-website-io.netlify.app/",
    highlights: [
      "Built with MERN concepts",
      "Supabase integration",
      "Production-ready",
    ],
  },
];

export const experience = [
  {
    type: "work",
    title: "Full Stack Web Developer Intern",
    organization: "Topstech Pvt Ltd",
    location: "Nagpur, India",
    duration: "Feb 2024 – Jul 2024",
    description: [
      "Developed and deployed multiple responsive websites for real clients, ensuring mobile-first design",
      "Implemented CRUD operations with PHP backend and MySQL database integration",
      "Built dynamic features using AJAX for seamless form submissions and data loading",
      "Collaborated with senior developers, learning industry best practices and project workflows",
      "Used XAMPP as local development environment for backend integration testing",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "PHP",
      "MySQL",
      "AJAX",
    ],
    icon: "briefcase",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "IICC – RTMNU",
    location: "Nagpur, India",
    duration: "2022 – 2024",
    grade: "CGPA: 8.50",
    highlights: [
      "Final Year Project: E-Learning Platform",
      "Specialized in Full Stack Development",
    ],
    icon: "graduation-cap",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Dr. Ambedkar College",
    location: "Nagpur, India",
    duration: "2019 – 2022",
    grade: "73%",
    highlights: ["Foundation in programming, algorithms, and data structures"],
    icon: "book",
  },
];

export const certifications = [
  {
    name: "Web Development Fundamentals",
    issuer: "IBM",
    year: "2026",
  },
  {
    name: "AI Upskilling Certificate: Technical Foundations",
    issuer: "QUALCOMM",
    year: "2026",
  },
  { name: "MongoDB from Zero to CRUD", issuer: "HCL Guvi", year: "2026" },
  {
    name: "Full-Stack Web Development",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    name: "Mastering MYSQL: Database Creation, Management & SQL Queries",
    issuer: "Udemy",
    year: "2025",
  },
];

export const terminalLines = [
  { prefix: "$", text: "whoami", color: "#00d4ff", delay: 0 },
  {
    prefix: ">",
    text: "Ashwin Chavhan — Full Stack Developer",
    color: "#e2e8f0",
    delay: 600,
  },
  { prefix: "$", text: "cat skills.txt", color: "#00d4ff", delay: 1400 },
  {
    prefix: ">",
    text: "React • Node.js • MongoDB • Express",
    color: "#10b981",
    delay: 2000,
  },
  {
    prefix: ">",
    text: "Vibe Coder",
    color: "#e2e8f0",
    delay: 2400,
  },
  { prefix: "$", text: "git log --oneline", color: "#00d4ff", delay: 2800 },
  {
    prefix: ">",
    text: "a3f2d1e Build E-Learning Platform",
    color: "#f59e0b",
    delay: 3400,
  },
  {
    prefix: ">",
    text: "9b8c7a6 Deploy responsive client sites",
    color: "#f59e0b",
    delay: 3800,
  },
  {
    prefix: ">",
    text: "2e1d0c9 Initialize portfolio website",
    color: "#f59e0b",
    delay: 4200,
  },
  {
    prefix: "$",
    text: 'echo "Open to opportunities!"',
    color: "#00d4ff",
    delay: 5000,
  },
  {
    prefix: ">",
    text: "Open to opportunities!",
    color: "#ff2d78",
    delay: 5600,
  },
];
