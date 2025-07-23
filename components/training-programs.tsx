import type React from "react"
import { Users, User, Clock, DollarSign } from "lucide-react"

interface TrainingProgram {
  title: string
  price: string
  duration: string
  description: string
  icon: React.ReactNode
  features: string[]
}

const programs: TrainingProgram[] = [
  {
    title: "Junior (U-9) Group Lessons",
    price: "$80/four lessons",
    duration: "1 hour per lesson",
    description: "Perfect for young players under 9 years old",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    features: ["Minimum two players", "Age-appropriate training", "Fun and engaging", "USATT Certified Coaches"],
  },
  {
    title: "Junior (U-9) One-on-One",
    price: "$120/four lessons",
    duration: "1 hour per lesson",
    description: "Personalized training for young players",
    icon: <User className="h-8 w-8 text-blue-600" />,
    features: ["Individual attention", "Customized curriculum", "Faster skill development", "Flexible scheduling"],
  },
  {
    title: "Adult Beginner Lessons",
    price: "$40/lesson or $140/four",
    duration: "1 hour per lesson",
    description: "Start your table tennis journey",
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    features: ["Beginner-friendly approach", "Fundamental techniques", "Equipment guidance", "Supportive environment"],
  },
  {
    title: "Advanced One-on-One",
    price: "$45/lesson",
    duration: "1 hour per lesson",
    description: "Take your game to the next level",
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    features: ["Advanced techniques", "Competition preparation", "Strategy development", "Performance analysis"],
  },
]

export default function TrainingPrograms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DFWTT specializes in the development and training of Junior players with quality programs led by USATT
            Certified Coaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{program.title}</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-blue-600">{program.price}</div>
                <div className="text-sm text-gray-500">{program.duration}</div>
              </div>
              <p className="text-gray-600 text-center mb-4">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Training Information</h3>
          <ul className="space-y-2 text-yellow-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600">•</span>
              All lessons require registration and payment in advance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600">•</span>
              Only one of the four lessons may be rescheduled
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600">•</span>
              Students who can't attend should call 24 hours before or will be charged for the lesson
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
