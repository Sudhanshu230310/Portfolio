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
        animate={{ display: "none", transition: { duration: 4, ease: "easeOut" } }}
      >
        <TypewriterLine text="Full Stack Developer | DevOps" />
          
      </motion.div>
      <motion.div initial={{ display: "none" }} animate={{ display: "block", transition: { delay: 4,duration:0.5,ease:"easeIn" } }}>
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
  const container = {
    hidden: { opacity: 1 },      
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

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
      className="md:text-4xl text-white text-2xl font-semibold flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {Array.from(text).map((char, i) => (
        <motion.span key={i} variants={child}>
          {/* @ts-ignore */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};