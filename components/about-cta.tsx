import { MapPin, Clock, Users } from "lucide-react"

export default function AboutCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover our <span className="text-blue-600">DFWTT Community</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DFWTT is open to all ages, ethnicities, genders and playing levels. Come and play this amazing, popular and
            rapidly growing Olympic sport!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">All Skill Levels</h3>
            <p className="text-gray-600">From beginners to elite players with 2000+ ratings</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Locations</h3>
            <p className="text-gray-600">Convenient locations throughout the Dallas-Fort Worth area</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Events</h3>
            <p className="text-gray-600">Tournaments, leagues, and corporate challenge events</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit us during club hours, give us a call, or browse our website to learn more. We'll be happy to welcome
            you to our organization!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              Visit Our Locations
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
