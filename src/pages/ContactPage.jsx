import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-20 ">
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
            </main>
            <Footer />
        </>
    );
}