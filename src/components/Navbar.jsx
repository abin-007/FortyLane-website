import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SolutionsDropDown from "./SolutionsDropDown";
import { solutions } from "../data/solutions";



export default function Navbar() {
    const [showSolutions, setShowSolutions] = useState(false)
    
    const navigate = useNavigate()

    
    return (
        <nav className=" 
        fixed top-0 left-0 w-full
        z-50
        bg-white/80
        backdrop-blur-md
        border-b border-gray-200
         
         " >
            <div
               
                className=" max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"


            >
                <button
                    onClick={() => navigate("/")}
                    className="text-2xl font-bold text-blue-600">
                    FortyLane
                </button>
                {/* <h1 className="text-2xl font-bold text-blue-600 cursor pointer">
                    FortyLane
                </h1> */}

                <ul className="hidden lg:flex gap-8 item-center  " >
                     <li>
                        <a href="#about" onClick= {()=> navigate("/about")} >About</a>

                    </li>
                    <li>
                        <a href="#features">Features</a>

                    </li>
                    
                    <li>
                        <a href="#pricing">Pricing</a>

                    </li>


                    <li
                        className="relative"
                        onMouseEnter={() => setShowSolutions(true)}
                        onMouseLeave={() => setShowSolutions(false)}

                    >
                        <button className="cursor-pointer hover:text-blue-600" >
                            Solutions <span>▾</span>
                        </button>
                        {showSolutions && (
                            <SolutionsDropDown modules={solutions} />
                        )}


                    </li>
                    <li>
                        <a href="#faq">
                            FAQ

                        </a>
                    </li>
                </ul>

                <button
                    onClick={() => navigate("/contact")}

                    className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700" >
                    Get Started
                    </button>



            </div>

        </nav>
    );
}