import { Calendar, AlertTriangle, CheckCircle } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  description: string
  type: "warning" | "info" | "success"
}

const events: TimelineEvent[] = [
  {
    date: "September 1, 2008",
    title: "Booster Ban Implemented",
    description: "ITTF Law 2.4.7 - Absolute ban on boosters, tuners, enhancers, and improvers",
    type: "warning",
  },
  {
    date: "2008",
    title: "VC Testing Introduced",
    description: "Tournament testing for volatile compounds using enez and RAE devices",
    type: "info",
  },
  {
    date: "Ongoing",
    title: "Stricter Thickness Testing",
    description: "More accurate measuring equipment for 4.00mm maximum thickness limit",
    type: "success",
  },
]

export default function RegulationTimeline() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-blue-600" />
        Regulation Timeline
      </h3>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {event.type === "warning" && (
                <div className="bg-yellow-100 p-2 rounded-full">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                </div>
              )}
              {event.type === "info" && (
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
              )}
              {event.type === "success" && (
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">{event.date}</div>
              <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
