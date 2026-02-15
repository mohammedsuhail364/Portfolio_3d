import {
  weather,
  dropper,
  chatApp,
  snakeGame,
  QRCodeGenerator,
  memoryGame,
  lms,
  snapcircle,
  snapgram,
  temple,
  zoho,
  deluge,
  crm,
  urlShortener,
  skillForge,
} from "../assets/images";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
  linkedin,
  MYSQL,
  python,
  bootStrap,
  postman,
  java,
  resume,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },

  {
    imageUrl: javascript,
    name: "javaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: deluge,
    name: "Deluge",
    type: "Backend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "css",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootStrap,
    name: "BootStrap",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: postman,
    name: "PostMan",
    type: "Api Check",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: MYSQL,
    name: "MYSQL",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];
export const experiences = [
  {
    title: "Developer",
    companyName: "Zoho",
    icon: zoho,
    iconBg: "#b7e4c7",
    date: "May 2025 - Present",
    points: [
      "Designed and implemented automation workflows in Zoho CRM Plus using custom functions, client scripts, and widgets across Leads, Deals, and Contacts modules, reducing repetitive manual operations.",
      "Built internal REST APIs to standardize data exchange between Accounts, Products, and related modules, improving consistency and reducing data mismatches.",
      "Developed analytics dashboards and COQL-based reporting pipelines to track business KPIs and operational metrics for internal teams.",
      "Collaborated with product stakeholders to debug production issues, analyze root causes, and deploy reliable fixes without disrupting existing workflows.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal Project — Real-Time Chat System",
    icon: chatApp,
    iconBg: "#b7e4c7",
    date: "July 2024 - August 2024",
    points: [
      "Built a real-time messaging platform using Node.js, Express, React, and MongoDB supporting concurrent users with WebSocket-based communication.",
      "Implemented JWT authentication and session handling to secure user communication and prevent unauthorized access.",
      "Designed database schemas and indexing strategies to optimize message retrieval latency and handle high write frequency.",
      "Handled connection lifecycle events (join/leave/reconnect) to maintain reliable message delivery and user presence state.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal Project — Learning Management System",
    icon: lms,
    iconBg: "#accba3",
    date: "May 2024 - June 2024",
    points: [
      "Developed a full-stack LMS supporting course creation, enrollment, and progress tracking with RESTful APIs and role-based authorization.",
      "Designed modular backend services to manage users, courses, and assessments while ensuring data consistency across operations.",
      "Optimized frontend performance using reusable UI components and minimized redundant API calls through efficient state handling.",
      "Implemented scalable schema design for managing course content and user progress records.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal Project — E-commerce Platform",
    icon: dropper,
    iconBg: "#accbe1",
    date: "April 2024 - May 2024",
    points: [
      "Built an end-to-end e-commerce platform with product catalog, order management, and admin controls using MERN architecture.",
      "Implemented secure authentication, authorization, and protected routes for users and administrators.",
      "Integrated payment processing workflow and ensured transactional consistency between order creation and payment confirmation.",
      "Designed APIs for inventory and order lifecycle management to handle concurrent updates safely.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Resume",
    iconUrl: resume,
    link: "https://drive.google.com/file/d/16ql4QRdW_YrXqWF47IGJwnLNJBkRlUYS/view?usp=drive_link",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/mohammedsuhail364",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mohammedsuhail364/",
  },
  ,
];

export const projects = [
  {
    iconUrl: chatApp,
    theme: "btn-back-blue",
    githubUrl: "https://github.com/mohammedsuhail364/Chat_App",
    name: "Chat-Us",
    description:
      "Designed WebSocket messaging system handling session management, automatic reconnections and real-time presence tracking. Implemented MongoDB indexing strategy to maintain consistent low-latency message retrieval during concurrent user activity.",
    link: "https://chat-app-c0br.onrender.com",
  },
  {
    iconUrl: skillForge,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/SkillForge",
    name: "Skill Forge",
    description:
      "Implemented authenticated video and chat sessions using server-generated access tokens. Built protected APIs with rate limiting and webhook-driven workflows for reliable session lifecycle management without manual intervention.",
    link: "https://skillforge-yfvi.onrender.com/",
  },
  {
    iconUrl: lms,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/LMS",
    name: "Learning Management System",
    description:
      "Designed course enrollment and progress tracking data relationships with MongoDB. Implemented aggregation pipelines for efficient retrieval of student activity records and progress summaries.",
    link: "https://lms-omega-rosy.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/snapgram",
    name: "Moment Us",
    description:
      "Built social feed interactions with authenticated media upload and retrieval. Optimized backend database queries to maintain responsive user experience during concurrent feed requests.",
    link: "https://momentus.onrender.com/",
  },
  {
    iconUrl: crm,
    theme: "btn-back-orange",
    githubUrl: "https://github.com/mohammedsuhail364/mcierp",
    name: "MCIERP",
    description:
      "Developed role-based authorization middleware controlling access across user hierarchies. Built automated ticket lifecycle workflows with status tracking. Structured modular services ensuring permission safety and consistent operational audit trails.",
    link: "https://mcierp.vercel.app/",
  },
  {
    iconUrl: urlShortener,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/url_shortener",
    name: "Linklytics",
    description:
      "Built URL redirection and analytics service with indexed database queries for click tracking. Implemented caching strategy to maintain predictable redirect latency during traffic spikes. Designed database schema for efficient analytics aggregation.",
    link: "https://url-shortener-nine-beige.vercel.app/",
  },
  {
    iconUrl: snapcircle,
    theme: "btn-back-blue",
    githubUrl: "https://github.com/mohammedsuhail364/Snap_Circle",
    name: "Snap Circle",
    description:
      "Implemented booking workflows integrated with real-time messaging communication. Ensured state synchronization between scheduling actions and user conversations through database transaction management.",
    link: "https://snap-circle.vercel.app/",
  },

  {
    iconUrl: temple,
    theme: "btn-back-pink",
    githubUrl: "https://github.com/mohammedsuhail364/Temple_Project",
    name: "Temple Project",
    description:
      "Created event scheduling system with calendar integration and donation tracking administrative workflows. Implemented data validation and consistency checks across related entities during updates.",
    link: "https://temple-project-nine.vercel.app/",
  },
  {
    iconUrl: dropper,
    theme: "btn-back-red",
    githubUrl: "https://github.com/mohammedsuhail364/Dropper",
    name: "Dropper",
    description:
      "Implemented order lifecycle management with status transitions. Built protected purchase routes with authentication middleware. Ensured transactional consistency between payment confirmation and order creation using database operations.",
    link: "https://github.com/mohammedsuhail364/Dropper",
  },
  {
    iconUrl: QRCodeGenerator,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/Qr_code_generator",
    name: "QR Generator",
    description:
      "Integrated external API for dynamic QR code generation with error handling. Implemented debounced input handling to prevent excessive API calls during continuous user typing.",
    link: "https://mohammedsuhail364.github.io/Qr_code_generator/",
  },
  {
    iconUrl: weather,
    theme: "btn-back-yellow",
    githubUrl: "https://github.com/mohammedsuhail364/weather_project",
    name: "Weather App",
    description:
      "Fetched external weather data using asynchronous API requests with loading states. Managed UI state updates during data refreshes and implemented error boundaries for API failures.",
    link: "https://mohammedsuhail364.github.io/weather_project/",
  },
  {
    iconUrl: snakeGame,
    theme: "btn-back-orange",
    githubUrl: "https://github.com/mohammedsuhail364/SnakeGame",
    name: "Snake Game",
    description:
      "Implemented continuous movement game loop with collision detection logic. Managed game state including score tracking and boundary conditions during dynamic gameplay.",
    link: "https://mohammedsuhail364.github.io/SnakeGame/",
  },
  {
    iconUrl: memoryGame,
    theme: "btn-back-pink",
    githubUrl: "https://github.com/mohammedsuhail364/MemoreGame",
    name: "Memory Game",
    description:
      "Built randomized card matching logic with controlled state transitions. Implemented game reset functionality and prevented race conditions during rapid user interactions.",
    link: "https://mohammedsuhail364.github.io/MemoreGame/",
  },
];
