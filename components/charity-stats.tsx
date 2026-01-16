import { TrendingUp, Users, Heart, Award } from "lucide-react"

const stats = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    value: "$15,187.57",
    label: "Total Donated",
    description: "Since program inception",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    value: "7,000+",
    label: "Tournament Participants",
    description: "Contributing to charity",
  },
  {
    icon: <Award className="h-8 w-8 text-green-600" />,
    value: "25+",
    label: "Organizations Supported",
    description: "Local and international causes",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    value: "18 Years",
    label: "Program Duration",
    description: "Consistent charitable giving",
  },
]

export default function CharityStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Charity Program Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every tournament participant contributes $2 to charity, creating a meaningful impact in our community and
            beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 mx-auto">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
