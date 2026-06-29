import { useState } from "react";

export default function FAQ() {
    // const [open, setOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null)
    const faqs = [
        
        {
        question: "What is FortyLane used for?",
        answer:
            "FortyLane is a security and operations management platform used to handle guarding operations, incidents, access control, compliance, and enterprise security workflows.",
    },
    {
        question: "Who can use this system?",
        answer:
            "It is designed for tech parks, corporate campuses, security agencies, facility management teams, and large organizations.",
    },
    {
        question: "Does it support real-time tracking?",
        answer:
            "Yes, the system supports real-time tracking for incidents, attendance, security operations, and transportation workflows.",
    },
    {
        question: "Can it manage multiple security modules?",
        answer:
            "Yes, it includes modules like guarding operations, SCRI, pass management, incident tracking, shift scheduling, and more.",
    },
     
    ];


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