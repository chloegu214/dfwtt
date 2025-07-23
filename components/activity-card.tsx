import { Users, MapPin, Calendar, Award } from "lucide-react"

interface ActivityCardProps {
  title: string
  location: string
  date: string
  description: string
  participants?: number
  type: "exhibition" | "clinic" | "volunteer" | "special"
  image?: string
  featured?: boolean
}

const typeIcons = {
  exhibition: <Users className="h-6 w-6 text-purple-600" />,
  clinic: <Award className="h-6 w-6 text-green-600" />,
  volunteer: <Users className="h-6 w-6 text-blue-600" />,
  special: <Award className="h-6 w-6 text-yellow-600" />,
}

const typeColors = {
  exhibition: "purple",
  clinic: "green",
  volunteer: "blue",
  special: "yellow",
}

export default function ActivityCard({
  title,
  location,
  date,
  description,
  participants,
  type,
  featured = false,
}: ActivityCardProps) {
  const color = typeColors[type]

  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 ${
        featured ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`bg-${color}-100 p-3 rounded-lg flex-shrink-0`}>{typeIcons[type]}</div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={`bg-${color}-100 text-${color}-800 text-xs font-medium px-2 py-1 rounded-full capitalize`}>
              {type}
            </span>
            {featured && (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Featured</span>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>

          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            {participants && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>{participants}+ participants</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
