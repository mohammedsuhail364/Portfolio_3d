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
    title: "Enterprise Business Solution Developer",
    companyName: "Zoho",
    icon: zoho,
    iconBg: "#b7e4c7",
    date: "May 2025 - Present",
    points: [
      "Built advanced custom functions, client scripts, and widgets in Zoho CRM Plus to automate workflows across Leads, Deals, Contacts, and other key modules.",
      "Developed scalable internal tools and REST APIs to streamline data flow between modules like Products and Accounts for seamless integration.",
      "Worked with cross-functional teams to deliver analytics dashboards that helped track KPIs, performance metrics, and business goals.",
      "Created COQL-based reports for efficient data querying and insights , enabling faster, data-driven decision-making across departments.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal",
    icon: chatApp,
    iconBg: "#b7e4c7",
    date: "July 2024 - August 2024",
    points: [
      "Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Implemented Web Socket for live messaging, ensuring seamless communication between users",
      "Integrated user authentication and authorization with JWT, enhancing security",
      "Designed and optimized MongoDB schemas to handle large volumes of chat data efficiently. Emphasized responsive design and cross-platform compatibility",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal",
    icon: lms,
    iconBg: "#accba3",
    date: "May 2024 - June 2024",
    points: [
      "Leveraging TailwindCSS and Shadcn UI, the LMS delivers a sleek, customizable, and responsive design for seamless cross-device experiences.",
      "Built with MongoDB, Express.js, React.js, and Node.js, the LMS ensures efficient user authentication, course management, and scalable data handling.",
      "The LMS supports course creation, student enrollment, progress tracking, and assessments, with React.js enabling interactivity and APIs ensuring smooth server-client communication.",
      "TailwindCSS and Shadcn UI streamline styling with reusable components, reducing boilerplate and enhancing maintainability.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal",
    icon: dropper,
    iconBg: "#accbe1",
    date: "April 2024 - May 2024",
    points: [
      "Developed a comprehensive drop shipping web application using the MERN stack, which includes React for a dynamic frontend",
      "Redox for state management, Node.js and Express.js for the backend, and MongoDB for data storage",
      "The application features secure user authentication, real-time product catalog management and seamless payment gateway integration",
      "It also includes an admin dashboard for managing users, products, orders, and analytics",
    ],
  },
];
export const socialLinks = [
  {
    name: "Resume",
    iconUrl: resume,
    link: "https://drive.google.com/file/d/1cNFVXtSk8EsL9LbAQCwqh5q_PozOBdIy/view?usp=drive_link",
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
      "Built a real-time chat application using the MERN stack, featuring WebSocket integration for seamless live messaging. Implemented secure user authentication with JWT and optimized MongoDB schemas for handling large chat data. Focused on responsive design and cross-platform compatibility.",
    link: "https://chat-app-c0br.onrender.com/",
  },
  {
    iconUrl: crm,
    theme: "btn-back-orange",
    githubUrl: "https://github.com/mohammedsuhail364/mcierp",
    name: "MCIERP",
    description:
      "Built a Customer Relationship Management (CRM) system with the MERN stack and Tailwind CSS. Features include role-based access control, JWT authentication, ticket creation and tracking, a detailed analytics dashboard, and a call register module for managing and analyzing customer interactions efficiently.",
    link: "https://mcierp.vercel.app/",
  },
  {
    iconUrl: urlShortener,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/url_shortener",
    name: "Linklytics",
    description:
      "Developed a full-stack URL shortener using React, Tailwind CSS, Spring Boot, and PostgreSQL. The app converts long URLs into short, trackable links, featuring analytics for click count and date-wise insights. Implemented JWT authentication and a responsive, user-friendly interface for secure link management.",
    link: "https://url-shortener-nine-beige.vercel.app/",
  },

  {
    iconUrl: snapcircle,
    theme: "btn-back-blue",
    githubUrl: "https://github.com/mohammedsuhail364/Snap_Circle",
    name: "Snap Circle",
    description:
      "SnapCircle is a real-time platform built with the MERN stack that connects users with professional photographers. Users can book appointments, register as photographers, and communicate seamlessly via WebSocket-powered chat. Featuring secure JWT authentication and optimized MongoDB schemas",
    link: "https://snap-circle.vercel.app/",
  },
  {
    iconUrl: lms,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/LMS",
    name: "Learning Management System",
    description:
      "Developed a full-stack LMS using React.js, Node.js,and MongoDB, serving over 500 users for course creation, user enrollment, and progress tracking. Implemented RESTful APIs to handle 10,000+ API calls per day, ensuring seamless communication between the frontend and backend while improving system efficiency.",
    link: " https://lms-omega-rosy.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/snapgram",
    name: "Snapgram",
    description:
      "Developed Snapgram, a full-stack social media application inspired by Instagram using React, Appwrite, Tailwind CSS, and ShadCN UI. Enabled seamless user authentication, real-time posts, media sharing, and interactive UI components. Optimized backend operations with Appwrite’s database and authentication services.",
    link: "https://github.com/mohammedsuhail364/snapgram",
  },
  {
    iconUrl: temple,
    theme: "btn-back-pink",
    githubUrl: "https://github.com/mohammedsuhail364/Temple_Project",
    name: "Temple Project",
    description:
      "Developed a full-stack Temple Information Management System using React.js, Node.js, MongoDB, and Tailwind CSS, serving over 300 temple administrators with comprehensive temple data, event scheduling, and donation tracking.Ensuring seamless communication between the frontend and backend.",
    link: "https://temple-project-nine.vercel.app/",
  },

  {
    iconUrl: dropper,
    theme: "btn-back-red",
    githubUrl: "https://github.com/mohammedsuhail364/Dropper",
    name: "Dropper",
    description:
      "Developed a full-stack dropshipping web application using the MERN stack, featuring secure user authentication, real-time product catalog management, and seamless payment integration. Integrated an admin dashboard for efficient user, product, order management, and analytics tracking.",
    link: "https://github.com/mohammedsuhail364/Dropper",
  },
  {
    iconUrl: QRCodeGenerator,
    theme: "btn-back-green",
    githubUrl: "https://github.com/mohammedsuhail364/Qr_code_generator",
    name: "QR Generator",
    description:
      "Developed a QR code generator using React, leveraging a QR code generation API for dynamic code creation. Implemented a user-friendly interface with real-time QR code generation, ensuring smooth and responsive performance.",
    link: "https://mohammedsuhail364.github.io/Qr_code_generator/",
  },
  {
    iconUrl: weather,
    theme: "btn-back-yellow",
    githubUrl: "https://github.com/mohammedsuhail364/weather_project",
    name: "Weather App",
    description:
      "Created a weather app using React and integrated a weather API for real-time data. The app features a responsive design, providing users with accurate weather forecasts and conditions based on their location or input.",
    link: "https://mohammedsuhail364.github.io/weather_project/",
  },
  {
    iconUrl: snakeGame,
    theme: "btn-back-orange",
    githubUrl: "https://github.com/mohammedsuhail364/SnakeGame",
    name: "Snake Game",
    description:
      "Built a classic Snake game using HTML, CSS, and JavaScript, featuring smooth controls and responsive gameplay. The game offers an intuitive user interface with dynamic movement and real-time score tracking. Optimized for performance across various devices, providing an engaging and nostalgic experience.",
    link: "https://mohammedsuhail364.github.io/SnakeGame/",
  },
  {
    iconUrl: memoryGame,
    theme: "btn-back-pink",
    githubUrl: "https://github.com/mohammedsuhail364/MemoreGame",
    name: "Memory Game",
    description:
      "Developed a memory game using HTML, CSS, and JavaScript, designed to challenge players recall skills. The game features dynamic card flipping, random shuffling, and smooth animations for an engaging user experience. Implemented score tracking and responsive design, ensuring compatibility across devices.",
    link: "https://mohammedsuhail364.github.io/MemoreGame/",
  },
];
