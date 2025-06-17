import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiPhp,
  SiCsharp,
  SiDotnet,
  SiLaravel,
  SiSymfony,
  SiMysql,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Updated PROJECT_SKILLS for Charlie Pelle's tech stack
const PROJECT_SKILLS = {
  // Charlie's main technologies
  php: {
    title: "PHP",
    bg: "#777BB4",
    fg: "white",
    icon: <SiPhp />,
  },
  csharp: {
    title: "C#",
    bg: "#239120",
    fg: "white",
    icon: <SiCsharp />,
  },
  aspnet: {
    title: "ASP.NET",
    bg: "#512BD4",
    fg: "white",
    icon: <SiDotnet />,
  },
  laravel: {
    title: "Laravel",
    bg: "#FF2D20",
    fg: "white",
    icon: <SiLaravel />,
  },
  symfony: {
    title: "Symfony",
    bg: "#000000",
    fg: "white",
    icon: <SiSymfony />,
  },
  mysql: {
    title: "MySQL",
    bg: "#4479A1",
    fg: "white",
    icon: <SiMysql />,
  },
  sqlserver: {
    title: "SQL Server",
    bg: "#CC2927",
    fg: "white",
    icon: <SiMicrosoftsqlserver />,
  },
  javascript: {
    title: "JavaScript",
    bg: "#F7DF1E",
    fg: "black",
    icon: <SiJavascript />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "#7952B3",
    fg: "white",
    icon: <SiBootstrap />,
  },
  html: {
    title: "HTML5",
    bg: "#E34F26",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "#1572B6",
    fg: "white",
    icon: <SiCss3 />,
  },
  // Keep some existing ones for backward compatibility
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity CMS",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  three: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html5: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css3: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

// Charlie Pelle's Projects
const projects: Project[] = [
  {
    id: "thynk-disaster-response",
    category: "Emergency Platform",
    title: "THYNK Disaster Response Network",
    src: "/assets/projects-screenshots/thynk/thynk-preview.png",
    screenshots: ["landing.png", "dashboard.png", "resources.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.csharp,
        PROJECT_SKILLS.aspnet,
        PROJECT_SKILLS.sqlserver,
      ],
    },
    live: "https://svchadpelle-001-site1.ptempurl.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Emergency Management Platform for Rapid Disaster Response
          </TypographyP>
          <TypographyP className="font-mono">
            THYNK is a comprehensive disaster response platform designed for emergency management 
            and resource coordination. Built with C# ASP.NET and SQL Server, it provides real-time 
            communication and coordination tools for disaster response teams.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="font-mono mb-4 list-disc pl-6">
            <li>Real-time disaster reporting and tracking</li>
            <li>Resource management and allocation</li>
            <li>Emergency contact coordination</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Secure authentication and authorization</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "bcctap",
    category: "Education Tech",
    title: "BCC Time Attendance Platform",
    src: "/assets/projects-screenshots/bcctap/bcctap-preview.png",
    screenshots: ["dashboard.png", "qr-scanner.png", "reports.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "https://bcctap.bccbsis.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            QR Code-Based Attendance System for Educational Institutions
          </TypographyP>
          <TypographyP className="font-mono">
            BCC Time Attendance Platform is a modern attendance tracking system designed 
            specifically for Bago City College. It uses QR code technology for quick and 
            accurate attendance recording with real-time reporting capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="font-mono mb-4 list-disc pl-6">
            <li>QR code-based attendance scanning</li>
            <li>Real-time attendance tracking</li>
            <li>Comprehensive reporting system</li>
            <li>Student and faculty management</li>
            <li>Mobile-responsive interface</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "lydo",
    category: "Government",
    title: "Local Youth Development Office",
    src: "/assets/projects-screenshots/lydo/lydo.png",
    screenshots: ["homepage.png", "programs.png", "events.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "https://lydo.bccbsis.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Youth Program Management System
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive web application for the Local Youth Development Office to manage 
            youth programs, track community initiatives, and coordinate events. Built with 
            PHP and MySQL for reliable data management.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="font-mono mb-4 list-disc pl-6">
            <li>Youth program registration and tracking</li>
            <li>Event management and scheduling</li>
            <li>Community initiative coordination</li>
            <li>Participant database management</li>
            <li>Progress reporting and analytics</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "mobile-device-monitoring",
    category: "System Tool",
    title: "Mobile Device Monitoring System",
    src: "/assets/projects-screenshots/monitoring/qr.png",
    screenshots: ["dashboard.png", "devices.png", "alerts.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "#", // Private project
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time Device Monitoring and Security System
          </TypographyP>
          <TypographyP className="font-mono">
            A sophisticated monitoring system for tracking mobile devices with real-time 
            status updates and security features. This internal tool helps organizations 
            manage their device inventory and ensure security compliance.
          </TypographyP>
          <div className="flex justify-center my-6">
            <Button variant="outline" disabled>
              <span className="mr-2">🔒</span>
              Private Project
            </Button>
          </div>
          <TypographyH3 className="my-4 mt-8">System Features</TypographyH3>
          <ul className="font-mono mb-4 list-disc pl-6">
            <li>Real-time device status monitoring</li>
            <li>Security breach detection and alerts</li>
            <li>Device inventory management</li>
            <li>Usage analytics and reporting</li>
            <li>Automated compliance checking</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "rtnhs-faculty",
    category: "Education",
    title: "RTNHS Faculty Management System",
    src: "/assets/projects-screenshots/rtnhs/ramon.png",
    screenshots: ["faculty-dashboard.png", "documents.png", "schedule.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "#", // Private project
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Comprehensive Faculty Management Solution
          </TypographyP>
          <TypographyP className="font-mono">
            A digital management system designed for Ramon Torres National High School faculty. 
            This platform streamlines administrative tasks, document management, and scheduling 
            to improve operational efficiency.
          </TypographyP>
          <div className="flex justify-center my-6">
            <Button variant="outline" disabled>
              <span className="mr-2">🔒</span>
              Private Project
            </Button>
          </div>
          <TypographyH3 className="my-4 mt-8">Management Tools</TypographyH3>
          <ul className="font-mono mb-4 list-disc pl-6">
            <li>Faculty profile and credentials management</li>
            <li>Digital document storage and retrieval</li>
            <li>Class scheduling and room assignments</li>
            <li>Performance tracking and evaluation</li>
            <li>Communication and notification system</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
