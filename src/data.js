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
    role: "Software Developer",
    company: "L'Aquila Company",
    duration: "May 2026 – Present",
    bullets: [
      "Built and maintain internal REST APIs and backend services in Java (Spring Boot).",
      "Designed the PostgreSQL schema for an internal asset and ticketing tool, replacing spreadsheet tracking.",
      "Write technical documentation and runbooks for each service in production.",
      "Automated recurring deployment and backup tasks with Bash and Python, cutting manual work by about 50%.",
      "Containerized internal applications with Docker and set up GitHub Actions pipelines for automated builds and tests.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "LimeLightr",
    duration: "February 2026 – April 2026",
    bullets: [
      "Assisted in the development of responsive websites for a variety of clients.",
      "Translated Figma designs into fully functional web pages.",
      "Collaborated with the development team to build, test, and refine client websites.",
      "Worked with modern front-end development practices to ensure cross-browser compatibility.",
      "Used Git and GitHub for version control, code reviews, and collaborative development.",
      "Debugged and resolved front-end issues, improving website functionality and usability.",
      "Built reusable front-end components using HTML, CSS, and JavaScript.",
      "Implemented interactive front-end animations to enhance user experience.",
    ],
  },
  {
    role: "IT Technician",
    company: "L'Aquila Company",
    duration: "April 2023 – August 2023",
    bullets: [
      "Maintained Linux and Windows servers.",
      "Monitored server health, uptime, and data integrity.",
      "Configured internal systems and work environments.",
      "Deployed software updates across multiple machines.",
      "Performed network, hardware, and software troubleshooting.",
      "Assisted with automation through scripting.",
      "Improved internal tooling and maintenance workflows.",
      "Documented technical procedures and system processes.",
    ],
  },
];

export const education = [
  {
    school: "Eötvös Loránd University (ELTE)",
    title: "Bachelor of Science in Computer Science",
    duration: "September 2022 – July 2026",
    bullets: [
      "Built a solid foundation in programming, operating systems, and networking while developing the technical skills required for a better career.",
    ],
  },
];

export const projects = [
  {
    title: "Learnix",
    category: "Full-Stack Educational Platform",
    description:
      "My thesis project: a full-stack learning platform for classroom and self-study, with role-based accounts for students, teachers, and administrators, user dashboards, and interactive visual learning modules.",
    technologies: ["React", "Node.js", "REST APIs", "SQL", "JavaScript/TypeScript"],
    mediaType: "image",
    mediaSrc: "/images/learnixpage.png",
    mediaAlt: "Learnix visualization module screenshot",
    icon: "/images/learnix-logo.png",
    githubUrl: "https://github.com/krembaba/Learnix-App",
  },
  {
    title: "Route and Riches",
    category: "Java Transport Simulation Game",
    description:
      "A 2D top-down, tile-based transport tycoon in Java and JavaFX. Players build roads, stops, and routes while vehicles navigate the network with pathfinding, in real time with pause, normal, and fast speeds.",
    technologies: ["Java", "JavaFX", "Object-Oriented Programming", "Pathfinding", "Git"],
    mediaType: "video",
    mediaSrc: "/images/routeandrichesvideo.mp4",
    mediaAlt: "Route and Riches gameplay video",
    icon: "/images/Logo_routeandriches.png",
    githubUrl: "https://github.com/krembaba/Route-and-Riches-",
  },
  {
    title: "Platform Lab",
    category: "DevOps Learning Project",
    description:
      "A hands-on project to learn the deployment side end to end: GitHub Actions tests a small Python (FastAPI) service and publishes its image, ArgoCD deploys it to a Kubernetes cluster provisioned with Terraform, and Prometheus and Grafana monitor it.",
    technologies: ["Python", "FastAPI", "Kubernetes", "GitHub Actions", "Terraform", "ArgoCD"],
    // No screenshot yet: the card shows the icon. Set mediaType "image" and mediaSrc to add one.
    mediaType: "icon",
    mediaAlt: "Platform Lab icon",
    icon: "/images/platform-lab-icon.svg",
    githubUrl: "https://github.com/krembaba/platform-lab",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "SQL", "C#", "PHP"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "Express",
      "REST API design",
      "JWT authentication",
      "Laravel (basic)",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "SCSS", "Responsive design", "Figma to code"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Schema design", "Indexing", "Query optimization"],
  },
  {
    title: "Testing & Tools",
    items: ["Git/GitHub", "JUnit", "Jest", "Postman", "Swagger/OpenAPI"],
  },
  {
    title: "DevOps & Systems",
    items: [
      "Docker",
      "GitHub Actions",
      "Nginx",
      "AWS",
      "Bash",
      "Linux & Windows administration",
      "Kubernetes (learning)",
      "Terraform (learning)",
    ],
  },
];

export const contact = {
  email: "dionismajli1@gmail.com",
  phone: "+383 44 622 150",
  location: "Prishtina, Kosovo",
  linkedin: "https://www.linkedin.com/in/dion-ismajli-2977bb187",
  github: "https://github.com/krembaba",
};
