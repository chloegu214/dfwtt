import { CheckCircle, XCircle, Ruler, Eye, ArrowUp } from "lucide-react"

const quickRules = [
  {
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    title: "Ball on Open Palm",
    description: "Ball must rest freely on open, flat palm",
    color: "green",
  },
  {
    icon: <ArrowUp className="h-5 w-5 text-blue-600" />,
    title: "16cm Minimum Toss",
    description: "Ball must rise at least 16cm vertically",
    color: "blue",
  },
  {
    icon: <XCircle className="h-5 w-5 text-red-600" />,
    title: "No Spin on Toss",
    description: "Ball must be thrown without imparting spin",
    color: "red",
  },
  {
    icon: <Eye className="h-5 w-5 text-purple-600" />,
    title: "Visible at All Times",
    description: "Ball cannot be hidden from receiver",
    color: "purple",
  },
]

export default function ServingQuickRef() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Ruler className="h-5 w-5 text-blue-600" />
        Quick Reference - Legal Serve Requirements
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickRules.map((rule, index) => (
          <div key={index} className={`p-4 bg-${rule.color}-50 border border-${rule.color}-200 rounded-lg`}>
            <div className="flex items-start gap-3">
              {rule.icon}
              <div>
                <h4 className={`font-semibold text-${rule.color}-800 mb-1`}>{rule.title}</h4>
                <p className={`text-${rule.color}-700 text-sm`}>{rule.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
