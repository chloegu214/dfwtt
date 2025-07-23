import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">DFWTT</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Building a stronger table tennis community in the Dallas & Fort Worth area through family values,
              excellence, and quality sportsmanship since 1996.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-blue-100 hover:text-yellow-400 hover:bg-blue-800 p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-blue-100 hover:text-yellow-400 hover:bg-blue-800 p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-blue-100 hover:text-yellow-400 hover:bg-blue-800 p-2">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/places-to-play" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Places to Play
                </a>
              </li>
              <li>
                <a href="/coaching" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Coaching
                </a>
              </li>
              <li>
                <a href="/news" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  News & Events
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/sunday-rr" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Sunday Round Robin
                </a>
              </li>
              <li>
                <a href="/monthly-doubles" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Monthly Doubles
                </a>
              </li>
              <li>
                <a href="/rules" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Rules & Regulations
                </a>
              </li>
              <li>
                <a href="/scoreboard" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Live Scoreboard
                </a>
              </li>
              <li>
                <a href="/support-us" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Support Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-100">214-240-5975</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-100">dfwtt1@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-0.5" />
                <span className="text-blue-100">Multiple locations across Dallas & Fort Worth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Stay Updated</h3>
            <p className="text-blue-100 text-sm mb-4">Get the latest news and tournament updates</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-yellow-400"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © 2025 Dallas Fort Worth Table Tennis. All rights reserved. | Established 1996
          </p>
        </div>
      </div>
    </footer>
  )
}
