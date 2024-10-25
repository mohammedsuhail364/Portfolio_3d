import { 
  weather,
  dropper,
  chatApp,
  snakeGame,
  QRCodeGenerator,
  memoryGame
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
  contact,
  MYSQL,
  python,
  bootStrap,
  postman,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
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
export const experiences=[
  {
    title:"Web Developer",
    companyName:"Personal",
    icon:dropper,
    iconBg:"#accbe1",
    date:"May 2024 - June 2024",
    points:[
      "Developed a comprehensive drop shipping web application using the MERN stack, which includes React for a dynamic frontend",
      "Redox for state management, Node.js and Express.js for the backend, and MongoDB for data storage",
      "The application features secure user authentication, real-time product catalog management and seamless payment gateway integration",
      "It also includes an admin dashboard for managing users, products, orders, and analytics"
    ]
  },
  {
    title:"Full Stack Developer",
    companyName:"Personal",
    icon:chatApp,
    iconBg:"#b7e4c7",
    date:"July 2024 - August 2024",
    points:[
      "Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Implemented Web Socket for live messaging, ensuring seamless communication between users",
      "Integrated user authentication and authorization with JWT, enhancing security",
      "Designed and optimized MongoDB schemas to handle large volumes of chat data efficiently. Emphasized responsive design and cross-platform compatibility"
    ]
  },
  {
    title:"Frontend Developer",
    companyName:"Personal",
    icon:snakeGame,
    iconBg:"lightBlue",
    date:"November 2023 - December 2023",
    points:[
      "Built a Classic Snake game, providing an engaging experience for users through keyboard controls",
      "Programmed the game mechanics, including snake movement, collision detection, and score tracking using JavaScript",
      "Developed a simple and clean UI with HTML and CSS",
      "Optimized game performance for smooth gameplay"
    ]
  },
  {
    title:"Frontend Developer",
    companyName:"Personal",
    icon:weather,
    iconBg:"lightBlue",
    date:"June 2023 - July 2023",
    points:[
      "Created a dynamic weather website that displays weather information based on users search location.",
      "Integrated a weather API to fetch real-time data.",
      "Develop a frontend interface using HTML, CSS and JavaScript",
      "Implement location service to provide weather updates based on users search location"
    ]
  },

]
export const socialLinks=[
  {
    name:"Contact",
    iconUrl:contact,
    link:"/contact"
  },
  {
    name:"GitHub",
    iconUrl:github,
    link:"https://github.com/mohammedsuhail364"
  },
  {
    name:"LinkedIn",
    iconUrl:linkedin,
    link:"https://www.linkedin.com/in/mohammedsuhail364/"
  },
]

export const projects=[
  {
    iconUrl:dropper,
    theme:'btn-back-red',
    name:'Dropper',
    description:'Developed a full-stack dropshipping web application using the MERN stack, featuring secure user authentication, real-time product catalog management, and seamless payment integration. Integrated an admin dashboard for efficient user, product, order management, and analytics tracking.',
    link:'https://github.com/mohammedsuhail364/Dropper'
  },
  {
    iconUrl:chatApp,
    theme:'btn-back-blue',
    name:'Chat-Us',
    description:'Built a real-time chat application using the MERN stack, featuring WebSocket integration for seamless live messaging. Implemented secure user authentication with JWT and optimized MongoDB schemas for handling large chat data. Focused on responsive design and cross-platform compatibility.',
    link:'https://github.com/mohammedsuhail364/Chat-Us'
  },
  {
    iconUrl:QRCodeGenerator,
    theme:'btn-back-green',
    name:'QR Generator',
    description:'Developed a QR code generator using React, leveraging a QR code generation API for dynamic code creation. Implemented a user-friendly interface with real-time QR code generation, ensuring smooth and responsive performance.',
    link:'https://mohammedsuhail364.github.io/Qr_code_generator/'
  },
  {
    iconUrl:weather,
    theme:'btn-back-yellow',
    name:'Weather App',
    description:'Created a weather app using React and integrated a weather API for real-time data. The app features a responsive design, providing users with accurate weather forecasts and conditions based on their location or input.',
    link:'https://mohammedsuhail364.github.io/weather_project/'
  },
  {
    iconUrl:snakeGame,
    theme:'btn-back-orange',
    name:'Snake Game',
    description:'Built a classic Snake game using HTML, CSS, and JavaScript, featuring smooth controls and responsive gameplay. The game offers an intuitive user interface with dynamic movement and real-time score tracking. Optimized for performance across various devices, providing an engaging and nostalgic experience.',
    link:'https://mohammedsuhail364.github.io/SnakeGame/',
  },
  {
    iconUrl:memoryGame,
    theme:'btn-back-pink',
    name:'Memory Game',
    description:'Developed a memory game using HTML, CSS, and JavaScript, designed to challenge players recall skills. The game features dynamic card flipping, random shuffling, and smooth animations for an engaging user experience. Implemented score tracking and responsive design, ensuring compatibility across devices.',
    link:'https://mohammedsuhail364.github.io/MemoreGame/',
  },

]