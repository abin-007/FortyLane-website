
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutVision from "../components/about/AboutVision";
import AboutDifferences from "../components/about/AboutDifferences";
import AboutCTA from "../components/about/AboutCTA";
import AboutLocations from "../components/about/AboutLocations";
import Navbar from "../components/NavBar";

const AboutPage = () => {
    return (

        <div className="bg-white">
            <Navbar/>
            <AboutHero />
            <AboutStory />
            <AboutVision />
            <AboutValues />
            <AboutDifferences />
            <AboutLocations />
            <AboutCTA />
        </div>
    )
}
export default AboutPage;