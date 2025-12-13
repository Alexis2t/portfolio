import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";
import {
  SiRubyonrails,
  SiNuxtdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiVite,
  SiPostgresql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import { MdAutorenew } from "react-icons/md";

export const skillsData = {
  frontend: [
    {
      name: "Vue.js",
      icon: FaVuejs,
      iconColor: "#42B883",
      projects: [
        { id: 1 }
      ]
    },
    {
      name: "Nuxt.js",
      icon: SiNuxtdotjs,
      iconColor: "#00DC82",
      projects: [
        { id: 2 }
      ]
    },
    {
      name: "React",
      icon: FaReact,
      iconColor: "#61DAFB",
      projects: [
        { id: 3 }
      ]
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      iconColor: "#3178C6",
      projects: [
        { id: 3 },
      ]
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      iconColor: "#06B6D4",
      projects: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]
    },
    {
      name: "Vite",
      icon: SiVite,
      iconColor: "#FFC13D",
      projects: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]
    },
  ],
  backend: [
    {
      name: "Ruby on Rails",
      icon: SiRubyonrails,
      iconColor: "#CC0000",
      projects: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      iconColor: "#4169E1",
      projects: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]
    },
    {
      name: "Redis",
      icon: SiRedis,
      iconColor: "#DC382D",
      projects: [
        { id: 1 },
        { id: 2 },
      ]
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      iconColor: "#339933",
      projects: [
        { id: 3 }
      ]
    },
    // {
    //   name: "Express",
    //   icon: SiExpress,
    //   iconColor: "#FFFFFF",
    //   projects: [
    //     { id: 4 }
    //   ]
    // },
    {
      name: "Python",
      icon: FaPython,
      iconColor: "#3776AB",
      projects: [
        { id: 1 }
      ]
    },
  ],
  tools: [
    {
      name: "Git",
      icon: FaGitAlt,
      iconColor: "#F05032",
      projects: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ]
    },
    {
      name: "Docker",
      icon: FaDocker,
      iconColor: "#2496ED",
      projects: [
        { id: 1 },
        { id: 3 },
      ]
    },
    {
      name: "CI/CD",
      icon: MdAutorenew,
      iconColor: "#4CAF50",
      projects: [
        { id: 1 },
      ]
    },
    {
      name: "Figma",
      icon: FaFigma,
      iconColor: "#F24E1E",
      projects: [
        { id: 2 }
      ]
    }
  ],
};

export const categories = [
  { id: "frontend", label: { fr: "Frontend", en: "Frontend" }, icon: "💻" },
  { id: "backend", label: { fr: "Backend", en: "Backend" }, icon: "⚙️" },
  { id: "tools", label: { fr: "Outils", en: "Tools" }, icon: "🛠️" },
];

// Fonction helper pour obtenir le niveau basé sur les projets
export const getSkillLevel = (projects) => {
  if (!projects || projects.length === 0) return "junior";

  const hasLarge = projects.some(p => p.size === "large");
  const projectCount = projects.length;

  if (hasLarge) return "advanced";
  if (projectCount >= 2) return "intermediate";
  if (projectCount === 1) return "intermediate";
  return "junior";
};

// Labels pour les niveaux
export const levelLabels = {
  fr: {
    expert: "Expert",
    advanced: "Avancé",
    intermediate: "Intermédiaire",
    junior: "Junior"
  },
  en: {
    expert: "Expert",
    advanced: "Advanced",
    intermediate: "Intermediate",
    junior: "Junior"
  }
};
