const AboutVision = () => {
    return (
        // <section className="py-28">
        //     <div className="max-w-7xl mx-auto px-6 lg:px-8 ">

        //         <div className=" text-center max-w-4xl mx-auto">
        //             <p className=" text-indigo-600 font-semibold mb-3">

        //                 Looking Ahead
        //             </p>
        //             <h2 className=" text-4xl font-bold text-gray-900 mb-8">
        //                 Driving the Future of Intelligent Decision-Making
        //             </h2>

        //             <p className=" text-lg text-gray-600 leading-relaxed">
        //                 We envision a future where organizations can anticipate
        //                 change, adapt faster, and make decisions with confidence.
        //                 Through continuous innovation and customer collaboration,
        //                 we build solutions that evolve alongside modern business needs.
        //             </p>

        //         </div>
        //     </div>
        // </section>
        <section className="py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div
                    className="
      relative
      overflow-hidden
      rounded-[40px]
      bg-slate-950
      p-10
      md:p-16
      lg:p-20
      "
                >

                    {/* Background Glow */}
                    <div
                        className="
        absolute
        top-0
        right-0
        h-96
        w-96
        rounded-full
        bg-indigo-500/20
        blur-3xl
        "
                    />

                    <div
                        className="
        absolute
        bottom-0
        left-0
        h-72
        w-72
        rounded-full
        bg-cyan-500/10
        blur-3xl
        "
                    />

                    <div className="relative z-10 max-w-4xl">

                        <p className="text-indigo-400 font-semibold mb-4">
                            Looking Ahead
                        </p>

                        <h2
                            className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          tracking-tight
          text-white
          leading-tight
          "
                        >
                            Driving the Future of
                            <span className="block text-indigo-400">
                                Intelligent Decision-Making
                            </span>
                        </h2>

                        <p
                            className="
          mt-8
          text-lg
          md:text-xl
          text-slate-300
          leading-relaxed
          max-w-3xl
          "
                        >
                            We envision a future where organizations can
                            anticipate change, adapt faster, and make
                            decisions with confidence. Through continuous
                            innovation, experimentation, and customer
                            collaboration, we build solutions that evolve
                            alongside modern business needs.
                        </p>

                        {/* Tags */}

                        {/* <div className="mt-10 flex flex-wrap gap-4">

          <div
            className="
            rounded-full
            border
            border-slate-700
            bg-slate-900
            px-5
            py-3
            text-slate-200
            "
          >
            Innovation
          </div>

          <div
            className="
            rounded-full
            border
            border-slate-700
            bg-slate-900
            px-5
            py-3
            text-slate-200
            "
          >
            Adaptability
          </div>

          <div
            className="
            rounded-full
            border
            border-slate-700
            bg-slate-900
            px-5
            py-3
            text-slate-200
            "
          >
            Customer Success
          </div>

          <div
            className="
            rounded-full
            border
            border-slate-700
            bg-slate-900
            px-5
            py-3
            text-slate-200
            "
          >
            Sustainable Growth
          </div>

        </div> */}
                        <div className="mt-16 grid md:grid-cols-3 gap-6">

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-slate-800
                                    bg-slate-900/60
                                    p-6
                                    "
                            >
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    Innovation
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    We continuously explore emerging technologies and new approaches
                                    to help organizations stay ahead of evolving business challenges.
                                </p>
                            </div>

                            <div
                                className="
                                rounded-3xl
                                border
                                border-slate-800
                                bg-slate-900/60
                                p-6
                                "
                            >
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    Adaptability
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    Change is constant. Our solutions are designed to help businesses
                                    respond quickly, make informed decisions, and remain resilient in
                                    dynamic environments.
                                </p>
                            </div>

                            <div
                                className="
                                rounded-3xl
                                border
                                border-slate-800
                                bg-slate-900/60
                                p-6
    "
                            >
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    Confidence
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    By transforming complex information into actionable insight,
                                    we empower organizations to move forward with clarity and
                                    confidence.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutVision;