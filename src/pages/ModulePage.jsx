
import { useParams } from "react-router-dom"
import modulesConfig from "../data/ModulesConfig";
import Navbar from "../components/Navbar";
import DemoRequestModal from "../components/DemoRequestModal";
import { useState } from "react";
//import ;
export default function ModulePage() {
    const [showDemoModal ,setShowDemoModal] = useState(false);
    const { moduleId } = useParams();
    const module = modulesConfig.find(
        (item) => item.id == moduleId
    );
    if (!module) {
        return (
            <div className="container mx-auto px-6 py-20">
                Module Not Found
            </div>
        );
    }
    return (

        <div className="bg-white">
            <Navbar />

            {/* Hero  */}

            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        {/* <span className="text-sm text-gray-500"> Solutions</span> */}
                        <span className="text-sm font-medium text-blue-600"> Solutions</span>

                        <h1 className="text-5xl font-bold mt-4"> {module.title}</h1>
                        <p className="mt-6 text-lg text-gray-600">{module.subtitle}</p>
                    </div>

                    <div>
                        {/* <div className="h-[400px] rounded-3xl bg-gray-100 shadow-lg flex items-center justify-center">Hero Image</div> */}
                        <div
                            className="
                     h-[400px]
                    rounded-3xl
                     bg-gradient-to-br
                     from-blue-50
                     via-white
                     to-blue-100
                    border border-blue-100
                    shadow-xl
                     flex items-center justify-center
                    "


                        > Hero Image</div>
                    </div>

                </div>
            </section>

            {/* Features Section */}
            {/* <section className="max-w-7xl mx-auto px-6 py-20 "> */}
            <section className="bg-gray-50 py-20">
                <div className=" max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12"> Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {module.features.map((feature) => (
                            <div
                                key={feature.title}
                                className="
                bg-white
                rounded-2xl
               border border-gray-100
               shadow-sm
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
                p-6
              "
                            >
                                <h3 className="font-semibold text-xl mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}

                    </div>


                </div>

            </section>


            {/* WorkFlow */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                How It Works
                            </h2>

                            <p className="text-gray-600 leading-8">
                                {module.workflow}
                            </p>
                        </div>

                        {/* <div className="h-[350px] bg-white rounded-3xl shadow-lg flex items-center justify-center">
              Workflow Image
            </div> */}
                        <div
                            className="
            h-[350px]
            rounded-3xl
            bg-gradient-to-br
            from-blue-50
            to-white
            border border-blue-100
            shadow-xl
            flex items-center
            justify-center"

                        >
                            Workflow Image
                        </div>

                    </div>

                </div>
            </section>


            {/* Benefits */}
            <section className="max-w-7xl mx-auto px-6 py-20" >
                <h2 className="text-4xl font-bold mb-12"> Benefits </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {module.benefits.map((item) => (
                        <div
                            key={item}
                            className="
                bg-white
                rounded-2xl
                shadow-md
                p-6
              "
                        >
                            ✓ {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}

            <section className="bg-black text-white py-24">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-5xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>

                    <p className="text-gray-300 mb-10">
                        Discover how {module.title} can improve your operations.
                    </p>

                    <button
                    onClick={() => setShowDemoModal(true)}
                        className="
                        bg-white
                        text-black
                        px-8
                        py-4
                        rounded-xl
                        font-semibold
                        hover:bg-blue-50
                        transition"
                    >
                        Request Demo
                    </button>

                </div>
            </section>

            {/* CTA - blue button kind of thing */}

            {/* <section className="bg-gray-50 py-24 ">
            <div className="
            max-w-5xl mx-auto
            text-center
            px-6
            py-16
            rounded-3xl
            bg-gradient-to-r
            from-blue-600
            to-blue-700
            text-white
            shadow-xl 
            
            ">
                <h2 className="text-5xl font-bold mb-6 ">
                    Ready to Get Started 
                </h2>
                <p className="text-gray-300 mb-10 ">
                    Discover how {module.title} can improve your operations.
                </p>
                <button
                onClick={() => setShowDemoModal(true)}
                className=" bg-white
              text-blue-600
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-blue-50
              transition">
                Request Demo

                </button>

            </div>
        </section> */}


               {/* Demomodal */}
                    {
                        showDemoModal && (
                    <DemoRequestModal
                         moduleName={module.title}
                         onClose={() =>
                            setShowDemoModal(false)
                                 }
                    />
                                        )
                    }
        </div>

    )
}