"use client"
import { motion } from "motion/react"
import AnimatedLine from "./MainSkill"

export default function Main() {
    return (
        <>
            <motion.div id="main" className="bg-black w-screen min-h-screen sm:px-28 px-2 flex flex-col justify-center gap-20 lg:gap-0">
                <div className="md:flex md:flex-row md:justify-between md:items-center flex-wrap-reverse flex flex-col-reverse justify-center items-center gap-6">
                    <div className="text-white md:flex md:flex-col md:items-start md:gap-8 flex flex-col items-center gap-4 mt-24">
                        <motion.div whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 2.5 } }} className="md:text-5xl font-bold text-4xl flex justify-center items-center pl-8 sm:pl-0 bg-gradient-to-r to-blue-500 from-white from-0% to-60% bg-clip-text text-transparent cursor-pointer">Hi, I'm Sudhanshu Gaur</motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 2.8 } }} className="md:text-xl text-xl flex justify-center items-center pl-10 md:pl-0 font-sans "><AnimatedLine/></motion.div>
                        <div className="text-xl">
                            <a target="_blank" href="mailto:2023meb1387@iitrpr.ac.in"><button className="border rounded-2xl cursor-pointer bg-blue-800 py-1 border-gray-400 px-3">Contact Me</button></a>
                            <a href="/Resume.pdf" download="Sudhanshu_2027_Resume"><button className="border cursor-pointer rounded-2xl bg-blue-800 py-1 border-gray-400 px-3 ml-6">Resume</button></a>
                        </div>
                    </div>
                    <motion.div animate={{ y: [0, -16, 0], transition: { repeat: Infinity, repeatType: "reverse", duration: 3, ease: "linear" } }} className="text-white md:w-72 md:h-72 rounded-full overflow-hidden w-60 h-60 justify-center items-center shadow-gray-600 shadow-lg border border-gray-700 md:mt-20 translate-y-8 md:-translate-y-4">
                        {/* <Person /> */}
                        <img  src="/Portfolio/profile3.jpeg" alt="Profile img" width={300} height={300} className="md:-translate-y-24 -translate-y-16 w-full h-auto" />
                    </motion.div>
                </div>

                <motion.div animate={{ y: [0, -16, 0], transition: { repeat: Infinity, repeatType: "reverse", duration: 3, ease: "linear" } }} className="xl:pl-10 xl:pt-0 xl:flex xl:justify-items-start xl:gap-96 xl:h-44 hidden mt-16">
                    <div className="w-10">
                        <img src="/Portfolio/vscode.svg" alt="VS Code" width={40} height={40} className="w-full h-auto" />
                    </div>
                    <div className="w-10 -translate-y-8">
                        <img src="/Portfolio/ts.svg" alt="TypeScript" width={40} height={40} className="w-full h-auto" />
                    </div>
                </motion.div>

                <motion.div animate={{ y: [0, -16, 0], transition: { repeat: Infinity, repeatType: "reverse", duration: 3, ease: "linear" } }} className="xl:pl-10 xl:flex xl:justify-items-start xl:gap-96 hidden">
                    <div className="w-10">
                        <img src="/Portfolio/react.svg" alt="React" width={40} height={40} className="w-full h-auto" />
                    </div>
                    <div className="w-12">
                        <img src="/Portfolio/docker.svg" alt="Docker" width={48} height={48} className="w-full h-auto" />
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
