import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features"
import Footer from "../components/home/Footer"
import FAQ from "../components/home/FAQ";
import ContactPage from "./ContactPage";
import Pricing from "../components/home/Pricing";

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