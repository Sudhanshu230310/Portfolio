import BackendIcon from "@/Icons/Backend";
import Cursor from "@/Icons/cursor";
import {motion} from "motion/react";
export default function AboutMe(){
    return<>
        < motion.div id="about" className="bg-black w-screen min-h-screen sm:px-28 flex px-36 flex-col justify-center items-center gap-20 lg:gap-0">
            <div className="bg-gray-800 rounded-3xl w-xs xl:w-7xl md:w-3xl sm:w-xl xs:w-sm h-[600px] mt-20">
                <div className="text-white pl-12 pt-12 md:text-4xl text-3xl font-bold">
                    About
                </div>
                <div className="flex justify-between items-center mt-10 px-12 gap-4">
                    <motion.div whileHover={{y:[30,-30,30],transition:{repeat:Infinity,repeatType:"reverse",duration:2,ease:"easeInOut"}}} animate={{y:0}} className="md:size-80 hidden md:flex md:flex-col justify-center"><img src="/dev5.png"></img></motion.div>
                    <div className="flex flex-col gap-10 text-white md:text-xl overflow-auto">
                        <div className="cursor-pointer flex justify-start items-center gap-5">
                            <div><Cursor/></div>
                            <div><div className="font-bold"> Frontend Developer</div>
                            <div>I build clean, optimized and responsive websites with modern design and features.</div></div>
                        </div>
                        <div className="cursor-pointer flex justify-start items-center gap-5">
                            <div><BackendIcon/></div>
                            <div><div className="font-bold"> Backend Developer</div>
                            <div>I have experience working in backend frameworks like Node.Js and creating APIs</div></div>
                        </div>
                        <div className="cursor-pointer flex justify-start items-center gap-5">
                            <div className="md:size-8 size-12"><img className="" src="docker2.svg" alt="" /></div>
                            <div><div className="font-bold"> DevOps</div>
                            <div>I have experience working with DevOps tools.</div></div>
                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
    </>
}