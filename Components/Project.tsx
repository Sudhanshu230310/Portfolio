import { motion } from "motion/react"

export default function Projects() {
    return (
        <>
            <motion.div id="project" className=" w-screen min-h-screen  bg-black flex flex-col justify-center items-center gap-20 lg:gap-0">
                <div className="h-[650px] px-10 sm:px-16 rounded-3xl xl:w-7xl w-full mt-12 flex flex-col  py-4 bg-black">
                    <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1, transition:{duration:2}}} className="sm:text-5xl text-4xl font-bold text-white pl-2 md:pt-8 md:pb-8 flex gap-2 flex-col pt-4 pb-2 ">
                        <div className="w-full flex gap-2"><div className="text-blue-500">My</div><div>Projects</div></div>
                        <div className="lg:hidden text-sm">(right scroll for more)</div>
                    </motion.div>
                    <div className="w-full h-full lg:grid lg:grid-cols-3 flex lg:gap-6 gap-2 text-white overflow-auto ">

                        {/* Project 1 */}
                        <div className="h-full w-full border border-gray-600 rounded-2xl px-3 pt-6 bg-neutral-900 shrink-0 flex flex-col overflow-auto">
                            <motion.div whileHover={{scale:1.1}} className="w-full">
                                <img
                                    className="rounded-2xl"
                                    src="/Portfolio/checkers.png"
                                    alt="Checkers Game"
                                    width={900}
                                    height={500}
                                />
                            </motion.div>
                            <motion.div className="xs:text-3xl text-2xl pt-6 px-1 font-bold">
                                <motion.span whileHover={{scale:1.05,color:"#3b82f6" }} className="cursor-pointer">Checkers Game</motion.span>
                            </motion.div>
                            <div className="text-md pt-2 px-1">
                                This project is a complete software simulation of the classic Checkers (or Draughts) board game, developed as part of a Data Structures and Algorithms (DSA) course. It aims to merge the theoretical foundations of DSA with a practical, interactive application. The primary focus is on designing the game engine using efficient data structures and algorithms to handle the rules of the game, player interaction, and game state management. This project enhances understanding of DSA concepts through real-world implementation and provides a robust foundation for further enhancements such as AI opponents or GUI development.
                            </div>
                            <div className="py-3">
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl">Trees</button>
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 mx-2">C++</button>
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl mb-4">Classes</button>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="h-full w-full border border-gray-600 rounded-2xl px-3 pt-6 bg-neutral-900 shrink-0 flex flex-col overflow-auto">
                            <motion.div whileHover={{scale:1.1}} className="w-full">
                                <img
                                    className="rounded-2xl"
                                    src="/Portfolio/hospital1.png"
                                    alt="Hospital Management"
                                    width={900}
                                    height={500}
                                />
                            </motion.div>
                            <motion.div className="xs:text-3xl text-2xl pt-6 px-1 font-bold">
                                <motion.span whileHover={{scale:1.05,color:"#3b82f6" }} className="cursor-pointer">CLININTEL</motion.span>
                            </motion.div>
                            <div className="text-md pt-1 px-2">
                                The Hospital Management System is a responsive and user-friendly web application designed to streamline hospital operations with real-life applicability. Built with a modern tech stack, it efficiently stores and manages all essential data while offering a clean, intuitive UI for smooth user interaction. The system ensures fast performance, scalability, and practical utility for real-world healthcare needs.
                            </div>
                            <div className="py-3">
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl">React</button>
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 ml-2">JavaScript</button>
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 ml-2">MongoDb</button>
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 xs:ml-2 ml-0">Express</button>
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl mt-2 mb-4 lg:ml-0 ml-2">Redux</button>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="h-full w-full border border-gray-600 rounded-2xl px-3 pt-6 bg-neutral-900 shrink-0 flex flex-col overflow-auto">
                            <motion.div whileHover={{scale:1.1}} className="w-full">
                                <img
                                    className="rounded-2xl"
                                    src="/Portfolio/kd.png"
                                    alt="KD Tree Project"
                                    width={900}
                                    height={500}
                                />
                            </motion.div>
                            <motion.div  className="xs:text-3xl text-2xl pt-6 px-1 font-bold ">
                                <motion.span whileHover={{scale:1.05,color:"#3b82f6" }} className="cursor-pointer">KD Tree</motion.span>
                            </motion.div>
                            <div className="text-md pt-2 px-1">
                                C++, Data Structure and Algorithms, KD-Tree, KNN, Median of Medians – Implemented a KDTree in C++ to efficiently find the nearest k d-dimensional points to a specified d-dimensional point with an average time complexity of O(klogk*dlogn). – Achieved a creation time complexity of O(d*nlogn) from an array or vector using algorithms like Median of Medians. Priority Queue was used to perform the search of k Nearest Neighbour to a point.
                            </div>
                            <div className="py-3">
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl">C++</button>
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 mx-2">DSA</button>
                                <button className="border border-gray-500 px-2 py-1 rounded-2xl mb-4">Classes</button>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </>
    )
}
