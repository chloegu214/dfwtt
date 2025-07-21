import TrainingPrograms from "@/components/training-programs";
import {
  Trophy,
  Users,
  GraduationCap,
  Calendar,
  Phone,
  Mail,
} from "lucide-react";

const offerings = [
  {
    icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
    title: "Professional Coaching",
    description:
      "Learn from USATT Certified Coaches with years of experience and proven training methods.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-blue-600" />,
    title: "Sanctioned Tournaments",
    description:
      "Participate in officially sanctioned tournaments that count toward your USATT rating.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Leagues and Classes",
    description:
      "Join organized leagues and classes suitable for players of all skill levels and ages.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    title: "All Ages Welcome",
    description:
      "From juniors to seniors, beginners to advanced - everyone is encouraged to participate.",
  },
];

const coaches = [
  {
    name: "Coach Zhang Wei",
    title: "Head Coach & USATT Certified",
    specialties: [
      "Junior Development",
      "Advanced Techniques",
      "Tournament Preparation",
    ],
    experience: "15+ years",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Coach Maria Rodriguez",
    title: "Junior Program Director",
    specialties: ["Youth Training", "Beginner Programs", "Group Coaching"],
    experience: "10+ years",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Coach David Kim",
    title: "Advanced Training Specialist",
    specialties: [
      "Competition Coaching",
      "Strategy Development",
      "Adult Programs",
    ],
    experience: "12+ years",
    image: "/placeholder.svg?height=120&width=120",
  },
];

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join DFWTT</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Become part of the premier table tennis community in Dallas-Fort
              Worth. Whether you're a beginner or advanced player, we have
              programs designed for your success.
            </p>
          </div>
        </div>
      </section>

      {/* What DFWTT Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What DFWTT Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As a DFWTT member, you'll have access to professional coaching,
              tournaments, leagues, and a supportive community of players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <TrainingPrograms />

      {/* Coach Profiles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Coaches
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from experienced, USATT Certified Coaches who are dedicated
              to helping you improve your game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {coach.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {coach.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{coach.title}</p>
                <p className="text-sm text-gray-600 mb-3">
                  {coach.experience} experience
                </p>
                <div className="space-y-1">
                  {coach.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Tournaments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Activities & Tournaments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Participate in exciting seasonal activities and tournaments
              throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Annual Events
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-blue-600" />
                  <span>Spring Round Robin Tournament</span>
                </li>
                <li className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-blue-600" />
                  <span>Fall Round Robin Tournament</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Chinese Double Ten Celebration (September)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tournament Benefits
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• No membership required for events</li>
                <li>• Open to all skill levels</li>
                <li>• USATT sanctioned tournaments</li>
                <li>• Prizes and recognition</li>
                <li>• Great networking opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join DFWTT?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact us today to get started or visit any of our locations during
            playing hours. We're here to help you begin your table tennis
            journey!
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
  );
}
