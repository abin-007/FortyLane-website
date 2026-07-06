import { useNavigate } from "react-router-dom";

const AboutCTA = ()=>{
  const navigate = useNavigate()
    return(
        <section className="py-28">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-gray-900">
         Let’s Work Together
        </h2>

        <p className="mt-6 text-xl text-gray-600">
          Partner with Arlanto to build forward-thinking solutions that help your 
          organization manage risk, navigate complexity, and move ahead with confidence.
        </p>

        <button className="mt-10 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        onClick={() => navigate("/contact")}
        >
          Let’s Get Started
        </button>

      </div>

    </section>
    )
}
export default AboutCTA;