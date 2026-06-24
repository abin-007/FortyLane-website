import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features"
import Footer from "../components/Footer"
import FAQ from "../components/FAQ";
import ContactPage from "./ContactPage";
import Pricing from "../components/Pricing";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Pricing/>
            <FAQ />
            <Footer />
            {/* <ContactPage/> */}

        </>



    )
}