export const projectsData = [
  {
    id: 'pawnarena',
    name: "Pawn Arena",
    theme: 'blue-900',
    title: {
      fr: "Plateforme de gestion de tournois d'échecs",
      en: "Chess tournaments management platform",
    },
    description: {
      fr: "\tUne plateforme dynamique optimisée pour la gestion de tournois d’échecs en présentiel, incluant l’organisation complète de tournois de type Suisse.",
      en: "\tA dynamic platform optimized for managing over-the-board chess tournaments, including full support for Swiss-system events.",
    },
    goal: {
      fr: "\tCréer une solution innovante et fiable pour la gestion des tournois d’échecs, destinée à remplacer des outils existants devenus obsolètes.",
      en: "\tTo build an innovative and reliable solution for managing chess tournaments, designed to replace outdated existing tools.",
    },
    process: {
      fr: "\tLe projet a débuté comme un exercice personnel avant de gagner progressivement en ambition. J’ai conçu et développé l’ensemble de la plateforme en m’appuyant étroitement sur les besoins de l’initiateur du projet.\n\tAprès la mise en place des fonctionnalités essentielles, le développement s’est étendu à l’intégration de données issues des fédérations française et internationale d’échecs, ainsi qu’à l’ajout de modules de plus en plus complexes et optimisés.\n\tLe projet a ensuite fait l’objet d’une phase majeure d’optimisation (requêtes SQL, réduction des volumes de données échangées via WebSocket, traitement asynchrone des tâches lourdes et optimisations de calcul côté back-end) afin de supporter des tournois de grande envergure, jusqu’à 1'000 joueurs",
      en: "\tThe project started as a personal exercise and gradually evolved into a more ambitious platform. I designed and developed the entire application based closely on the needs of the project initiator.\n\tAfter implementing the core features, development expanded to include the integration of data from the French and international chess federations, along with the addition of increasingly complex and optimized modules.\n\tThe project then went through a major optimization phase (including SQL query optimization, reduction of data transmitted via WebSockets, asynchronous processing of heavy tasks, and back-end computation optimizations) enabling the platform to handle large-scale tournaments of up to 1,000 players.",
    },
    technologies: ["Ruby on Rails", "Vue.js", "Postgresql", "Redis", "Docker", "TailwindCSS", "Sidekiq", "ActionCable"],
    skills: {
      fr: ["Analyse et prise en compte des besoins utilisateurs", "Gestion asynchrone de tâches lourdes", "Optimisation avancée des requêtes SQL", "Gestion granulaire des droits utilisateurs", "Conception UX/UI centrée utilisateur, appliquée à des interfaces web dynamiques"],
      en: ["User needs analysis and requirement gathering", "Asynchronous handling of heavy background tasks", "Advanced SQL query optimization", "Granular user access and permission management", "Conception of user centered UX/UI, applied to dynamics web interfaces"]
    },
    duration: {
      fr: "18 mois",
      en: "18 months",
    },
    image: "./pawnarena-logo.jpeg",
    images: ["./pawnarena-referees.jpeg", "./pawnarena-info-tournoi.jpeg", "./pawnarena-new-player.jpeg", "./pawnarena-round.jpeg", "./pawnarena-select-result.jpeg"],
    isFeatured: true,
    link: "https://pawnarena.com",
    size: "large"
  },
  {
    id: 'city-hunters',
    name: "City Hunters",
    theme: 'sky-900',
    title: {
      fr: "Jeux de piste en ville",
      en: "Urban tresure hunting",
    },
    description: {
      fr: "\tUne application dynamique de jeu de piste urbain proposant divers scénarios adaptés à chaque ville. Les joueurs peuvent participer seuls ou en équipe sur une même partie.",
      en: "\tA dynamic urban scavenger-hunt app offering various city-specific scenarios. Players can take part alone or join others in the same game.",
    },
    goal: {
      fr: "\tPermettre aux gens de découvrir une nouvelle ville et des lieux uniques de façon ludique.",
      en: "\tEnable people to explore a new city and unique places in a fun and engaging way.",
    },
    process: {
      fr: "\tDéveloppement du projet sur deux semaines en équipe de quatre personnes lors du projet de fin de formation. Définition des objectifs, des fonctionnalités essentielles et optionnelles, conception du design et de l’interface via Figma, création de la base de données puis répartition des tâches. Présentation publique du projet en fin de formation.\n\tJ’ai ensuite poursuivi le projet sur une courte période à titre d’entraînement, en ajoutant une interface d’édition des scénarios.",
      en: "\tTwo-week project developed by a team of four during the end-of-training capstone. We defined the project goals, core and optional features, designed the UI/UX with Figma, created the database, and distributed tasks across the team. The project was presented publicly at the end of the program.\n\tI then continued working on the project for a short period as additional practice, adding a scenario-editing interface.",
    },
    skills: {
      fr: ["Travail en équipe", "Définition des besoins d’un projet", "Conception de plateformes dynamiques"],
      en: ["Teamwork", "Project requirements definition", "Dynamics platforms conception"],
    },
    technologies: ["Ruby on Rails", "Nuxtjs", "Postgresql", "Docker", "Mapbox"],
    duration: {
      fr: "1 mois",
      en: "1 months",
    },
    image: "cityhunters-home.jpeg",
    images: ["cityhunters-lobby.jpeg", "cityhunters-riddle.jpeg", "cityhunters-show-story.jpeg", "cityhunters-stats.jpeg"],
    isFeatured: false,
    link: "",
    size: "small"
  },
  {
    id: 'showsfx',
    name: "ShowSFX",
    theme: 'yellow-900',
    title: {
      fr: "Plateforme de création d'ambiance sonore",
      en: "Soundstage ambiance creation and playback",
    },
    description: {
      fr: "\tCette plateforme React génère des ambiances sonores immersives grâce à une banque de musique et aux effets sonores de l'API Freesound.",
      en: "\tThis React-powered platform creates immersive soundscapes using a music library and sound effects from the Freesound API",
    },
    goal: {
      fr: "\tEn tant que régisseur son pour le théâtre d'improvisation, je recherche une interface intuitive et réactive pour créer rapidement des ambiances sonores variées.\n\tUne banque de sons conséquente est essentielle pour m'adapter aux situations imprévues.\n\tÀ l'avenir, je prévois d'intégrer des banques de sons locales, d'améliorer l'interface et d'optimiser la recherche de sons via l'API",
      en: "\tAs a sound engineer for improv theater, I need an intuitive and responsive interface to quickly create diverse soundscapes.\n\tA comprehensive sound library is crucial to adapt to unexpected situations.\n\tIn the future, I plan to integrate local sound banks, enhance the interface, and optimize sound search through the API",
    },
    process: {
      fr: "",
      en: "",
    },
    skills: {
      fr: [],
      en: [],
    },
    technologies: ["Nodejs", "React", "Docker", "Vite"],
    duration: {
      fr: "1 semaine",
      en: "1 week",
    },
    image: "showsfx-logo.jpeg",
    images: ["showsfx-playlist.jpeg", 'showsfx-search.jpeg', 'showsfx-tracks.jpeg'],
    isFeatured: false,
    link: "https://showsfx.fly.dev",
    size: "small"
  },
];
