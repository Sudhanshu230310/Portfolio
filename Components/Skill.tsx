import AwsLogo from "@/Icons/Aws"
import CppLogo from "@/Icons/Cpp"
import CssLogo from "@/Icons/Css"
import DockerLogo from "@/Icons/Docker"
import FigmaLogo from "@/Icons/Figma"
import GitHubLogo from "@/Icons/Github"
import HtmlLogo from "@/Icons/Html"
import JavaScript from "@/Icons/Javascript"
import K8s from "@/Icons/K8s"
import Nextjs from "@/Icons/Nextjs"
import NodejsLogo from "@/Icons/Nodejs"
import PostgressLogo from "@/Icons/Postgress"
import ReactLogo from "@/Icons/React"
import TurboIcon from "@/Icons/Turbo"
import { motion} from "motion/react"


// bg-gray-800 rounded-3xl xl:w-7xl md:w-3xl sm:w-xl w-sm h-[600px] mt-20
export default function Skills(){
    return<>
        < motion.div id="skill" className=" w-screen min-h-screen pt-10 sm:px-28 flex flex-col justify-center items-center sm:items-start lg:gap-0 bg-black">
            <div className="md:text-5xl text-4xl font-bold text-white mt-20 flex gap-2 sm:pl-12 bg-black"><div className="text-blue-500">My</div><div>Skills</div></div>
            <div className=" h-[650px] rounded-3xl xl:w-7xl md:w-3xl sm:w-xl xs:w-sm w-xs mt-6 pt-6 overflow-y-auto overscroll bg-black"> 
                <div className="flex sm:justify-start justify-center gap-x-10 sm:gap-x-28 sm:gap-y-10 gap-y-6 sm:pl-12 xs:text-xl text-lg flex-wrap pb-4 ">
                    <motion.div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <HtmlLogo/>
                        </div>
                        <div className="text-white pt-1">HTML</div>
                    </motion.div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <CssLogo/>
                        </div>
                        <div className="text-white pt-1">CSS</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <JavaScript/>
                        </div>
                        <div className="text-white pt-1">JavaScript</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <ReactLogo/>
                        </div>
                        <div className="text-white pt-1">React</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <NodejsLogo/>
                        </div>
                        <div className="text-white pt-1">Node.js</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <Nextjs/>
                        </div>
                        <div className="text-white pt-1">Next</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <PostgressLogo/>
                        </div>
                        <div className="text-white pt-1">Postgress</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <CppLogo/>
                        </div>
                        <div className="text-white pt-1">Cpp</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <K8s/>
                        </div>
                        <div className="text-white pt-1">K8s</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <DockerLogo/>
                        </div>
                        <div className="text-white pt-1">Docker</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <GitHubLogo/>
                        </div>
                        <div className="text-white pt-1">GitHub</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <AwsLogo/>
                        </div>
                        <div className="text-white pt-1">Aws</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <FigmaLogo/>
                        </div>
                        <div className="text-white pt-1">Figma</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border rounded-full bg-white w-24 h-24 flex justify-center items-center">
                            <TurboIcon/>
                        </div>
                        <div className="text-white pt-1">Turborepo</div>
                    </div>
                        
                </div>
            </div>
        </motion.div>
    </>
}