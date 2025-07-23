import Image from "next/image"
import { ExternalLink, Users, Calendar } from "lucide-react"

interface SponsorCardProps {
  name: string
  logo?: string
  description: string
  website?: string
  partnership: string
  since?: string
  tier: "platinum" | "gold" | "silver" | "bronze" | "community"
}

const tierColors = {
  platinum: "from-gray-300 to-gray-500",
  gold: "from-yellow-300 to-yellow-600",
  silver: "from-gray-200 to-gray-400",
  bronze: "from-orange-300 to-orange-500",
  community: "from-blue-300 to-blue-500",
}

const tierLabels = {
  platinum: "Platinum Partner",
  gold: "Gold Sponsor",
  silver: "Silver Sponsor",
  bronze: "Bronze Sponsor",
  community: "Community Partner",
}

export default function SponsorCard({ name, logo, description, website, partnership, since, tier }: SponsorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Tier Badge */}
      <div className={`h-2 bg-gradient-to-r ${tierColors[tier]}`}></div>

      <div className="p-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {logo ? (
              <Image
                src={logo || "/placeholder.svg"}
                alt={`${name} logo`}
                width={64}
                height={64}
                className="object-contain"
              />
            ) : (
              <div className="text-2xl font-bold text-gray-400">
                {name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${tierColors[tier]} text-white`}
            >
              {tierLabels[tier]}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Partnership Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-blue-600" />
            <span>{partnership}</span>
          </div>
          {since && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span>Partner since {since}</span>
            </div>
          )}
        </div>

        {/* Website Link */}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            <span>Visit Website</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}
