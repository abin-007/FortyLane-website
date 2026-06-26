import { Link } from "react-router-dom";

export default function Footer(){
    return(
<footer className="bg-gray-900 text-white py-12 ">

    <div className="max-w-7xl mx-auto px-6">
        <div className=" grid grid-colos-1 md:grid-colos-4 gap-10">
            {/* Company */}
            <div>
                <h3 className="text-2xl font-bold text-blue-400">
                    FortyLane
                </h3>
                <p className="mt-4 text-gray-400" >
                     Build modern software products faster
                </p>
            </div>

            {/* Product */}
            <div>
                <h4 className="font-semibold mb-4" >
                    FortyLane

                </h4>

                <ul className="space-y-2 text-gray-400">
                    <li>
                         <a href="#features">Features</a>
                         {/* <Link 
                         to= "/about"
                         className=" hover:text-white transition-colors"
                         >
                            About
                         
                         </Link> */}
                    </li>
                    <li>
                         <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Integrations</a>
                    </li>


                </ul>
            </div>

            {/* Company */}
            <div>
                <h4 className="font-semibold mb-4" >
                    Arlanto

                </h4>

                <ul className="space-y-2 text-gray-400">
                    <li>
                         {/* <a href="#">About</a> */}
                         <Link 
                         to= "/about"
                         className=" hover:text-white transition-colors"
                         >
                            About
                         
                         </Link>
                    </li>
                    <li>
                         <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>


                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-semibold mb-4">
                    Contact
                </h4>
                <ul className=" space-y-2 text-gray-400">
                    <li>info@arlanto.com</li>
                    <li> +91 9876543210</li>
                    <li>Bangalore, India</li>

                </ul>
            </div >



        </div>
        {/* BottomBar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
             © 2026 FortyLane. All rights reserved.
        </div>
    </div>
</footer>

    );
}