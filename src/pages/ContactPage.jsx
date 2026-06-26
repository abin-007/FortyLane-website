import { useState } from "react";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import { sendContactEmail } from "../services/email_service";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await sendContactEmail({
              name: formData.name,
              email: formData.email,
              message: formData.message,
      });
      alert("Message sent successfully");




    } catch (e) {
     // alert("Failed to send the message");
     console.error("Emailjs error", e);
      alert(`Failed to send message.\n\n${e?.text || e?.message || "Unknown Error"}`



      );


     



    } finally {
      setLoading(false);

    }

  }
  return (
    <>
      < Navbar
      />
      {/* <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 ">
                <h1 className="text-4xl font-bold mb-8">
                    Contact  Us
                </h1>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border rounded-lg p-3"

                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg p-3"

                    />

                    <textarea
                        rows="5"
                        placeholder="Message"
                        className="w-full border rounded-lg p-3"

                    />
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                        Send Message

                    </button>

                </form>
            </main> */}

      <main className="bg-gray-50 min-h-screen">

        {/* Hero */}

        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">

            {/* <span className="text-blue-600 font-medium">
              Contact Us
            </span> */}

            <h1 className="text-5xl font-bold mt-4 text-gray-900">
              Let's Talk
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Have questions about FortyLane?
              We'd love to hear from you.
            </p>

          </div>
        </section>

        {/* Contact Form */}

        <section className="pb-20">

          <div className="max-w-4xl mx-auto px-6">

            <div
              className="
              bg-white
              rounded-3xl
              border border-gray-100
              shadow-xl
              p-8 md:p-10
            "
            >
              <form className="space-y-6"
                onSubmit={handleSubmit}
              >

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-xl
                      border border-gray-300
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-xl
                      border border-gray-300
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="
                      w-full
                      rounded-xl
                      border border-gray-300
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                    "
                  />
                </div>

                <button
                  disabled={loading}
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-8
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  {loading ? "Sending .." : "Send Message"}
                </button>

              </form>
            </div>

          </div>

        </section>

      </main>
      <Footer />

    </>

  );
}