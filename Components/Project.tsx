import {motion} from "motion/react"
export default function Projects(){
    return<>
        < motion.div id="project" className="bg-black w-screen min-h-screen sm:px-28 flex flex-col justify-center items-center gap-20 lg:gap-0">
            <div className=" h-[650px] bg-gray-800 rounded-3xl xl:w-7xl md:w-3xl sm:w-xl w-xs mt-12 flex flex-col px-4 py-4">
                <div className="xs:text-4xl text-3xl font-bold text-white pl-4 sm:pl-12 pt-8 pb-8 flex items-center gap-2">Projects <div className=" lg:hidden text-sm translate-y-8 -translate-x-31">(right scroll for more)</div></div>
                <div className=" w-full h-full lg:grid lg:grid-cols-3 flex lg:gap-6 gap-2 text-white overflow-auto">
                    <div className="h-full w-full border border-gray-600 rounded-2xl px-3 pt-4 bg-black shrink-0 flex flex-col overflow-auto">
                        <div className="w-full"><img className="rounded-2xl" src="/Hospital.avif" alt="" /></div>
                        <div className="xs:text-3xl text-2xl pt-3 px-1 font-bold">Hospital Management</div>
                        <div className="text-md pt-1 px-1">The Hospital Management System (HMS) is a robust, web-based solution designed to manage the comprehensive operations of a hospital or clinic. This system aims to streamline and digitize the administrative, clinical, and financial functions of a healthcare facility, improving efficiency, reducing errors, and enhancing the overall quality of patient care.
                        The primary objective of the Hospital Management System is to provide a centralized platform that automates the manual processes involved in hospital administration. It reduces the burden on staff, enables better resource utilization, and ensures quick and secure access to patient data.
                        </div>

                        <div className="py-3">
                            
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl">React</button>
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 ml-2">JavaScript</button>
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 ml-2">MongoDb</button>
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 xs:ml-2 ml-0">Express</button>
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl mt-2 mb-4 lg:ml-0 ml-2">Redux</button>
                        </div>
                        
                    </div>
                    <div className="h-full w-full border border-gray-600 rounded-2xl px-3 pt-4 bg-black shrink-0 flex flex-col overflow-auto">
                        <div className="w-full"><img className="rounded-2xl" src="/Checkers.jpg" alt="" />
                        </div>
                        <div className="xs:text-3xl text-2xl pt-3 px-1 font-bold">Checkers Game</div>
                        <div className="text-md pt-1 px-1">This project is a complete software simulation of the classic Checkers (or Draughts) board game, developed as part of a Data Structures and Algorithms (DSA) course. It aims to merge the theoretical foundations of DSA with a practical, interactive application. The primary focus is on designing the game engine using efficient data structures and algorithms to handle the rules of the game, player interaction, and game state management. This project enhances understanding of DSA concepts through real-world implementation and provides a robust foundation for further enhancements such as AI opponents or GUI development.
                        </div>
                        <div className="py-3">
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl">Trees</button>
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 mx-2">C++</button>
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl mb-4">Classes</button>
                            
                        </div>
                    </div>
                    <div className="h-full w-full border border-gray-600 rounded-2xl px-3 pt-4 bg-black shrink-0 flex flex-col overflow-auto">
                        <div className="w-full"><img className="rounded-2xl" src="/taxi.png" alt="" />
                        </div>
                        <div className="xs:text-3xl text-2xl pt-3 px-1 font-bold">Taxi Booking Software</div>
                        <div className="text-md pt-1 px-1">Designed a pc software for handling cab bookings desk in our college's fests. It has the user mode as well as the admin mode to view the booked , available cabs and passenger details who have booked the cabs. Used C++ for the backend and database for storing the data. Applied OOPs concepts and Data Structures for the efficient working of the software.
                        </div>
                        <div className="py-3">
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl">Trees</button>
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl lg:ml-2 mt-2 mx-2">C++</button>
                            <button className="border border-gray-500 px-2 py-1 rounded-2xl mb-4">Classes</button>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        
        
        
        </motion.div>

    </>
}

