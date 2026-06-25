
const stats = [
    {
        value: "100+",
        label: "Projects Delivered",
    },
    {
        value: "20+",
        label: "Years Combined Expertise",
    },
    {
        value: "10+",
        label: "Industries Served",
    },
    {
        value: "Global",
        label: "Client Reach",
    },
];

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden py-36 ">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="
          absolute
          top-0
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
                />

                <div
                    className="
          absolute
          bottom-0
          right-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8  ">


                <div className="text-center">
                    {/* Badge */}
                    <div
                        className="
            inline-flex
            items-center
            rounded-full
            border
            border-indigo-200
            bg-white/80
            backdrop-blur-md
            px-4
            py-2
            text-sm
            font-medium
            text-indigo-700
          "
                    >
                        About Arlanto
                    </div>

                    <h1 className=
                        "mt-8 text-6xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[0.95] "

                    >
                        Building Smarter Paths
                        <br />

                        for{''}
                        <span className=" 
          bg-gradient-to-r 
          from-indigo-600
           to-cyan-500 
           bg-clip-text
            text-transparent">
                            Business Growth
                        </span>


                    </h1>
                    <p className=" max-w-3xl mx-auto mt-8 text-xl text-gray-600 leading-relaxed">
                        We help organizations simplify complexity, unlock insights,
                        and make confident decisions through intelligent technology,
                        analytics, and innovation.
                    </p>

                    {/* CTA button */}
                    <div className=" mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                        <button className=" px-8
                                    py-4
                                    rounded-xl
                                    bg-indigo-600
                                    text-white
                                    font-medium
                                    hover:bg-indigo-700
                                    transition">
                            Explore Solutions
                        </button>
                        <button className="px-8
                                py-4
                                rounded-xl
                                border
                                border-gray-300
                                bg-white
                                text-gray-900
                                font-medium
                                hover:bg-gray-50
                                transition ">
                            Contact Us
                        </button>
                    </div >
                    {/* stats */}

                    <div className=" mt-20
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white/70
                        backdrop-blur-md
                         p-6
                            "
                            >
                                <div className="text-3xl font-bold text-gray-900">
                                    {item.value}
                                </div>

                                <div className="mt-2 text-sm text-gray-500">
                                    {item.label}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutHero;