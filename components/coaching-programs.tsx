import { Users, User, Clock, DollarSign, AlertCircle } from "lucide-react"

const programs = [
  {
    title: "Junior Beginner (U-9) One-on-One",
    price: "$120",
    duration: "4 lessons",
    sessionLength: "1 hour per lesson",
    description: "Personalized training for young players",
    icon: <User className="h-8 w-8 text-blue-600" />,
    features: [
      "Individual attention",
      "Customized curriculum",
      "Faster skill development",
      "Flexible scheduling",
      "Parent progress updates",
    ],
    popular: true,
  },
  {
    title: "Adult Beginner Lessons",
    price: "$40",
    duration: "per lesson",
    sessionLength: "1 hour per lesson",
    description: "Start your table tennis journey",
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    features: [
      "Beginner-friendly approach",
      "Fundamental techniques",
      "Equipment guidance",
      "Supportive environment",
      "4 lessons for $140",
    ],
    popular: false,
  },
  {
    title: "Advanced One-on-One",
    price: "$45",
    duration: "per lesson",
    sessionLength: "1 hour per lesson",
    description: "Take your game to the next level",
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    features: [
      "Advanced techniques",
      "Competition preparation",
      "Strategy development",
      "Performance analysis",
      "Tournament coaching",
    ],
    popular: false,
  },
]

export default function CoachingPrograms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coaching Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DFWTT specializes in the development and training of Junior players with quality programs led by USATT
            Certified Coaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${
                program.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                {program.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{program.title}</h3>

              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">{program.price}</div>
                <div className="text-sm text-gray-500">{program.duration}</div>
                <div className="text-xs text-gray-400">{program.sessionLength}</div>
              </div>

              <p className="text-gray-600 text-center mb-4 text-sm">{program.description}</p>

              <ul className="space-y-2 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  program.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Important Information */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Coaching Information</h3>
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  All lessons require registration and payment in advance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  Only one of the four lessons may be rescheduled
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  Students who can't attend should call 24 hours before or will be charged for the lesson
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
