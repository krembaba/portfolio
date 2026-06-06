export const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export const experience = [
  {
    role: "Web Developer Intern",
    company: "Limelightr",
    duration: "3 months",
    bullets: [
      "Worked as a Web Developer intern using JavaScript and TypeScript.",
      "Contributed to web development tasks in a professional environment.",
      "Improved practical frontend/backend development skills.",
      "Worked with a team and learned from feedback during real development tasks.",
    ],
  },
  {
    role: "IT & Software Support Technician",
    company: "L'Aquila Company",
    duration: "April 2023 - August 2023",
    bullets: [
      "Supported software setup, system configuration, and update deployment across internal machines.",
      "Troubleshot software, system, and network issues using step by step debugging and log checking.",
      "Created small scripts to automate repetitive technical tasks.",
      "Documented technical procedures and helped make support workflows easier to repeat.",
      "Worked with users and team members to understand technical problems and find practical solutions.",
    ],
  },
];

export const education = [
  {
    school: "Eötvös Loránd University (ELTE) — Faculty of Informatics",
    title: "Bachelor of Computer Science",
    duration: "September 2022 - July 2026",
    bullets: [
      "Comprehensive curriculum focused on programming, computer systems, software development, and emerging technologies.",
      "Strong foundation in theoretical and practical computer science.",
    ],
  },
  {
    school: "Sami Frasheri High School",
    title: "Java programming foundations",
    duration: "September 2019 - May 2022",
    bullets: ["Completed a Java programming course to build foundational programming skills."],
  },
];

export const projects = [
  {
    title: "Learnix",
    category: "Full-Stack Educational Platform",
    description:
      "Learnix is my thesis project, a full stack educational platform designed for classroom and self study use. It includes a modern web frontend, persistent data storage, role based user management, and interactive visual learning modules. The system supports students, teachers, and administrators, with features for exploring concepts, managing learning resources, and supervising platform operations.",
    technologies: ["React", "Node.js", "REST APIs", "SQL", "JavaScript/TypeScript"],
    mediaType: "image",
    mediaSrc: "/images/learnixpage.png",
    mediaAlt: "Learnix dashboard or platform screenshot placeholder",
    mediaLabel: "Dashboard / platform screenshot",
    icon: "/images/learnix-logo.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Route and Riches",
    category: "Java Transport Simulation Game",
    description:
      "Route and Riches is a 2D top-down tile based transport management game built in Java using JavaFX. The player builds roads, places stops, creates routes, manages vehicles, and earns money by transporting passengers between stops. The game includes real time gameplay with pause, normal, and fast speed settings.",
    technologies: ["Java", "JavaFX", "Object-Oriented Programming", "Game Logic"],
    mediaType: "video",
    mediaSrc: "/images/routeandrichesvideo.mp4",
    mediaAlt: "Route and Riches gameplay screenshot or video preview placeholder",
    mediaLabel: "Gameplay screenshot / video preview",
    icon: "/images/Logo_routeandriches.png",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "C#"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "SCSS", "React", "Angular basics"],
  },
  {
    title: "Backend",
    items: ["Node.js basics", "Express.js basics", "REST APIs", "HTTP basics"],
  },
  {
    title: "Databases",
    items: ["SQL", "Database Design", "MongoDB basics"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Debugging", "Documentation"],
  },
  {
    title: "Other",
    items: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Software Development Fundamentals",
      "Interactive Systems",
    ],
  },
];

export const contact = {
  email: "dionismajli1@gmail.com",
  phone: "+36205634824",
  location: "Budapest, Hungary",
  linkedin: "https://www.linkedin.com/in/dion-ismajli-2977bb187",
  github: "https://github.com/krembaba",
};
