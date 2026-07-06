
const cards = [
  {
    title: "Client-Centric",
    text: "We listen closely to our clients and craft solutions that support their unique needs, goals, and priorities."
  },
  {
    title: "Goal-Oriented",
    text: "We are invested in your success, delivering solutions that help you make confident, data-driven decisions."
  },
   {
    title: "Long-Term Collaboration",
    text: "We engage with our clients as long-term partners, adapting and growing alongside their evolving needs."
  }
]; 

const AboutDifferences=()=>{
    return(
         <section className="py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            What Makes Us Different
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Arlanto helps organizations make data-driven, 
            information-based decisions by identifying 
            relevant risk factors, mitigating uncertainty, and creating opportunities for growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {cards.map((card) => (
            <div
              key={card.title}
              className="border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600">
                {card.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
    )
}
export default AboutDifferences;