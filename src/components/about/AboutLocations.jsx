import { MapPin } from "lucide-react";

const locations = [
    {
        city: "Bengaluru",
        country: "India",
        description:
            "Home to our product, engineering, and innovation teams, driving the development of modern digital solutions.",
    },
    {
        city: "Germany",
        country: "Strategic Partnerships",
        description:
            "Collaborating with industry experts and partners to deliver specialized knowledge and global perspectives.",
    },
    {
        city: "Global Teams",
        country: "Remote-First",
        description:
            "Distributed professionals working across regions to support clients with agility, flexibility, and expertise.",
    },
];

const AboutLocations = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className=" px-6 lg:px-8  mx-auto max-w-7xl">
                {/* section header */}
                <div className=" mx-auto text-center max-w-3xl">
                    <span className=" 
                    inline-flex
                    rounded-full
                    bg-indigo-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-indigo-600
                    mb-4
                    
                    ">
                        Global Presence
                    </span>
                    <h2 className="text-4xl
                                    md:text-5xl
                                    font-bold
                                    tracking-tight
                                    text-slate-900 ">

                        Connected Across
                        <span className="block text-indigo-600 ">
                            Borders & Time Zones

                        </span>

                    </h2>
                    <p className=" mt-6 text-lg text-slate-600">
                        We combine local expertise, strategic partnerships,
                        and distributed collaboration to serve organizations worldwide.
                    </p>
                </div>

                {/* cards  */}
                <div className="grid md:grid-cols-3 gap-8 mt-16 ">
                    {locations.map((location) => (
                        <div
                            key={location.city}
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
                                    hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]">



                            {/* Glow */}

                            <div
                                className="
                                        absolute
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
                                        group-hover:opacity-100
                                        "
                            />


                            <div className="relative z-10">

                                {/* Icon */}

                                <div
                                    className="
                                                mb-6
                                                flex
                                                h-14
                                                w-14
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                bg-slate-100
                                                transition-all
                                                duration-300
                                                group-hover:bg-indigo-50
                                            "
                                >
                                    <MapPin
                                        className="
                                                h-7
                                            w-7
                                            text-slate-700
                                            transition-colors
                                            duration-300
                                            group-hover:text-indigo-600"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-slate-900">
                                    {location.city}
                                </h3>

                                <p className="mt-2 text-sm font-medium text-indigo-600">
                                    {location.country}
                                </p>

                                <p className="mt-5 text-slate-600 leading-relaxed">
                                    {location.description}
                                </p>

                            </div>

                        </div>
                    ))}



                </div>






            </div>






        </section>
    )
}
export default AboutLocations;