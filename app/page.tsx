"use client";
import { motion } from "motion/react";
import NavBar from "@/Components/Navbar";
import Main from "@/Components/Main";
import AboutMe from "@/Components/About";
import Skills from "@/Components/Skill";
import Projects from "@/Components/Project";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <>
      <motion.div
        className="w-screen h-screen bg-black flex justify-center items-center"
        initial={{ visibility: "visible" }}
        animate={{ display: "none", transition: { duration: 2, ease: "easeInOut" } }}
      >
        <motion.div
          className="md:text-4xl text-xl font-semibold text-white"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 2,ease:"easeOut" } }}
        >
          Full Stack Developer | DevOps
        </motion.div>
      </motion.div>
      <motion.div initial={{ display: "none" }} animate={{ display: "block", transition: { delay: 2,ease:"easeIn" } }}>
        <NavBar />
        <Main />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </>
  );
}


const TypewriterLine = ({ text }:{text:string}) => {
  // container controls the stagger timing
  const container = {
    hidden: { opacity: 1 },         // keep container visible
    visible: {
      opacity: 1,
      transition: {
        // delay before we start
        delayChildren: 0.5,
        // time between each letter
        staggerChildren: 0.1,
      },
    },
  };

  // child controls each letter’s animation
  const child = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="md:text-4xl text-xl font-semibold text-white flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {Array.from(text).map((char, i) => (
        // use non‑breaking space for actual spaces
        <motion.span key={i} variants={child}>
          {/* @ts-ignore */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};