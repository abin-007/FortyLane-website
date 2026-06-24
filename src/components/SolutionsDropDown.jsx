
import {Link} from "react-router-dom";
import modulesConfig from "../data/ModulesConfig";

export default function SolutionsDropDown({modules}) {
    //grid-cols-3 && w-[720px]
    return (
        <div
            role="menu" className="
             absolute top-full left-1/2 mt-0
             -translate-x-1/2
            w-[900px]
            
            rounded-2xl
             border border-gray-200
            bg-white
            shadow-xl
            p-6
            z-50"
        >
            <div className=" grid  grid-cols-4 gap-3">
                {modulesConfig.map((module) => (
                    <Link 
                    key={module.id}
                         to={`/solutions/${module.id}`}
                        //to ={'/solutions/${module.id}'}
                        
                        className="
                        group
                        flex items-center justify-between
                        rounded-xl
                        px-4 py-3
                        transition-all duration-200
                        hover:bg-blue-50
                        "


                    >
                        <span
                            className=" font-medium text-gray-700 group-hover:text-blue-600"
                        >
                            {module.id}
                        </span>
                        <span
                            className=" opacity-0
                            translate-x-0
                            transition-all duration-200
                            group-hover:opacity-100
                            group-hover:translate-x-1
                            text-blue-600 ">
                            →
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}