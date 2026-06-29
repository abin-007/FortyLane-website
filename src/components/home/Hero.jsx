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
                        A unified security management platform for guarding operations, incident tracking, access control,
                    </p>

                    <div className="mt-8 flex gap-4 justify-center md:justify-start">
                        <button 
                        onClick={()=>navigate('/contact')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" >
                            Request Demo
                        </button>
                        <button
                        onClick={()=>navigate('/about')}
                        
                        className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                           Explore Platform
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="flex-1">
                    <div className="bg-white shadow-xl rounded-2xl p-8">
                         <img
                            src="/src/assets/images/fortylane_logo.png"
                            alt="FortyLane Dashboard"
                            className="h-94 w-full object-cover rounded-xl"
                            />
                    </div>
                </div>

            </div>

        </section>
    );
}