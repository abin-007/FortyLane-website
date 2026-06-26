import { useState } from "react"
import { sendDemoRequest } from "../../services/email_service";
export default function DemoRequestModal({
    moduleName,
    onClose
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: ""

    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
              await sendDemoRequest({
                name: formData.name,
                email: formData.email,
                company: formData.company,
                phone: formData.phone,
                module: moduleName
            })

            alert("Demo request submitted!");
            onClose();

        } catch (e) {
            alert("Unable to submit request.");

        } finally {
            setLoading(false);
        }

    };

    return (


        <div
            onClick={onClose}
            className="
                        
                        fixed inset-0
                        z-[100]
                        flex items-center justify-center
                        bg-black/40
                        backdrop-blur-sm
                        px-4 ">
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                            
                            relative
                            bg-white
                            rounded-3xl
                            shadow-2xl
                            border border-gray-200
                            w-full
                            max-w-lg
                            p-8 " >
                <button
                    onClick={onClose}
                    className=" absolute
                            top-4
                            right-4
                            text-gray-500
                            hover:text-gray-700
                            text-xl "

                >
                    ✕

                </button>
                <h2 className="text-3xl font-bold text-gray-900 ">
                    Request Demo
                </h2>
                <p className="mt-2 text-gray-600">
                    Interested in{" "}
                    <span className="font-semibold text-blue-600">
                        {moduleName}
                    </span>
                </p>
                <form 
                onSubmit={handleSubmit}
                    className="mt-8 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="
                        w-full
                        border border-gray-300
                        rounded-xl
                        px-4
                        py-3
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        "   />
                    <input
                        type="email"
                        name="email"
                        placeholder="Work Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="
                        w-full
                        border border-gray-300
                        rounded-xl
                        px-4
                        py-3
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        
                        "/>
                    <input type="text"
                        name="company"
                        placeholder="Company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="
                        w-full
                        border border-gray-300
                        rounded-xl
                        px-4
                        py-3
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500"

                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder=" Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="
                        w-full
                        border border-gray-300
                        rounded-xl
                        px-4
                        py-3
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        
                        " />
                    <button
                        type="submit"
                        disabled={loading}
                        className="
                    w-full
                    bg-blue-600
                    text-white
                    py-3
                     rounded-xl
                    font-semibold
                    hover:bg-blue-700
                     transition
                    "

                    >
                        {loading ? "Submitting" : " Schedule Demo"}
                    </button>
                </form>
            </div>
        </div>
    )
}