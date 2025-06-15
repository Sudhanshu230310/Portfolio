"use client"
import Menu from "@/Icons/Menu"
import {motion} from "motion/react"
import { useState } from "react"
import { Link } from 'react-scroll'
import SideBar from "./Sidebar"

export default function NavBar(){

    const[Open,setopen]=useState(false);
    function open(){
        setopen(true);
    }

    return<>
        {Open && <SideBar close={setopen} open={Open}/>}
        <div className="z-999 w-screen h-16 bg-black text-white flex justify-between items-center md:px-28 py-6 px-10 fixed border-b border-b-gray-600">
            <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1,transition:{duration:1,delay:2,}}} className="md:text-2xl font-serif text-xl cursor-pointer"><Link to="main" spy={true} smooth={true} offset={0} duration={500}>
                        Portfolio
                    </Link></motion.div>
            <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1,transition:{duration:1,delay:2}}} className="md:flex justify-center items-center gap-6 font-semibold hidden">
                <motion.div whileHover={{ scale:1.1,color:"#40B5AD" }} className="cursor-pointer">
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
                        About
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale:1.1,color:"#40B5AD" }}  className="cursor-pointer">
                    <Link to="skill" spy={true} smooth={true} offset={0} duration={500}>
                        Skills
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale:1.1,color:"#40B5AD" }}  className="cursor-pointer">
                   <Link to="project" spy={true} smooth={true} offset={0} duration={500}>
                        Projects
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale:1.1,color:"#40B5AD" }}  className="cursor-pointer">
                   <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                        Contact
                    </Link>
                </motion.div>
                <div className="md:hidden block text-white cursor-pointer">
                    <Menu/>
                </div>
            </motion.div>
            <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1,transition:{duration:1,delay:2}}} className="font-extralight md:hidden cursor-pointer text-white">
                <div onClick={open} className="">
                    <Menu/>
                </div>
            </motion.div>
        </div>
    </>
}