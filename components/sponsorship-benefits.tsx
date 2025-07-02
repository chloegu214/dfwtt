interface BenefitTier {
  name: string
  price: string
  color: string
  benefits: string[]
  featured?: boolean
}

const sponsorshipTiers: BenefitTier[] = [
  {
    name: "Community Partner",
    price: "$500",
    color: "blue",
    benefits: ["Logo on tournament materials", "Recognition at events", "Newsletter mentions", "Website listing"],
  },
  {
    name: "Bronze Sponsor",
    price: "$1,000",
    color: "orange",
    benefits: [
      "All Community Partner benefits",
      "Banner display at tournaments",
      "Social media recognition",
      "Program advertisements",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "$2,500",
    color: "gray",
    benefits: [
      "All Bronze Sponsor benefits",
      "Tournament naming opportunities",
      "VIP tournament seating",
      "Quarterly progress reports",
    ],
    featured: true,
  },
  {
    name: "Gold Sponsor",
    price: "$5,000",
    color: "yellow",
    benefits: [
      "All Silver Sponsor benefits",
      "Exclusive tournament sponsorship",
      "Custom promotional opportunities",
      "Direct player/coach interactions",
    ],
  },
  {
    name: "Platinum Partner",
    price: "$10,000+",
    color: "purple",
    benefits: [
      "All Gold Sponsor benefits",
      "Year-round partnership",
      "Custom program development",
      "Executive advisory role",
    ],
  },
]

export default function SponsorshipBenefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sponsorship Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with DFWTT to support table tennis in the Dallas-Fort Worth community while gaining valuable
            exposure and community goodwill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sponsorshipTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg border-2 p-6 ${
                tier.featured ? "border-blue-500 scale-105" : "border-gray-200"
              } hover:shadow-xl transition-all duration-300`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
                <div className="text-sm text-gray-500">Annual Investment</div>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  tier.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
