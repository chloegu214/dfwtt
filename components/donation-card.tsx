import { Heart, Calendar, DollarSign } from "lucide-react"

interface DonationEntry {
  amount: string
  organization: string
  cause?: string
}

interface DonationCardProps {
  year: string
  donations: DonationEntry[]
  totalAmount: number
}

export default function DonationCard({ year, donations, totalAmount }: DonationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Year Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">{year}</h3>
        </div>
        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full">
          <DollarSign className="h-4 w-4" />
          <span className="font-bold">${totalAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Donations List */}
      <div className="space-y-3">
        {donations.map((donation, index) => (
          <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="font-medium text-gray-900">{donation.organization}</div>
              {donation.cause && <div className="text-sm text-gray-600 mt-1">{donation.cause}</div>}
            </div>
            <div className="font-bold text-green-600 ml-4">${donation.amount}</div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            {donations.length} donation{donations.length !== 1 ? "s" : ""}
          </span>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4 text-red-500" />
            <span>Community Impact</span>
          </div>
        </div>
      </div>
    </div>
  )
}
