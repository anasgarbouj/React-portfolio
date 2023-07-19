import {
  mobile,
  backend,
  creator,
  Symfony,
  etixway,
  agstn,
  fama,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  Angular,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: web,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "Symfony",
    icon: Symfony,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "",
    icon: Angular,
    iconBg: "#383E56",
    date: "Currently",
    points: [
      "As a freelance Full Stack Developer, I specialize in the MEAN (MongoDB, Express.js, Angular, and Node.js) and MERN (MongoDB, Express.js, React.js, and Node.js) stacks. I am adept at delivering efficient web applications with a keen eye for detail, readability, and maintainability. I continuously update my skills to ensure the provision of modern and robust solutions to clients.",
    ],
  },
  {
    title: "Intern ReactJs Developer",
    company_name: "Etixway Paris France",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2023",
    points: [
      "As an Intern at Etixway France, I am using ReactJS to help build a dashboard tailored to the company's unique needs.  This involves designing and optimizing user interface components, managing application state with Redux, andconducting thorough testing to ensure code quality. This role is enhancing my technical skills and business acumen through practical application in a professional setting.",
    ],
  },
  {
    title: "TGS (Tunisian Game Show) Hackathon ",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "I'm thrilled to showcase our team's exceptional achievement in the TGS Hackathon, where we secured the first place. This remarkable experience allowed me to contribute to the development of a gaming website using the MERN stack, further honing my technical skills and problem-solving abilities. Throughout the hackathon, I actively engaged in collaborative teamwork, effectively communicating with my teammates and fellow participants. Networking and connecting with individuals who share a similar passion for technology and gaming was a valuable aspect of this experience. Being part of the winning team not only validates my capabilities but also highlights my commitment to excellence and continuous learning. I am excited to leverage the skills and connections gained from this achievement to contribute effectively and thrive in future professional endeavors.",
    ],
  },
  {
    title: "NMTC (National Microsoft Tunisian Camp) Hackathon ",
    company_name: "",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Mars 2023",
    points: [
      "Participated in the NMTC Hackathon, exploring the transformative potential of blockchain technology.      ",
      "Collaborated with a team to develop a project showcasing the real-world applications of blockchain.      ",
      "Expanded knowledge of blockchain and its innovative possibilities.      ",
      "Secured the third place in the competition, highlighting dedication and adaptability.      ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the opportunity to work with Anas as a freelance Angular developer, and I can only express my complete satisfaction. Anas demonstrated rapid comprehension and solid technical expertise throughout the project. He was able to transform our ideas into a functional and visually appealing website. His attention to detail, professionalism, and commitment to quality far exceeded our expectations. He proved to be attentive, available, and always brought creative solutions to our problems. I highly recommend Anas to anyone looking for a competent and reliable Angular developer.",
    name: "Ahmed El Mehri",
    designation: "Information Security Engineer",
    company: "ITS Services",
    image: "",
  },
  
  
];

const projects = [
  {
    name: "Africa Game Show",
    description:
      "Web-based platform that allows users to book a place for the bigest event in tunisia africa game show and to know more about the event",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs(express)",
        color: "pink-text-gradient",
      },
    ],
    image: agstn,
    source_code_link: "https://agstn.netlify.app/.",
  },
  {
    name: "Etixway Dashboard",
    description:
      "During my internship, I contributed to creating a user-friendly dashboard for the company. This tool allows admins to add new users, while also enabling users to track their progress through visual charts. It has simplified data interpretation, improved transparency, and helped foster continuous improvement within the organization",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
     
      {
        name: "nodejs(express)",
        color: "blue-text-gradient",
      },
     
    ],
    image: etixway,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fama",
    description:
      "I am currently working on the development of an innovative platform, fama.tn, intended to revolutionize the job market in Tunisia. This website aims to bridge the gap between job seekers and employers by providing a comprehensive, accessible platform for both parties",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs(express)",
        color: "pink-text-gradient",
      },
    ],
    image: fama,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
