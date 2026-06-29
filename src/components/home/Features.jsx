import {
    Shield,
    AlertTriangle,
    Key,
    BarChart,
} from "lucide-react";

export default function Features() {

    const features = [
        {
        title: "Security Operations",
        desc: "Manage guarding, shift scheduling, and duty deployment efficiently.",
        icon: Shield, // keep your existing icon or adjust if needed
    },
    {
        title: "Incident & Crisis Management",
        desc: "Track incidents, SCRI events, and ensure real-time response handling.",
        icon: AlertTriangle,
    },
    {
        title: "Access & Pass Control",
        desc: "Handle visitor passes, employee access, and authorization workflows.",
        icon: Key,
    },
    {
        title: "Reports & Intelligence",
        desc: "Generate insights for SLA, cost, compliance, and operational analysis.",
        icon: BarChart,
    },
];
    
    return (
        <section id="features" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/*Heading */}
                <div className="text-center mb-12">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Features that power your product
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Everything you need to build a modern SaaS landing page
                    </p>
                </div>


                {/* Grid*/}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (

                            <div
                                key={index}

                                className=" 
                            p-6
                            group
                            bg-white
                            rounded-2xl
                            border border-gray-100
                            shadow-sm
                            hover:shadow-xl
                            hover:-translate-y-2
                            transition-all
                            duration-300
                            hover:border-blue-200

                            "
                            >

                                {/* Icon */}
                                <div className="
                                            w-12
                                            h-12
                                            bg-blue-50
                                            text-blue-600
                                            rounded-xl
                                            flex
                                            items-center
                                            justify-center
                                            mb-5
                                            transition-all
                                            duration-300
                                            group-hover:bg-blue-100
                                            ">
                                    <Icon className="w-6 h-6" />


                                </div>

                                <h3 className="text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}

                </div>

            </div>
        </section>
    );
}