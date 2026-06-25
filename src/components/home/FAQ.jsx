import { useState } from "react";

export default function FAQ() {
    // const [open, setOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null)
    const faqs = [
        {
            question: "What is this product about?",
            answer:
                "It is a modern SaaS starter template built with React and Tailwind CSS to help you launch faster.",
        },
        {
            question: "Is this production ready?",
            answer:
                "Yes, it is designed with scalable architecture, routing, and reusable components.",
        },
        {
            question: "Can I deploy it for free?",
            answer:
                "Yes, you can deploy using Vercel, Netlify, or GitHub Pages for free.",
        },
        {
            question: "Do I need a backend?",
            answer:
                "No backend is required for the static landing page. You can integrate APIs later if needed.",
        },

    ]


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <section id="faq" className=" bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className=" font-medium text-blue-600">
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-4xl font-bold mt-3">
                        Everything you need to know before getting started
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Find answers to common questions about 
                        FortyLane and our solutions
                    </p>
                </div>

                {/* FAQ items */}
                <div className=" max-w-4xl mx-auto space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="
                            bg-white
                            border 
                            border-gray-100
                            rounded-2xl
                             
                             shadow-sm
                             hover:shadow-lg 
                             transition-all
                             duration-300
                             overflow-hidden
                            
                            "
                        >

                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="
                                w-full 
                                text-left
                                 flex 
                                 justify-between
                                  items-center
                                  px-6
                                  py-5
                                
                                "
                            >
                                <span className="
                                text-lg
                                font-semibold
                                 text-gray-900
                                
                                ">
                                    {item.question}
                                </span>

                                <span className="
                                text-blue-600
                                text-xl
                                font-light
                                ">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="px-6 pb-5 ">
                                     <p className="leading-7 text-gray-600">
                                    {item.answer}
                                </p>

                                </div>
                               
                            )}

                        </div>
                    ))}


                </div>
            </div>
        </section>

    );
}