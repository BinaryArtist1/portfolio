import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const filmsite =
  "https://serv.husky.nz/peter-port/Screenshot_20231020_153230.png";
const hunzweather =
  "https://serv.husky.nz/peter-port/Screenshot_20231020_153931.png";
const gen6 = "https://serv.husky.nz/peter-port/Screenshot_20231020_185537.png";
const yoobe = "https://serv.husky.nz/peter-port/yoobe.png";
const teachwithkoala =
  "https://www.teachwithkoala.com/_next/image?url=%2Fimg%2Fhome%2Fkoala_go_screenshot_1.webp&w=1920&q=75";
const trykopia =
  "https://www.teachwithkoala.com/_next/image?url=%2Fimg%2Fhome%2Fkoala_go_screenshot_1.webp&w=1920&q=75";
const Spectrum = "https://serv.husky.nz/peter-port/Spectrum-website.png";

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
    title: "Spectrum's Website",
    description:
      "This is a very fun project to watch grow and I had the fun task of building the Website and running it on cloudflare. I also help with alot of backend stuff.",
    tags: ["Astro", "JSX", "Cloudflare"],
    link: "https://spectrum.liamsherwin.tech",
    imageUrl: Spectrum,
  },

  {
    title: "Yoobee Cyber Security Micro-credential",
    description: "I learnt a lot from this course.",
    tags: ["Year 2023", "Basic compute", "Kail Linux"],
    link: "https://landing.husky.nz",
    imageUrl: yoobe,
  },
  {
    title: "Rolleston College Film Club",
    description:
      "I worked with two other developers on building a website for our film club to help people get to know who we are.",
    tags: ["Year 2023", "Astro", "Tailwind", "CSS"],
    link: "https://filmclub.tech",
    imageUrl: filmsite,
  },
  {
    title: "HuskyNZ Weather",
    description:
      "For a school assignment, I made a small weather app that uses Flask and OpenWeather to be slim and lean. I'm looking to do a complete rewrite soon.",
    tags: ["Year 2023", "Flask", "Python", "Azure"],
    link: "https://landing.husky.nz",
    imageUrl: hunzweather,
  },

  {
    title: "HuskyNZ's Gen6 website",
    description:
      "While I don't use it anymore because I've switched to using Free Flarum, this was one of my first coding projects. It's not that great, and we don't really discuss why it's gen6",
    tags: ["Year 2022-2023", "Azure app service"],
    link: "https://landing.husky.nz",
    imageUrl: gen6,
  },
] as const;

export const skillsData = [
  "Azure",
  "AWS",
  "Microsoft 365",
  "Cloudflare",
  "Cloud Networking",
  "Databases",
  "Terrafom",
  "PowerShell",
  "NextJS",
  "ReactJS",
  "TailwindCSS",
  "Adobe Permiere Pro, Adobe Audition and Photoshop",
  "DaVinci Resolve",
] as const;

export const osdata = [
  "Linux Servers",
  "Linux Clients",
  "Windows Server",
  "Windows Clients",
] as const;

export const pskillsData = [
  "Good Problem Solving",
  "Efficient",
  "Positive Attitude",
  "Solid Work Ethic",
  "Willing to learn",
] as const;
