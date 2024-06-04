import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const mdme =
  "https://raw.githubusercontent.com/BinaryArtist1/portfolio/master/app/assets/mdme.png";
const teachwithkoala =
  "https://raw.githubusercontent.com/BinaryArtist1/portfolio/master/app/assets/teachwithkoala.png";
const trykopia =
  "https://raw.githubusercontent.com/BinaryArtist1/portfolio/master/app/assets/trykopia.png";
const literati =
  "https://raw.githubusercontent.com/BinaryArtist1/portfolio/master/app/assets/literati.png";
const mainstreetdata =
  "https://raw.githubusercontent.com/BinaryArtist1/portfolio/master/app/assets/mainstreetdata.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const projectsData = [
  {
    title: "Teach with Koala",
    description: "E-learning video room for kids - Goodbye Zoom Boredom👋🏻",
    tags: [
      "Year 2023",
      "React",
      "Express",
      "TypeScript",
      "BabylonJS",
      "PostgreSQL",
    ],
    link: "https://www.teachwithkoala.com/",
    imageUrl: teachwithkoala,
  },
  // {
  //   title: "Work Experince at Rolleston College",
  //   description:
  //     "I did a full year of work experience with Rolleston College's IT guy it tought me alot and helped me with my people skills",
  //   tags: ["Year 2023"],
  //   link: "https://rollestoncollege.nz",
  //   imageUrl: youneedaimange,
  // },
  {
    title: "Try Kopia",
    description:
      "B2B E-commerce Saas Virtual Clothes Try-on - See yourself in clothes you like",
    tags: ["Year 2022", "React", "Django", "ThreeJS", "SageMaker", "CNN"],
    link: "https://trykopia.com/",
    imageUrl: trykopia,
  },
  {
    title: "Literati",
    description: "The kids book club for remarkable readers - from scratch",
    tags: [
      "Year 2021",
      "React",
      "Next",
      "WordPress",
      "Express",
      "MongoDB",
      "SEO",
    ],
    link: "https://literati.com/",
    imageUrl: literati,
  },
  {
    title: "Mainstreetdata",
    description:
      "Unlimited Access to Large Database of Companies Worldwide. Start reviewing now!",
    tags: ["React", "React Charts", "Express", "PostgreSQL"],
    link: "https://mainstreetdata.com/TSLA?tab=Dashboard",
    imageUrl: mainstreetdata,
  },

  {
    title: "MD and ME",
    description:
      "AI symptom checker based on OpenAI API endpoints - Fine tuned over ten thousands of medical data",
    tags: ["React", "React Native", "Django", "OpenAI", "MySQL"],
    link: "https://mdme.ai/chat",
    imageUrl: mdme,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "React Native",
  "Vue",
  "Angular",
  "NodeJS",
  "Express",
  "Nest",
  "ThreeJS",
  "WebGL",
  "Python",
  "Django",
  "Flask",
  "SQLAlchemy",
  "AWS",
  "Firebase",
] as const;

export const osdata = [
  "Linux Servers",
  "Linux Clients",
  "Windows Server",
  "Windows Clients",
] as const;

export const pskillsData = [
  "Good Problem Solving",
  "Startup Enthusiast",
  "Solid Work Ethic",
  "Willing to learn",
] as const;
