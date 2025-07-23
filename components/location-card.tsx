import { MapPin, Clock, Phone, Mail, Users } from "lucide-react"

interface Schedule {
  day: string
  time: string
}

interface LocationCardProps {
  name: string
  address: string
  city: string
  schedules: Schedule[]
  phone?: string
  email?: string
  manager?: {
    name: string
    title: string
    image: string
  }
  status?: string
}

export default function LocationCard({
  name,
  address,
  city,
  schedules,
  phone,
  email,
  manager,
  status = "Open for Play",
}: LocationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">{status}</span>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2 text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
          <div className="text-sm">
            <div>{address}</div>
            <div>{city}</div>
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-gray-600" />
            <span className="font-medium text-gray-900">Playing Hours:</span>
          </div>
          <div className="space-y-2 ml-6">
            {schedules.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">{schedule.day}</span>
                <span className="text-gray-900 font-mono">{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
            <MapPin className="h-4 w-4" />
            Show on map
          </button>

          {phone && (
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Phone className="h-4 w-4" />
              <span>{phone}</span>
            </div>
          )}

          {email && (
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </div>
          )}
        </div>
      </div>

      {/* Manager Info */}
      {manager && (
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">{manager.name}</div>
              <div className="text-gray-500 text-xs">{manager.title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
