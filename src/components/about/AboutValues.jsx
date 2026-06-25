import {
    Sparkles,
    ShieldCheck,
    Trophy,
    Users,
} from "lucide-react";

const values = [
    {
        title: "Innovation",
        icon: Sparkles,
        description:
            "We continuously explore new ideas, technologies, and approaches to create meaningful value."
    },
    {
        title: "Integrity",
        icon: ShieldCheck,
        description:
            "Trust, transparency, and accountability guide every decision we make."
    },
    {
        title: "Excellence",
        icon: Trophy,
        description:
            "We strive to deliver quality solutions and exceptional customer experiences."
    },
    {
        title: "Partnership",
        icon: Users,
        description:
            "Strong relationships help us build solutions that drive long-term success."
    }
];

const AboutValues = () => {



    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16 ">
                    <span className=" inline-flex
                                        rounded-full
                                        bg-indigo-50
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        text-indigo-600
                                        mb-4"             >
                        Our Core Values

                    </span>
                    <h2 className="text-4xl
                                    md:text-5xl
                                    font-bold
                                    tracking-tight
                                    text-slate-900">
                        Principles That Guide

                        <span className=" block text-indigo-600"> Everything we build  </span>
                    </h2>
                    <p className=" mt-6 text-lg text-slate-600">
                        Our values shape how we innovate, collaborate,
                        and deliver meaningful outcomes for every customer.
                    </p>
                </div>





                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {values.map((value) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={value.title}
                                className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-3xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-8
                                        transition-all
                                        duration-300
                                        hover:-translate-y-3
                                        hover:border-indigo-200
                                        hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]
              
              "
                            >
                                {/* Glow Effect */}
                                <div
                                    className=" absolute
                             -right-10
                            -top-10
                             h-32
                            w-32
                            rounded-full
                            bg-indigo-100
                            opacity-0
                            blur-3xl
                            transition-opacity
                            duration-300
                            group-hover:opacity-100"  />

                                <div className=" relative z-10">


                                    {/* Icon */}
                                    <div className=" mb-6
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-slate-100
                                transition-all
                                duration-300
                                group-hover:bg-indigo-50">
                                        <Icon className="  h-7
                            w-7
                            text-slate-700
                            transition-colors
                            duration-300
                            group-hover:text-indigo-600"/>

                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                        {value.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}
export default AboutValues;