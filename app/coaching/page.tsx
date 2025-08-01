import CoachCard from "@/components/coach-card"
import CoachingPrograms from "@/components/coaching-programs"
import { Phone, Mail, Award, Users, Trophy } from "lucide-react"

const coaches = [
  {
    name: "Donna Chen",
    title: "City of Irving Contract Instructor",
    image: "/placeholder.svg?height=120&width=120",
    specialties: ["Tournament Organization", "Women's Training", "Adult Programs", "Competition Coaching"],
    experience: "25+ years",
    certifications: [
      "USATT Certified Assistant Regional Coach",
      "USATT Certified Club Umpire",
      "USATT Certified Assistant Club Coach",
      "ITTF Certified International Assistant Coach",
    ],
    description:
      "Professional table tennis instructor and tournament organizer with extensive competitive background and coaching certifications.",
    achievements: [
      { year: "2000", title: "US Closed Women O-40 National Runner Up", event: "US Closed Championship" },
      { year: "2000", title: "US Open Women O-40 National 3rd", event: "US Open" },
      { year: "1998", title: "Best Western Region Coach", event: "Regional Championship" },
      { year: "1998", title: "US Open Women O-40 International Champion", event: "US Open" },
      { year: "1997", title: "US Open Women O-40 International Champion", event: "US Open" },
    ],
  },
  {
    name: "Ranjit Singh Rayamajhi",
    title: "ITTF Level 2 Certified Coach",
    image: "/placeholder.svg?height=120&width=120",
    specialties: ["High-Level Competition", "Technical Skills", "International Experience", "Elite Training"],
    experience: "20+ years playing, 11+ years coaching",
    certifications: ["ITTF+PTT Level 2 Certified Coach"],
    description:
      "Professionally qualified Nepali Table Tennis Player/Coach with 2 decades of experience and top 3 ranking in Nepal.",
    achievements: [
      { year: "2017", title: "2nd Place Big Ball 2 Man Team", event: "DFWTT Spring Open" },
      { year: "2017", title: "1st Place U2450 Rated Event", event: "Texas Winter Games" },
      { year: "2016", title: "2nd Place Open Doubles", event: "DFWTT Fall Open" },
      { year: "2016", title: "1st Place", event: "NST Championship" },
      { year: "2015", title: "2nd Place U2400 Rated Event", event: "Texas Winter Games" },
      { year: "2014", title: "1st Place", event: "World Peace Tournament" },
      { year: "2013", title: "Participated", event: "21st Asian Table Tennis Championship - South Korea" },
      { year: "2012", title: "Participated", event: "World Team Table Tennis Championship - Germany" },
    ],
  },
  {
    name: "Keith Pech",
    title: "USATT Regional Coach",
    image: "/placeholder.svg?height=120&width=120",
    specialties: ["Competition Coaching", "Advanced Techniques", "Tournament Preparation", "International Experience"],
    experience: "15+ years coaching and competing",
    rating: "2275",
    certifications: ["ITTF Level 2 Certified Coach", "USATT Certified Regional Coach", "USATT Certified Umpire"],
    description:
      "Experienced coach and competitor with international experience in the United States, Latin America, and France.",
    achievements: [
      { year: "2017-2018", title: "French Individual National 2 League", event: "France" },
      { year: "2017-2018", title: "French Team Regional 1 League", event: "France" },
      { year: "2012", title: "US Olympic Trials Participant", event: "Olympic Trials" },
      { year: "2010-2014", title: "US Open Participant", event: "Multiple Years" },
    ],
  },
  {
  name: "Seth Pech",
  title: "Professional Table Tennis Player & Coach",
  image: "/placeholder.svg?height=120&width=120",
  specialties: [
    "Technical & Tactical Coaching",
    "Serve and Short Game Strategy",
    "Match Analysis and Mental Preparation",
    "Junior Development and Competitive Training"
  ],
  experience: "10+ years playing and coaching internationally",
  rating: "USATT Highest Rating: 2525",
  certifications: [
    "USATT Level 1 Certified Coach",
    "USATT Certified Umpire",
    "SafeSport Trained"
  ],
  description:
    "A professional table tennis player and coach with experience competing in Sweden and the United States. Known for his deep understanding of technical play, strong focus on player development, and dedication to the sport.",
  achievements: [
    { year: "2016", title: "Aurora Cup U2400 Champion", event: "USA" },
    { year: "2017", title: "Aurora Cup U2600 3rd Place", event: "USA" },
    { year: "2017", title: "Erie PA Open Champion", event: "USA" },
    { year: "2018", title: "Swedish Division 1 League Player (Lyckeby BTK)", event: "Sweden" },
  ],
}
]

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Coaching</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Learn from USATT Certified Coaches with international experience and proven track records. Whether you're
              a beginner or advanced player, our coaching programs will help you reach your potential.
            </p>      
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <CoachingPrograms />

      {/* Why Choose DFWTT Coaching */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DFWTT Coaching?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our coaching program stands out with certified instructors, proven methods, and a track record of
              developing successful players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Coaches</h3> 
              <p className="text-gray-600">
                All our coaches are USATT and ITTF certified with extensive competitive and coaching experience.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Programs</h3>
              <p className="text-gray-600">
                From junior development to advanced competition training, we have programs tailored for every level.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our coaches have trained national champions, Olympic participants, and countless successful players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Coaches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Coaches</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from world-class coaches with international competitive experience and proven coaching success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <CoachCard key={index} {...coach} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coaching Journey?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact us today to book your first coaching session or learn more about our programs. Our coaches are ready
            to help you achieve your table tennis goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>214-240-5975</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>dfwtt1@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
