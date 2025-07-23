import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">DFWTT</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Building a stronger table tennis community in the Dallas & Fort Worth area since 1996.
            </p>
            <p className="text-gray-400 text-sm">Open to all ages, ethnicities, genders and playing levels.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/places-to-play" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Places to Play
                </a>
              </li>
              <li>
                <a href="/coaching" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Coaching
                </a>
              </li>
              <li>
                <a href="/scoreboard" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/rules" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Rules
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="/sunday-rr" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Sunday Round Robin
                </a>
              </li>
              <li>
                <a href="/monthly-doubles" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Monthly Doubles
                </a>
              </li>
              <li>
                <a href="/support-us/community" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Community Events
                </a>
              </li>
              <li>
                <a href="/support-us/sponsors" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Sponsorship
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">214-240-5975</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">dfwtt1@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-yellow-400 mt-1" />
                <span className="text-gray-300">Multiple locations across Dallas & Fort Worth</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">Visit during club hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Dallas Fort Worth Table Tennis. All rights reserved. | Established 1996
          </p>
        </div>
      </div>
    </footer>
  )
}
