"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        Hey there! I'm Chris. Over the past seven years, I've been diving deep
        in the tech world, learning, experimenting, and creating. My journey
        started with mastering front-end technologies like HTML, CSS, and
        JavaScript, and evolved to include powerful frameworks such as React,
        Angular, and Vue.js. I graduated from a five-months bootcamp UI/UX
        course, which has equipped me with the skills to design intuitive user
        interfaces and translate designs to development stage more perfectly. On
        the back-end, I've developed robust applications using Node.js, Express
        and Django. I've worked extensively with databases like MySQL,
        PostgreSQL, and MongoDB, ensuring data integrity and seamless
        integration.
      </p>
      <p className="mt-10">
        My experience also spans DevOps practices, leveraging tools like Docker,
        Kubernetes, and Jenkins to streamline development and deployment
        processes. Recently, I've developed a keen interest in e-commerce and
        e-learning platforms, combining my technical skills with a passion for
        creating user-friendly and impactful digital experiences. When I'm not
        deep in code, I'm crafting websites like this one and continually
        learning new technologies. The future? It's a world of endless
        possibilities, and I'm excited to explore it!
      </p>
    </motion.section>
  );
}
