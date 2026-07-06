const AboutStory = () => {
    return (
        // <section className=" py-28 bg-slate-50">
        //     <div className=" max-w-7xl mx-auto px-6 lg:px-8">
        //         <div className="max-w-4xl ">
        //             <p className="text-indigo-600 font-semibold mb-3 ">
        //                 Our Story
        //             </p>
        //             <h2 className="text-4xl font-bold text-gray-900 mb-8 ">
        //                 Created to Solve Real Business Challenges
        //             </h2>
        //             <div className="space-y-6 text-lg text-gray-600 leading-relaxed ">
        //                 <p>Fortylane was founded with a clear purpose: helping
        //                     organizations make better decisions in an increasingly
        //                     complex world.
        //                 </p>
        //                 <p>As businesses generated more data and faced greater
        //                     uncertainty, we saw the need for solutions that could
        //                     transform information into actionable insight.
        //                 </p>
        //                 <p> Today, Fortylane combines modern technology, analytics,
        //                     and industry expertise to help organizations improve
        //                     visibility, accelerate growth, and prepare for the future.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="py-28 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>

        <p className="text-indigo-600 font-semibold mb-3">
          Our Story
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
          How it all
          <span className="block text-indigo-600">
            Started 
          </span>
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-600">

           <p>
            Arlanto, formerly known as RimaOne, was founded more than 20 years ago with a clear mission: 
            to help organizations manage risk with confidence and clarity.
          </p>

          <p>
           Over the years, we have supported renowned banking institutions including Deutsche Bank, Bank of America, 
           and the European Development Bank with robust risk management solutions.
          </p>

          <p>
            Today, Arlanto continues to evolve, 
            expanding its expertise into higher education and delivering 
            innovative solutions for universities, business schools, and modern organizations.
          </p>

         

        </div>

      </div>

      {/* Right Card */}
      <div>

        <div
          className="
          relative
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-10
          shadow-sm
          overflow-hidden
        "
        >

          {/* Glow */}
          <div
            className="
            absolute
            -top-10
            -right-10
            h-40
            w-40
            rounded-full
            bg-indigo-100
            blur-3xl
          "
          />

          <div className="relative">

            <div
              className="
              inline-flex
              rounded-full
              bg-indigo-50
              px-4
              py-2
              text-sm
              font-medium
              text-indigo-600
            "
            >
              Why Arlanto
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Turning Risk Into Opportunity
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We help organizations make data-driven, information-based decisions by identifying relevant risk factors, 
              mitigating uncertainty, and enabling confident growth.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                <span className="text-gray-700">
                 Advanced risk management solutions
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                <span className="text-gray-700">
                 Data-driven decision-making
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                <span className="text-gray-700">
                  Long-term client partnerships
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
    );
}
export default AboutStory;