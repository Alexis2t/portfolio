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
  SiVite,
  SiPostgresql,
  SiNginx,
  SiRedis,
  SiLinux,
  SiStimulus,
} from "react-icons/si";
import { MdAutorenew } from "react-icons/md";

export const skillsData = {
  frontend: [
    {
      name: "Vue.js 3",
      icon: FaVuejs,
      iconColor: "#42B883",
      type: 'config',
      projects: [
        { id: 'pawnarena' }
      ],
      tools: ['Pinia', 'Vuex', 'Composition API', 'Axios'],
      achievements: {
        fr: [
          { name: "Développement d’applications Vue.js en Composition API" },
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
              { name: "Design responsive mobile-first et UX optimisé" }
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
          }
        ]
      }
    }, {
      name: "TailwindCSS 3/4",
      icon: SiTailwindcss,
      iconColor: "#06B6D4",
      level: 'intermediate',
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
        ],
        en: [
          { name: "UI development using TailwindCSS" },
          { name: "Advanced configuration via tailwind.config.js (theme, plugins, media queries)" },
          { name: "Coherent and mobile-first design system" },
        ]
      }
    }, {
      name: "Vite",
      icon: SiVite,
      iconColor: "#FFC13D",
      level: 'intermediate',
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
      ],
      achievements: {
        fr: [
          { name: "Configuration et utilisation de Vite avec Vue et Rails" },
          { name: "Gestion des variables d’environnement front et builds production" },
          { name: "Debug et optimisation de build Docker + Vite" }
        ],
        en: [
          { name: "Vite configuration and usage with Vue and Rails" },
          { name: "Environment variables handling and production builds" },
          { name: "Debugging and optimizing Docker + Vite builds" }
        ]
      }
    }, {
      name: "Stimulus",
      icon: SiStimulus,
      iconColor: "#77E8B9",
      level: 'intermediate',
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
    },
  ],
  backend: [
    {
      name: "Ruby on Rails 7",
      icon: SiRubyonrails,
      iconColor: "#CC0000",
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
      ],
      tools: ['Sidekiq/Active job', 'Action Cable', 'Devise', 'Active Record'],
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
      level: 'intermediate',
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
      level: 'intermediate',
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
    }
  ],
  infra: [
    {
      name: "Docker",
      icon: FaDocker,
      iconColor: "#2496ED",
      level: 'intermediate',
      projects: [
        { id: 'pawnarena' },
        { id: 'showsfx' },
      ],
      tools: ['Docker Compose'],
      achievements: {
        fr: [
          { name: "Écriture des Dockerfiles (multi-stage)" },
          { name: "Gestion de Docker en production avec debug et variables d’environnement" },
          { name: "Utilisation de docker-compose pour orchestrer PostgreSQL, Redis, Web, Sidekiq" },
          { name: "Implémentation de health checks applicatifs par service pour sécuriser les phases de déploiement" }
        ],
        en: [
          { name: "Dockerfile writing (multi-stage)" },
          { name: "Docker production management with debugging and environment variables" },
          { name: "Use of docker-compose to orchestrate PostgreSQL, Redis, Web, Sidekiq" },
          { name: "Implementation of service-level health checks to guarantee deployment reliability" }
        ]
      }
    }, {
      name: "Linux",
      icon: SiLinux,
      iconColor: "#FCC624",
      level: 'intermediate',
      projects: [
        { id: 'pawnarena' },
        { id: "city-hunters" },
        { id: 'showsfx' },
      ],
      achievements: {
        fr: [
          { name: "Deploiement d'applications sur serveur VPS vierge Debian" },
          { name: "Administration serveur principalement en SSH" },
          { name: "Gestion utilisateurs / groupes et permissions fines par application" },
          { name: "Analyse des logs applicatifs et gestion des services" }
        ],
        en: [
          { name: 'Applications deployment on clean Debian VPS' },
          { name: "Server administration primarily via SSH" },
          { name: "User / group management and fine-grained file permissions per app" },
          { name: "Application log analysis and service management" }
        ]
      }
    }, {
      name: "Nginx",
      icon: SiNginx,
      iconColor: "#009639",
      level: 'intermediate',
      projects: [
        { id: 'pawnarena' },
        { id: 'city-hunters' },
      ],
      achievements: {
        fr: [
          { name: "Installation et configuration de Nginx sur VPS vierge" },
          { name: "Mise en place de reverse proxy (Rails / Frontend)" },
          { name: "Gestion multi-sites via virtual hosts" },
          {
            name: "Sécurisation serveur (niveau application)",
            subAchievements: [
              { name: "Isolation des applications (1 utilisateur Linux / 1 app)" },
              { name: "Gestion des permissions Linux (chmod, chown)" }
            ]
          },
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
              { name: "Application isolation (one Linux user per application)" },
              { name: "Linux permissions management (chmod, chown, www-data)" }
            ]
          },
          { name: "Automated application deployment" },
          { name: "Infrastructure migration from Fly.io to VPS" },
          { name: "DNS configuration (A, CNAME) using Namecheap" },
          { name: "Server administration primarily via SSH" }
        ]
      }
    }, {
      name: "CI/CD",
      icon: MdAutorenew,
      iconColor: "#4CAF50",
      projects: [
        { id: 'pawnarena' },
      ],
      tools: ['Jenkins', 'Github Actions'],
      level: 'intermediate',
      achievements: {
        fr: [
          { name: "Conception et mise en place d’une pipeline CI/CD avec Jenkins" },
          { name: "Automatisation des déploiements en production avec rollback automatique en cas d’échec" },
          { name: "Développement et exécution de tests fonctionnels dans une application Ruby on Rails" }
        ],
        en: [
          { name: "Design and implementation of a CI/CD pipeline using Jenkins" },
          { name: "Automation of production deployments with automatic rollback on failure" },
          { name: "Development and execution of functional tests in a Ruby on Rails application" }
        ]
      }
    },
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
      tools: ['Github Action'],
      achievements: {
        fr: [
          { name: "Résolution de conflits et travail collaboratif" },
          { name: "Organisation du code et des features même en solo" }
        ],
        en: [
          { name: "Conflict resolution and collaborative work" },
          { name: "Code and feature organization even when working solo" }
        ]
      }
    }, {
      name: "Python",
      icon: FaPython,
      iconColor: "#3776AB",
      level: "beginner",
      projects: [
        { id: 'pawnarena' }
      ],
      achievements: {
        fr: [
          { name: "Conception d’un script de synchronisation permettant à une machine locale de se connecter à une API distante afin de répliquer les données du projet Pawn Arena vers une base de données Microsoft Access (.mdb) locale et inversement" }
        ],
        en: [
          { name: "Design and implementation of a synchronization script enabling a local machine to connect to a remote API and replicate Pawn Arena data into a local Microsoft Access Database (.mdb) and reverse" }
        ]
      }
    }, {
      name: "Figma",
      icon: FaFigma,
      iconColor: "#F24E1E",
      level: 'beginner',
      projects: [
        { id: "pawnarena" },
        { id: "city-hunters" },
      ]
    }
  ],
};

// Fonction helper pour obtenir le niveau basé sur les projets
export const getSkillLevel = (projects) => {
  if (!projects || projects.length === 0) return "beginner";

  const hasLarge = projects.some(p => p.size === "large");
  const projectCount = projects.length;

  if ((hasLarge && projectCount >= 2) || projectCount >= 3) return "advanced";
  if (hasLarge || projectCount > 1) return "intermediate";
  return "beginner";
};

// Labels pour les niveaux
export const levelLabels = {
  fr: {
    expert: "Expert",
    advanced: "Avancé",
    intermediate: "Intermédiaire",
    beginner: " "
  },
  en: {
    expert: "Expert",
    advanced: "Advanced",
    intermediate: "Intermediate",
    beginner: " "
  }
};
