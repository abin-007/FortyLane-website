import { useNavigate } from "react-router-dom";


export default function Hero() {
    const navigate= useNavigate()
    return (
        <section className=" pt-24 bg-gradient-to-b from-blue-50 to-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* left */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                       FortyLane
                    </h1>


                    <p className="mt-6 text-lg text-gray-600">
                        A modern, responsive, and production-ready SaaS landing page starter.
                    </p>

                    <div className="mt-8 flex gap-4 justify-center md:justify-start">
                        <button 
                        onClick={()=>navigate('/contact')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" >
                            Get Started
                        </button>
                        <button
                        onClick={()=>navigate('/about')}
                        
                        className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="flex-1">
                    <div className="bg-white shadow-xl rounded-2xl p-6">
                        <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                            Product Screenshot
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}