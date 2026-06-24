

export default function Features() {

    const features = [
        {
            title: "Fast Performance",
            desc: "Optimized React + Vite setup for lightning fast load times.",
        },
        {
            title: "Responsive Design",
            desc: "Works perfectly on mobile, tablet, and desktop screens.",
        },
        {
            title: "Modern UI",
            desc: "Built with Tailwind CSS for clean and scalable styling.",
        },
        {
            title: "Easy Deployment",
            desc: "Deploy instantly using Vercel, Netlify, or GitHub Pages.",
        },
    ]
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

                    {features.map((item, index) => (
                        <div
                            key={index}
                            // className="
                            // // p-6 border rounded-xl hover:shadow-lg transition
                            // "
                            className=" 
                            p-6
                            bg-white
                            rounde-2xl
                            border border-gray-100
                            shadow-sm
                            hover:shadow-xl
                            hover:-translate-y-1
                            transition-all
                            duration-300

                            "
                        >
                            <div className=" w-12
                                            h-12
                                            bg-blue-50
                                            text-blue-600
                                            rounded-xl
                                            flex
                                            items-center
                                            justify-center
                                            mb-5"></div>

                            <h3 className="text-xl font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}