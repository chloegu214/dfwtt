import LocationCard from "@/components/location-card";
import PricingCard from "@/components/pricing-card";
import { MapPin, Clock, Info, Phone, Mail } from "lucide-react";

const locations = [
  {
    name: "Cimarron Recreation Center",
    city: "Irving, TX",
    schedules: [
      { day: "Monday", time: "7:00 PM - 9:00 PM" },
      { day: "Saturday", time: "9:00 AM - 12:00 PM" },
    ],
    phone: "214-240-5975",
    email: "dfwtt1@gmail.com",
    manager: {
      name: "Donna Chen",
      title: "Location Coordinator",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Heights Recreation Center",
    city: "Richardson, TX",
    schedules: [
      { day: "Friday", time: "6:00 PM - 9:00 PM" },
      { day: "Sunday", time: "2:00 PM - 5:00 PM" },
    ],
    phone: "214-240-5975",
    email: "dfwtt1@gmail.com",
    manager: {
      name: "Donna Chen",
      title: "Location Coordinator",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Marcus Recreation Center",
    city: "Flower Mound, TX",
    schedules: [{ day: "Thursday", time: "5:30 PM - 8:00 PM" }],
    phone: "214-240-5975",
    email: "dfwtt1@gmail.com",
    manager: {
      name: "Donna Chen",
      title: "Location Coordinator",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Timberglen Recreation Center",
    city: "Dallas, TX",
    schedules: [
      { day: "Monday", time: "5:30 PM - 8:00 PM" },
      { day: "Wednesday", time: "5:30 PM - 8:00 PM" },
    ],
    phone: "214-240-5975",
    email: "dfwtt1@gmail.com",
    manager: {
      name: "Donna Chen",
      title: "Location Coordinator",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
];

const membershipOptions = [
  {
    name: "Cimarron, Marcus & Timberglen",
    price: "$5",
    description: "With City ID Card",
    features: [
      "Access to 3 locations",
      "All regular playing sessions",
      "Community tournaments",
      "League participation",
      "Equipment available",
    ],
  },
  {
    name: "Heights Recreation",
    price: "$5",
    description: "With City ID Card",
    features: [
      "Premium location access",
      "Extended playing hours",
      "Tournament hosting",
      "Advanced player community",
      "Professional coaching available",
    ],
  },
  {
    name: "Day Pass Option",
    price: "$8-$10",
    description: "Without City ID Card",
    features: [
      "No membership required",
      "Try before you commit",
      "Access to all locations",
      "Perfect for visitors",
      "Same great facilities",
    ],
  },
];

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

export default function PlacesToPlayPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Places to Play</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find the perfect location to play table tennis in the Dallas-Fort Worth area. 
            All our locations feature excellent playing conditions with great lighting, flooring, and tournament-quality tables.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Membership Options"
            subtitle="Choose the membership option that works best for you. All memberships include access to our quality facilities and welcoming community."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {membershipOptions.map((option, index) => (
              <PricingCard key={index} {...option} />
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center text-blue-800">
            <strong>Note:</strong> Heights location is $8 without City ID Card. Day passes add $5 to the base price for locations without City ID Card.
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 border-b border-yellow-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 text-yellow-800">
          <Info className="h-5 w-5" />
          <p className="text-sm font-medium">
            All locations are subject to recreation center availability. Please call ahead to confirm playing times.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Playing Locations"
            subtitle="DFWTT operates at multiple recreation centers throughout the Dallas-Fort Worth metroplex. Each location offers quality facilities and welcoming communities for players of all levels."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MapPin className="h-8 w-8 text-blue-600" />,
              title: "Multiple Locations",
              text: "Convenient locations throughout the DFW area, making it easy to find a place to play near you.",
            },
            {
              icon: <Clock className="h-8 w-8 text-blue-600" />,
              title: "Flexible Schedule",
              text: "Various playing times throughout the week to accommodate different schedules and preferences.",
            },
            {
              icon: <Info className="h-8 w-8 text-blue-600" />,
              title: "Quality Facilities",
              text: "All locations feature excellent lighting, proper flooring, and tournament-quality tables for the best playing experience.",
            },
          ].map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Playing?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Visit any of our locations during playing hours, or contact us for more information about joining DFWTT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-300">
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
