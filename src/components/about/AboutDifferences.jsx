
const cards = [
  {
    title: "Client-Centric",
    text: "We align our solutions with your unique business goals and priorities."
  },
  {
    title: "Outcome-Focused",
    text: "Our success is measured by the results and impact we create."
  },
  {
    title: "Built on Partnership",
    text: "We work alongside our customers to create lasting value."
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
            We help organizations transform complexity into clarity,
            enabling smarter decisions and sustainable growth.
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