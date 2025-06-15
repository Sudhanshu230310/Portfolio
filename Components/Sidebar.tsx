import CloseLogo from "@/Icons/Close";
import { Link } from "react-scroll";
import {motion} from "motion/react"

export default function SideBar({close,open}:{close:React.Dispatch<React.SetStateAction<boolean>>,open:boolean}){
    return<>
        <motion.div initial={{x:64}} animate={{x:0, transition:{type: 'spring',
        stiffness: 100,
        damping: 10,duration:0.5}}} className="md:hidden h-screen w-64 z-1000 bg-black text-white fixed right-0 flex flex-col">
            <div>
                <div onClick={()=>close(!open)} className="translate-x-54 justify-end pr-4 pt-4 cursor-pointer inline-block"><CloseLogo/>
                </div>
            </div>
            <div className="pt-8 text-lg px-4 flex flex-col gap-4">
                <Link to="main" spy={true} smooth={true} offset={0} duration={500}>
                    <motion.div whileHover={{scale:1.1}} onClick={()=>close(!open)} className=" hover:text-blue-500 pl-2 cursor-pointer">Home</motion.div>
                    <div className="border-b border-gray-700 pt-1"></div>
                </Link>
                <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
                    <motion.div whileHover={{scale:1.1}} onClick={()=>close(!open)} className=" hover:text-blue-500 pl-2 cursor-pointer">About</motion.div>
                    <div className="border-b border-gray-700 pt-1"></div>
                </Link>
                
                <Link to="skill" spy={true} smooth={true} offset={0} duration={500}>
                   <motion.div whileHover={{scale:1.1}} onClick={()=>close(!open)} className=" pl-2 hover:text-blue-500 cursor-pointer">Skills</motion.div>
                   <div className="border-b border-gray-700 pt-1"></div>
                </Link>

                <Link to="project" spy={true} smooth={true} offset={0} duration={500}>
                    <motion.div whileHover={{scale:1.1}} onClick={()=>close(!open)} className=" pl-2 hover:text-blue-500 cursor-pointer">Projects</motion.div>
                    <div className="border-b border-gray-700 pt-1"></div>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                    <motion.div whileHover={{scale:1.1}} onClick={()=>close(!open)} className=" pl-2 hover:text-blue-500 cursor-pointer">Contact</motion.div>
                    <div className="border-b border-gray-700 pt-1"></div>
                </Link>
            </div>
            
        </motion.div>
    </>
}