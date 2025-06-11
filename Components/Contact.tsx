import EmailIcon from "@/Icons/Email";
import GitHubLogo from "@/Icons/Github";
import LinkedinIcon from "@/Icons/Linkedin";
import {motion} from "motion/react"
export default function Contact(){
    return<>
            <motion.div id="contact" className="border-1 border-t-gray-400 flex lg:justify-between justify-center items-center lg:px-34 bg-gray-200">
                <div className="lg:block hidden font-bold text-lg">Feel free to reach out at (+91)7568789084</div>
                <div className="flex justify-center gap-4 items-center">
                    <div><a target="_blank" href="mailto:2023meb1387@iitrpr.ac.in"><EmailIcon/></a></div>
                    <div><a target="_blank" href="https://www.linkedin.com/in/sudhanshu-394271297/"><LinkedinIcon/></a></div>
                    <div><a target="_blank" href="https://github.com/Sudhanshu230310"><GitHubLogo/></a></div>
                </div>
             </motion.div>
    </> 
}