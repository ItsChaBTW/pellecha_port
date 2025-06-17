// Updated skills for Charlie Pelle - Backend Developer
export enum SkillNames {
  PHP = "php",
  CSHARP = "csharp",
  ASPNET = "aspnet",
  LARAVEL = "laravel",
  SYMFONY = "symfony",
  JAVASCRIPT = "javascript",
  MYSQL = "mysql",
  HTML = "html",
  CSS = "css",
  BOOTSTRAP = "bootstrap",
  GIT = "git",
  RESTAPI = "restapi",
  GITHUB = "github",
  // Additional relevant skills
  NODEJS = "nodejs",
  DOCKER = "docker",
  LINUX = "linux",
  NPM = "npm",
  VIM = "vim",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PHP]: {
    id: 1,
    name: "php",
    label: "PHP",
    shortDescription: "Server-side scripting language that powers the web! 🚀💻",
    color: "#777BB4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.CSHARP]: {
    id: 2,
    name: "csharp",
    label: "C#",
    shortDescription: "Microsoft's powerful programming language for enterprise apps! 💪⚡",
    color: "#239120",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  [SkillNames.ASPNET]: {
    id: 3,
    name: "aspnet",
    label: "ASP.NET",
    shortDescription: "Building robust web applications with Microsoft's framework! 🏗️🌐",
    color: "#512BD4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  [SkillNames.LARAVEL]: {
    id: 4,
    name: "laravel",
    label: "Laravel",
    shortDescription: "The PHP framework for web artisans - elegant and expressive! 🎨✨",
    color: "#FF2D20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  },
  [SkillNames.SYMFONY]: {
    id: 5,
    name: "symfony",
    label: "Symfony",
    shortDescription: "High-performance PHP framework for complex web apps! ⚡🔧",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  },
  [SkillNames.JAVASCRIPT]: {
    id: 6,
    name: "javascript",
    label: "JavaScript",
    shortDescription: "The language of the web - making things interactive! 🌐✨",
    color: "#F7DF1E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 7,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Reliable database that stores all your precious data! 🗃️💾",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.HTML]: {
    id: 8,
    name: "html",
    label: "HTML",
    shortDescription: "The backbone of every website - structure matters! 🏗️📄",
    color: "#E34F26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 9,
    name: "css",
    label: "CSS",
    shortDescription: "Making websites beautiful, one style at a time! 🎨💄",
    color: "#1572B6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 10,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "Responsive design made easy with this CSS framework! 📱💻",
    color: "#7952B3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  [SkillNames.GIT]: {
    id: 11,
    name: "git",
    label: "Git",
    shortDescription: "Version control that saves your code (and sanity)! 🔄💾",
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.RESTAPI]: {
    id: 12,
    name: "restapi",
    label: "RESTful APIs",
    shortDescription: "Building bridges between frontend and backend! 🌉🔗",
    color: "#61DAFB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Where code lives and collaboration happens! 🐱‍💻📂",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 14,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript on the server side - versatile and fast! 🚀🟢",
    color: "#339933",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 15,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerizing apps for consistent deployment! 🐳📦",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 16,
    name: "linux",
    label: "Linux",
    shortDescription: "The OS that powers servers worldwide! 🐧⚡",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.NPM]: {
    id: 17,
    name: "npm",
    label: "NPM",
    shortDescription: "Package manager for JavaScript ecosystem! 📦🔧",
    color: "#CB3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.VIM]: {
    id: 18,
    name: "vim",
    label: "Vim",
    shortDescription: "The editor you can never escape from... or want to! ⌨️🚀",
    color: "#019733",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
};

// Experience and Education data for Charlie Pelle
export const EXPERIENCE = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Developing efficient and scalable web applications using PHP, C#, ASP.NET, Laravel, and MySQL. Creating RESTful APIs and managing database systems for various clients.",
    technologies: ["PHP", "C#", "ASP.NET", "Laravel", "MySQL", "JavaScript"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Information System",
    institution: "Bago City College",
    period: "2021 - 2025",
    description: "Currently pursuing a degree focused on information systems, database management, and software development.",
  },
];

// Personal information
export const PERSONAL_INFO = {
  name: "Charlie Pelle",
  title: "Backend Developer",
  subtitle: "Backend Developer specializing in creating efficient and scalable web applications",
  location: "Philippines",
  email: "charliepelle5@gmail.com", // Update with actual email
  phone: "+63 946 2124 217", // Add if available
  description: "I'm a passionate backend developer with expertise in PHP, C#, ASP.NET, Symfony, JavaScript, Laravel, and MySQL. I love creating efficient and scalable web applications that solve real-world problems. With a strong foundation in software development and a keen eye for detail, I strive to deliver high-quality solutions that exceed client expectations.",
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

