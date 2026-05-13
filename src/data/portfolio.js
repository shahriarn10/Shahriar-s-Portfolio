export const profile = {
  name: "Shahriar Najim",
  title: "CS Student | AI/ML & Systems Enthusiast",
  batch: "MU CSE-58",
  image: "/profile.jpg",
  roles: ["Full-Stack Developer", "AI/ML Engineer", "Competitive Programmer"],
  aboutParagraph1: "I'm a final-year Computer Science student at Metropolitan University Bangladesh, specializing in bridging the gap between low-level system operations and advanced Artificial Intelligence. My academic journey is currently centered around my thesis in Fake News Detection, where I apply Python and Machine Learning to tackle real-world misinformation challenges.",
  aboutParagraph2: "My technical foundation started in competitive programming and has grown to include full-stack development and systems architecture. Beyond the code, I believe in the power of community and leadership. Whether serving as a Peer Reviewer at 10 Minute School, founding the Rajnagar Cycling Community, or helping manage my family's business operations, I am driven by a desire to solve complex problems and create a positive impact. I am currently preparing to take my research and skills to the next level through higher education abroad."
};

export const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "5+", label: "Certifications" },
  { value: "2+", label: "Years Coding" },
  { value: "1", label: "Thesis Research" },
];

export const projects = [
  {
    id: 1,
    title: "HealthSync – Healthcare Management Platform",
    desc: "A modern full-stack healthcare web platform featuring doctor appointments, blood donation management, and pharmacy services with an integrated user dashboard, role-based access control, and real-time data.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Express", "JavaScript"],
    type: "Full-Stack",
    github: "https://github.com/shahriarn10/HealthSync",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "Fake News Detection (Thesis)",
    desc: "Machine Learning pipeline to detect misinformation in Bangla and English news using NLP, TF-IDF vectorization, and ensemble classifiers. Achieves high accuracy on benchmark datasets.",
    tech: ["Python", "NumPy", "Pandas", "scikit-learn", "NLP"],
    type: "AI/ML Research",
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: "Shahriar's Portfolio",
    desc: "A modern personal portfolio website built with Vue 3, Vite, and Tailwind CSS. Features animated hero section with particles, typewriter effect, skill progress bars, timeline, and a contact form.",
    tech: ["Vue.js", "Vite", "Tailwind CSS", "JavaScript"],
    type: "Web Dev",
    github: "https://github.com/shahriarn10/Shahriar-s-Portfolio",
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: "HealthBridge - Management System",
    desc: "A full-stack healthcare platform integrating appointments, blood donation, and pharmacy services into a single unified web system with admin dashboard, role-based access control, and real-time data management.",
    tech: ["HTML", "PHP", "CSS", "MySQL"],
    type: "Full-Stack",
    github: "https://github.com/theniyazkhan/HealthBridge",
    live: null,
    featured: true,
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: [
      { name: "C/C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 65 },
    ]
  },
  {
    category: "AI & Data Science",
    icon: "🧠",
    items: [
      { name: "scikit-learn", level: 80 },
      { name: "NumPy / Pandas", level: 85 },
      { name: "NLP / TF-IDF", level: 75 },
      { name: "ML Models", level: 78 },
    ]
  },
  {
    category: "Web & Frameworks",
    icon: "🌐",
    items: [
      { name: "Vue.js", level: 82 },
      { name: "Node.js / Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Tailwind CSS", level: 88 },
    ]
  },
];

export const timeline = [
  {
    year: "2020",
    title: "Peer Reviewer",
    org: "10 Minute School",
    desc: "Contributed to educational content quality assurance for one of Bangladesh's largest ed-tech platforms.",
    type: "work",
  },
  {
    year: "2023",
    title: "Started Computer Science",
    org: "Metropolitan University Bangladesh",
    desc: "Began BSc in Computer Science. Dived deep into data structures, algorithms, and competitive programming.",
    type: "education",
  },
  {
    year: "2024",
    title: "HealthBridge - Management System",
    org: "Academic Project",
    desc: "A full-stack healthcare platform integrating appointments, blood donation, and pharmacy services into a single unified web system.",
    type: "project",
  },
  {
    year: "2025",
    title: "Thesis: Fake News Detection",
    org: "Metropolitan University Bangladesh",
    desc: "Exploring fake news detection using Machine Learning and NLP techniques to analyze misinformation patterns and improve content credibility analysis.",
    type: "research",
  },
  {
    year: "2026",
    title: "HealthSync - Healthcare Management Platform",
    org: "Academic Project",
    desc: "A full-stack healthcare web platform featuring doctor appointments, blood donation management, and pharmacy services with an integrated user dashboard system.",
    type: "project",
  },
];

export const contact = {
  email: "shahriarn10@gmail.com",
  github: "https://github.com/shahriarn10",
  linkedin: "https://linkedin.com/in/shahriarnajim",
  location: "Bangladesh",
};

export const certifications = [
  {
    title: "Meetings and Negotiations - Level B1",
    issuer: "British Council",
    date: "May 2025",
    description: "Professional business communication and negotiation strategies.",
    link: "https://credentials.englishonline.britishcouncil.org/e9172ccd-e607-4e7e-8abc-2db51e72e74e#acc.eVH0w3tq",
    logoKey: "british-council",
  },
  {
    title: "Introduction to Web Development",
    issuer: "IBM via Coursera",
    date: "April 2025",
    description: "Foundational web technologies including HTML, CSS, and modern JavaScript.",
    link: "https://www.coursera.org/account/accomplishments/verify/WYPVSAJE26UG",
    logoKey: "coursera",
  },
  {
    title: "Introduction to ChatGPT",
    issuer: "DataCamp",
    date: "December 2023",
    description: "Understanding LLMs and prompt engineering fundamentals.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/0462cfcf1fe5966d014e2de971b7c0e5e51081ec",
    logoKey: "datacamp",
  },
];