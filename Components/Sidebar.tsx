import CloseLogo from "@/Icons/Close";
import { ReactElement } from "react";
import { Link } from "react-scroll";

export default function SideBar({close,open}:{close:React.Dispatch<React.SetStateAction<boolean>>,open:boolean}){
    return<>
        <div className="md:hidden h-screen w-64 z-1000 bg-black text-white fixed right-0 flex flex-col">
            <div>
                <div onClick={()=>close(!open)} className="translate-x-54 justify-end pr-4 pt-4 cursor-pointer inline-block"><CloseLogo/>
                </div>
            </div>
            <div className="pt-8 text-lg px-4 flex flex-col gap-4">
                <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
                    <div onClick={()=>close(!open)} className="border hover:bg-gray-600 border-gray-700 pl-2 rounded-2xl cursor-pointer">About</div>
                </Link>
                
                <Link to="skill" spy={true} smooth={true} offset={0} duration={500}>
                   <div onClick={()=>close(!open)} className="border border-gray-700 pl-2 hover:bg-gray-600 rounded-2xl cursor-pointer">Skills</div>
                </Link>

                <Link to="project" spy={true} smooth={true} offset={0} duration={500}>
                    <div onClick={()=>close(!open)} className="border border-gray-700 pl-2 hover:bg-gray-600 rounded-2xl cursor-pointer">Projects</div>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                    <div onClick={()=>close(!open)} className="border border-gray-700 pl-2 hover:bg-gray-600 rounded-2xl cursor-pointer">Contact</div>
                </Link>
            </div>
            
        </div>
    </>
}