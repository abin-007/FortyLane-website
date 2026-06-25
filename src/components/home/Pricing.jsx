

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For personal use and testing",
      features: [
        "Basic features",
        "Community support",
        "Limited usage",
      ],
      button: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Best for professionals and teams",
      features: [
        "All Free features",
        "Advanced analytics",
        "Priority support",
        "Unlimited projects",
      ],
      button: "Start Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large scale businesses",
      features: [
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
      ],
      button: "Contact Sales",
      highlighted: false,
    }
  ]
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-gray-600">
            Choose a plan that fits your needs
          </p>
        </div>


        {/* Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl
                 p-8 
                 border border-gray-100
                 transition-all
                 shadow-sm 
                 hover:shadow-xl
                  hover:-translate-y-1
                  duration-300
                 
                 ${plan.highlighted
                ? "border-blue-600 bg-white transform scale-105"
                : "bg-white"
                }`}
            >

              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-3xl font-bold mt-4 text-gray-900">
                {plan.price}
              </p>

              <p className="text-gray-500 mt-2">
                {plan.description}
              </p>

              {/* Features */}

              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  // <li key={i}> {feature}</li>
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-6 w-full py-3 rounded-lg font-medium transition ${plan.highlighted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

      </div>


    </section>
  );
}