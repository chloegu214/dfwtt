import Image from "next/image"
import { Star, Phone, Mail } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-blue-600">DFW Table Tennis</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are one of the leading table tennis membership organizations in the nation, affiliated with USA Table
                Tennis (USATT). DFWTT promotes, develops and implements programs for table tennis players of all
                experience levels through family values, excellence and quality sportsmanship in the Dallas & Fort Worth
                area.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                Join DFWTT Today
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">Established 1996</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>214-240-5975</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>dfwtt1@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Table tennis players in action"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">100+ Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
