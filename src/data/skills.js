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
  SiNginx,
  SiRedis,
  SiLinux,
  SiStimulus,
} from "react-icons/si";
import { MdAutorenew } from "react-icons/md";

export const skillsData = {
  frontend: [{
    name: "Vue.js",
    icon: FaVuejs,
    iconColor: "#42B883",
    type: 'config',
    projects: [
      { id: 'pawnarena' }
    ],
    achievements: {
      fr: [
        { name: "Développement d’applications Vue.js avec la Composition API" },
        { name: "Architecture front modulaire et maintenable (composants, pages, layouts)" },
        { name: "Conception de composants réutilisables et communicants" },
        {
          name: "Gestion avancée de l’état applicatif",
          subAchievements: [
            { name: "State local et cycle de vie (ref, reactive, watch, lifecycle hooks)" },
            { name: "State global avec Pinia et Vuex" }
          ]
        },
        {
          name: "Gestion des flux asynchrones",
          subAchievements: [
            { name: "Consommation d’API avec Axios et fetch" },
            { name: "Synchronisation UI avec traitements asynchrones (workers)" }
          ]
        },
        {
          name: "Routing et contrôle de navigation",
          subAchievements: [
            { name: "Configuration de Vue Router" },
            { name: "Routes protégées et navigation guards" }
          ]
        },
        {
          name: "Intégration backend",
          subAchievements: [
            { name: "Intégration avec une API Rails" },
            { name: "Gestion de formulaires complexes et des erreurs de validation" }
          ]
        },
        {
          name: "UI & UX orientées produit",
          subAchievements: [
            { name: "Intégration de bibliothèques UI (PrimeVue, FontAwesome)" },
            { name: "Design responsive mobile-first et UX optimisée" }
          ]
        },
        {
          name: "Tooling et mise en production",
          subAchievements: [
            { name: "Utilisation de Vite" },
            { name: "Build et déploiement d’applications Vue.js en production" }
          ]
        }
      ],
      en: [
        { name: "Vue.js application development using the Composition API" },
        { name: "Modular and maintainable frontend architecture (components, pages, layouts)" },
        { name: "Design of reusable and communicative components" },
        {
          name: "Advanced application state management",
          subAchievements: [
            { name: "Local state and lifecycle handling (ref, reactive, watch, lifecycle hooks)" },
            { name: "Global state management with Pinia and Vuex" }
          ]
        },
        {
          name: "Asynchronous flow handling",
          subAchievements: [
            { name: "API consumption using Axios and fetch" },
            { name: "UI synchronization with asynchronous processing (workers)" }
          ]
        },
        {
          name: "Routing and navigation control",
          subAchievements: [
            { name: "Vue Router configuration" },
            { name: "Protected routes and navigation guards" }
          ]
        },
        {
          name: "Backend integration",
          subAchievements: [
            { name: "Integration with a Rails API" },
            { name: "Complex form handling and backend validation errors" }
          ]
        },
        {
          name: "Product-oriented UI & UX",
          subAchievements: [
            { name: "Integration of UI libraries (PrimeVue, FontAwesome)" },
            { name: "Mobile-first responsive design and UX optimization" }
          ]
        },
        {
          name: "Tooling and production readiness",
          subAchievements: [
            { name: "Vite usage" },
            { name: "Building and deploying Vue.js applications to production" }
          ]
        }
      ]
    }

  }, {
      name: "Nuxt.js",
      icon: SiNuxtdotjs,
      iconColor: "#00DC82",
      projects: [
        { id: "city-hunters" }
      ]
    }, {
      name: "React",
      icon: FaReact,
      iconColor: "#61DAFB",
      projects: [
        { id: 'showsfx' }
      ]
    }, {
      name: "TypeScript",
      icon: SiTypescript,
      iconColor: "#3178C6",
      projects: [
        { id: 'showsfx' },
      ]
    }, {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      iconColor: "#06B6D4",
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
      ],
      achievements: {
        fr: [
          { name: "Développement d’interfaces avec TailwindCSS" },
          { name: "Configuration avancée via tailwind.config.js (thème, plugins, media queries)" },
          { name: "Design system cohérent et mobile-first" },
          { name: "Création de composants et layouts complexes réutilisables" }
        ],
        en: [
          { name: "UI development using TailwindCSS" },
          { name: "Advanced configuration via tailwind.config.js (theme, plugins, media queries)" },
          { name: "Coherent and mobile-first design system" },
          { name: "Creation of reusable components and complex layouts" }
        ]
      }
    }, {
      name: "Vite",
      icon: SiVite,
      iconColor: "#FFC13D",
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
      ],
      achievements: {
        fr: [
          { name: "Configuration et utilisation de Vite avec Vue et Rails" },
          { name: "Gestion des alias et intégration TailwindCSS" },
          { name: "Gestion des variables d’environnement front et builds production" },
          { name: "Debug et optimisation de build Docker + Vite" }
        ],
        en: [
          { name: "Vite configuration and usage with Vue and Rails" },
          { name: "Alias management and TailwindCSS integration" },
          { name: "Environment variables handling and production builds" },
          { name: "Debugging and optimizing Docker + Vite builds" }
        ]
      }
    }, {
      name: "Stimulus",
      icon: SiStimulus,
      iconColor: "#77E8B9",
      projects: [
        { id: "city-hunters" },
      ],
      achievements: {
        fr: [
          { name: "Enrichissement de pages Rails avec Stimulus (SPA légère via WebSocket)" },
          { name: "Structuration multi-controllers par feature" },
          { name: "Couplage avec API backend et logique métier JS" }
        ],
        en: [
          { name: "Enhancing Rails pages with Stimulus (light SPA via WebSocket)" },
          { name: "Structuring multiple controllers per feature" },
          { name: "Coupling with backend API and JS business logic" }
        ]
      }
    },
  ],
  backend: [
    {
      name: "Ruby on Rails",
      icon: SiRubyonrails,
      iconColor: "#CC0000",
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
      ],
      achievements: {
        fr: [
          { name: "Développement de logique métier complexe (services, concerns, PORO)" },
          { name: "Customisation légère de Devise et gestion d’APIs JSON" },
          { name: "Background jobs avec ActiveJob et Sidekiq" },
          { name: "Optimisation de requêtes ActiveRecord et SQL direct" },
          { name: "Mise en place de sécurités type Rake attack" }
        ],
        en: [
          { name: "Development of complex business logic (services, concerns, PORO)" },
          { name: "Light Devise customization and JSON API management" },
          { name: "Background jobs with ActiveJob and Sidekiq" },
          { name: "ActiveRecord and raw SQL query optimization" },
          { name: "Implementation of security measures like Rake attack" }
        ]
      }
    }, {
      name: "PostgreSQL",
      icon: SiPostgresql,
      iconColor: "#4169E1",
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
      ],
      achievements: {
        fr: [
          { name: "Écriture de requêtes SQL manuelles et optimisation" },
          { name: "Utilisation d’indexes simples et composés" },
          { name: "Debug de performance et migrations / synchronisation de bases" }
        ],
        en: [
          { name: "Manual SQL query writing and optimization" },
          { name: "Use of simple and composite indexes" },
          { name: "Performance debugging and database migration / synchronization" }
        ]
      }
    }, {
      name: "Redis",
      icon: SiRedis,
      iconColor: "#DC382D",
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
      ],
      achievements: {
        fr: [
          { name: "Utilisation de Redis pour jobs et cache opportuniste" },
          { name: "Intégration critique dans les projets pour la performance backend" }
        ],
        en: [
          { name: "Using Redis for jobs and opportunistic caching" },
          { name: "Critical integration in projects for backend performance" }
        ]
      }
    }, {
      name: "Node.js",
      icon: FaNodeJs,
      iconColor: "#339933",
      projects: [
        { id: 'showsfx' }
      ]
    }, {
      name: "Nginx",
      icon: SiNginx,
      iconColor: "#009639",
      projects: [
        { id: 'pawnarena' }
      ],
      achievements: {
        fr: [
          { name: "Installation et configuration de Nginx sur VPS vierge" },
          { name: "Mise en place de reverse proxy (Rails / Frontend)" },
          { name: "Gestion multi-sites via virtual hosts" },
          {
            name: "Sécurisation serveur (niveau application)",
            subAchievements: [
              { name: "Authentification SSH par clé" },
              { name: "Configuration des ports réseau" },
              { name: "Isolation des applications (1 utilisateur Linux / 1 app)" },
              { name: "Gestion des permissions Linux (chmod, chown, www-data)" }
            ]
          },
          { name: "Gestion des variables d’environnement côté serveur" },
          { name: "Déploiement automatisé applicatif" },
          { name: "Migration d’infrastructure Fly.io → VPS" },
          { name: "Configuration DNS (A, CNAME) via Namecheap" },
          { name: "Administration serveur majoritairement via SSH" }
        ],
        en: [
          { name: "Installation and configuration of Nginx on a fresh VPS" },
          { name: "Reverse proxy setup (Rails / frontend applications)" },
          { name: "Multi-site management using virtual hosts" },
          {
            name: "Server-level security configuration",
            subAchievements: [
              { name: "SSH key-based authentication" },
              { name: "Network ports configuration" },
              { name: "Application isolation (one Linux user per application)" },
              { name: "Linux permissions management (chmod, chown, www-data)" }
            ]
          },
          { name: "Server-side environment variables management" },
          { name: "Automated application deployment" },
          { name: "Infrastructure migration from Fly.io to VPS" },
          { name: "DNS configuration (A, CNAME) using Namecheap" },
          { name: "Server administration primarily via SSH" }
        ]
      },
    }

    // {
    //   name: "Express",
    //   icon: SiExpress,
    //   iconColor: "#FFFFFF",
    //   projects: [
    //     { id: '' }
    //   ]
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: FaGitAlt,
      iconColor: "#F05032",
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
        { id: '' },
      ],
      achievements: {
        fr: [
          { name: "Gestion avancée des branches feature et workflow Git" },
          { name: "Résolution de conflits et travail collaboratif" },
          { name: "Organisation du code et des features même en solo" }
        ],
        en: [
          { name: "Advanced feature branch management and Git workflow" },
          { name: "Conflict resolution and collaborative work" },
          { name: "Code and feature organization even when working solo" }
        ]
      }
    }, {
      name: "Docker",
      icon: FaDocker,
      iconColor: "#2496ED",
      projects: [
        { id: 'pawnarena' },
        { id: 'showsfx' },
      ],
      achievements: {
        fr: [
          { name: "Écriture et compréhension avancée de Dockerfiles (multi-stage)" },
          { name: "Gestion de Docker en production avec debug et variables d’environnement" },
          { name: "Utilisation de docker-compose pour orchestrer PostgreSQL, Redis, Web, Sidekiq" }
        ],
        en: [
          { name: "Advanced Dockerfile writing and understanding (multi-stage)" },
          { name: "Docker production management with debugging and environment variables" },
          { name: "Use of docker-compose to orchestrate PostgreSQL, Redis, Web, Sidekiq" }
        ]
      }
    // }, {
    //   name: "CI/CD",
    //   icon: MdAutorenew,
    //   iconColor: "#4CAF50",
    //   projects: [
    //     { id: 'pawnarena' },
    //   ],
    //   level: 'medium'
    }, {
      name: "Figma",
      icon: FaFigma,
      iconColor: "#F24E1E",
      projects: [
        { id: "city-hunters" }
      ]
    }, {
      name: "Linux",
      icon: SiLinux,
      iconColor: "#FCC624",
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
      ],
      achievements: {
        fr: [
          { name: "Administration serveur principalement en SSH" },
          { name: "Gestion utilisateurs / groupes et permissions fines par application" },
          { name: "Analyse des logs applicatifs et redémarrage de services" }
        ],
        en: [
          { name: "Server administration primarily via SSH" },
          { name: "User / group management and fine-grained file permissions per app" },
          { name: "Application log analysis and service management" }
        ]
      }
    }, {
      name: "Python",
      icon: FaPython,
      iconColor: "#3776AB",
      projects: [
        { id: 'pawnarena' }
      ]
    },
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
