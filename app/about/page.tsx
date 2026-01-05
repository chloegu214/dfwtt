import AboutHero from "@/components/about-hero";
import AboutStats from "@/components/about-stats";
import AboutPartners from "@/components/about-partners";
import LocationCard from "@/components/location-card";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Users,
  Trophy,
  MapPin,
  Calendar,
  Globe,
  Heart,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import clubScene from "../../public/club-scene.jpg";

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
    city: "Dallas, TX",
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

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

     {/* Begin Notification area */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      { /*Location Closings Section        
          <Alert className="border-black-200 bg-red-50">
             <AlertDescription className="text-red-800">
              <div className="space-y-2">
                <p className="font-semibold text-lg">
                  Location Closings:
                </p>
                <p>
                   None
                </p>
              </div>
            </AlertDescription>
          </Alert>

          <p>&nbsp;</p>
      */ }      
     
      {/* Upcoming Tournaments Section 
 
          <Alert className="border-black-200 bg-yellow-50">
              <AlertDescription className="text-black-800">  
              <div className="space-y-2">
                <p className="font-semibold text-lg">
                  Upcoming Tournaments:
                </p>
                 <p>
                   DFWTT Fall Open, Saturday, November 15, 2025.&nbsp;
                   <a href= "/documents/DFWTT25FallOpnR2.pdf"
                      className="font-medium text-blue-600 hover:text-blue-800 underline"                  
                      target="_blank">Entry Form
                   </a>
                 </p>               
              </div>
             </AlertDescription>  
          </Alert>  

          <p>&nbsp;</p>
      */}

      {/* School Players Section */}                 
          <Alert className="border-black-200 bg-yellow-50">
             <AlertDescription className="text-yellow-800">
              <div className="space-y-2">
                <p className="font-semibold text-lg">
                  Attention Elementary, Middle, and High School Table Tennis
                  Players!
                </p>
                <p>
                  Please email us at{" "}
                  <a
                    href="mailto:dfwtt1@gmail.com"
                    className="font-medium text-blue-600 hover:text-blue-800 underline"
                  >
                    dfwtt1@gmail.com
                  </a>{" "}
                  if your school has a table tennis club. Also email us if you
                  are interested in playing in an upcoming School Tournament.
                  You can also email us with any comments or suggestions.
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our main goal is to build a stronger table tennis community in the
              Metroplex! DFWTT is open to all ages, ethnicities, genders and
              playing levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Family Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We promote table tennis through family values, creating a
                  welcoming environment for players of all backgrounds.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence and quality in a sportsmanship
                  environment, helping players reach their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Players have the opportunity to learn skills, make lasting
                  friends, and have lots of fun in our amazing community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History & Growth Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our History & Growth
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Established 1996</h3>
                    <p className="text-gray-600">
                      DFWTT is one of the largest and well established table
                      tennis organizations in the Dallas and Fort Worth area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Multiple Locations
                    </h3>
                    <p className="text-gray-600">
                      In the past decade, DFWTT has grown from one to multiple
                      locations with excellent playing conditions and
                      tournament-quality tables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      100+ Active Players
                    </h3>
                    <p className="text-gray-600">
                      Our community has grown to over 100 active players,
                      ranging from beginners to elite players with 2000+
                      ratings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={clubScene}
                alt="DFWTT Community Playing Together"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutPartners />
      <AboutStats />

      {/* International Community Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Global Community
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our players come from all over the world, creating a diverse and
              vibrant table tennis community. No matter what level you are at,
              you will always find someone of your level to play with at our
              locations.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 font-medium">
              Fun is always our motto! 🏓
            </p>
          </div>
        </div>
      </section>

      {/* Coaching & Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coaching & Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide quality table tennis training with USATT certified
              coaches and offer instructions at all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Private Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  One-on-one coaching tailored to your specific needs and skill
                  level.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Group Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Learn with others in a fun, supportive group environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Junior Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We specialize in the development and training of junior
                  players.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">All Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  From beginners to advanced players - we have programs for
                  everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournaments & Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tournaments & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              DFWTT facilitates and organizes sanctioned and non-sanctioned
              tournaments on a regular basis. Our members have participated in
              many major national and regional table tennis tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Sanctioned Tournaments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Official USATT sanctioned tournaments with rating points and
                  rankings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Leagues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular league play for consistent competition and
                  improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Corporate Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Corporate challenge events and team building activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Places to Play Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Places to Play
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Find the perfect location to play table tennis in the Dallas-Fort
            Worth area. All our locations feature excellent lighting, flooring,
            and brand new tournament tables.
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
            More Location Details
          </a>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join DFWTT?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            If you are new to table tennis or interested in joining DFWTT,
            browse our website, give us a call, or visit us during club hours.
            We'll be happy to welcome you to our organization!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Call:</span>
              <span>214-240-5975</span>
            </div>
            <div className="hidden sm:block text-blue-300">|</div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <span>dfwtt1@gmail.com</span>
            </div>
          </div>

          <p className="mt-6 text-blue-200">
            DFWTT is the place where you can enjoy great table tennis, make new
            friends, or compete!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
