import BackendIcon from "@/Icons/Backend";
import Cursor from "@/Icons/cursor";
import { motion } from "motion/react";

export default function AboutMe() {
    return (
        <>
            <motion.div id="about" className="bg-black w-screen min-h-screen sm:px-28 flex px-36 flex-col justify-center items-center gap-20 lg:gap-0">
                <div className=" rounded-3xl w-xs xl:w-7xl md:w-3xl sm:w-xl xs:w-sm h-[600px] mt-20">
                    <div className="text-white pl-20 pt-12 md:text-5xl text-4xl font-bold flex gap-2">
                        <div>About </div><div className="text-blue-500">Me</div>
                    </div>
                    <div className="flex justify-between items-center mt-10 px-12 gap-4">
                        <motion.div
                            whileHover={{ y: [30, -30, 30], transition: { repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" } }}
                            animate={{ y: 0 }}
                            className="lg:size-80 hidden lg:flex lg:flex-col justify-center"
                        >
                            <img src="/Portfolio/dev5.png" alt="Developer" width={300} height={300} className="w-full h-auto" />
                        </motion.div>

                        <div className="flex flex-col gap-10 text-white md:text-xl ">
                            <motion.div whileHover={{scale:1.1}} className="cursor-pointer border border-gray-500 rounded-2xl px-2 py-2 flex justify-start items-center gap-5">
                                <div className=""><Cursor /></div>
                                <div>
                                    <motion.div whileHover={{color:"#4299e1"}} className="font-bold"> Frontend Developer</motion.div>
                                    <div>I build clean, optimized and responsive websites with modern design and features.</div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{scale:1.1}} className="cursor-pointer border border-gray-500 rounded-2xl px-2 py-2 flex justify-start items-center gap-5">
                                <div><BackendIcon /></div>
                                <div>
                                    <div className="font-bold"> Backend Developer</div>
                                    <div>I have experience working in backend frameworks like Node.Js and creating APIs</div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{scale:1.1}} className="cursor-pointer border border-gray-500 rounded-2xl px-2 py-2 flex justify-start items-center gap-5">
                                <div className="md:size-8 size-12">
                                    <img src="/Portfolio/docker2.svg" alt="Docker" width={50} height={50} className="w-full h-auto" />
                                </div>
                                <div>
                                    <div className="font-bold"> DevOps</div>
                                    <div>I have experience working with DevOps tools.</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
