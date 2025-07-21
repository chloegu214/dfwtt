import HeroSection from "@/components/hero-section";
import LocationCard from "@/components/location-card";

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <HeroSection /> */}

      {/* Additional sections can be added here */}
      <section className="py-16 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Dallas Fort Worth Table Tennis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Join our vibrant table tennis community in the Dallas-Fort Worth
            area. Whether you're a beginner or a seasoned player, we have
            programs and competitions for everyone.
          </p>
          <a
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            About DFWTT
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Places to Play
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Find the perfect location to play table tennis in the Dallas-Fort
            Worth area. All our locations feature excellent playing conditions
            with great lighting, flooring, and tournament-quality tables.
          </p>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <LocationCard key={index} {...location} />
              ))}
            </div>
          </div>
          <a
            href="/places-to-play"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            More Locations Details
          </a>
        </div>
      </section>
    </div>
  );
}
