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
        <section id="faq" className=" bg-white py-20">
            <div className="max-w-4xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Everything you need to know before getting started
                    </p>
                </div>

                {/* FAQ items */}
                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 hover:shadow-sm transition"
                        >

                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center"
                            >
                                <span className="font-medium text-gray-900">
                                    {item.question}
                                </span>

                                <span className="text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <p className="mt-3 text-gray-600">
                                    {item.answer}
                                </p>
                            )}

                        </div>
                    ))}


                </div>
            </div>
        </section>

    );
}