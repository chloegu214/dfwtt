import MediaCard from "@/components/media-card"
import ActivityCard from "@/components/activity-card"
import Link from "next/link"
import {
  Users,
  Heart,
  Award,
  Newspaper,
  Handshake,
  School,
  Building,
  Church,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react"

const mediaArticles = [
  {
    date: "June 2009",
    publication: "The Dallas Morning News",
    title: "Ping pong makes a come back with edge",
    description:
      "Our Daniel Rutenberg was highlighted and quoted throughout the article. The premise was that table tennis is making a huge comeback because it is fun and inexpensive sport to play, especially in economic times. Club members Don Isgitt and Adam Moussa were also featured and photographed, covering the 2009 Spring Tournament.",
    url: "http://www.dallasnews.com/sharedcontent/dws/fea/lifetravel/stories/DN-nh_pingpong_0616gd.ART.State.Edition1.18c9605.html",
    featured: true,
  },
  {
    date: "August 2008",
    publication: "Star Telegram",
    title: "Olympian pursuits: You too can take up a sanctioned sport table tennis",
    description:
      "Feature article highlighting table tennis as an accessible Olympic sport that anyone can participate in, showcasing DFWTT's role in the community.",
    url: "http://www.star-telegram.com/147/story/814063.html",
  },
  {
    date: "July 2008",
    publication: "The Dallas Morning News",
    title: "Dallas-Fort Worth table tennis players head to U.S. Open",
    description:
      "Interview with Daniel Rutenberg about local players competing at the national level, highlighting the competitive excellence within DFWTT.",
    url: "http://www.dallasnews.com/sharedcontent/dws/news/localnews/stories/070408dnmetpingpong.1c418ef8.html",
  },
  {
    date: "August 2007",
    publication: "The Dallas Morning News",
    title: "A Guide to Dallas participatory sports",
    description:
      "Sports enthusiasts can find just about any game in Dallas, featuring table tennis and DFWTT as a key part of the local sports community.",
    url: "http://www.dallasnews.com/sharedcontent/dws/fea/travel/comingtodallas/stories/DN-DFW_partsports_0810dfw.ART.Central.Edition1.3b3c046.html",
  },
]

const communityActivities = [
  {
    title: "NAS JRB Library Summer Reading Program",
    location: "Naval Air Station Joint Reserve Base Library",
    date: "July 18, 2008",
    description:
      "Coach/Founder Donna Chen and Coach Scott Ryan visited the NAS JRB Library. Children in the summer reading program 'Get In The Game, READ!' were treated to a table tennis demonstration plus hands-on instruction. Over thirty children benefited from their expertise and knowledge.",
    participants: 30,
    type: "special" as const,
    featured: true,
  },
]

const exhibitionTypes = [
  {
    icon: <School className="h-8 w-8 text-blue-600" />,
    title: "School Programs",
    description: "Educational demonstrations and clinics at elementary, middle, and high schools",
    locations: "Various schools throughout DFW",
  },
  {
    icon: <Building className="h-8 w-8 text-green-600" />,
    title: "Shopping Mall Events",
    description: "Public exhibitions to introduce table tennis to families and shoppers",
    locations: "Major shopping centers in the metroplex",
  },
  {
    icon: <Church className="h-8 w-8 text-purple-600" />,
    title: "Community Centers",
    description: "Clinics and demonstrations at churches and community organizations",
    locations: "Churches and community centers",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "Special Events",
    description: "Custom exhibitions for corporate events, festivals, and special occasions",
    locations: "Various venues as requested",
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Outreach</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              DFWTT is deeply committed to promoting table tennis throughout the Dallas-Fort Worth metroplex through
              exhibitions, clinics, and community partnerships. We bring the sport to schools, malls, churches, and
              anywhere people gather.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Request an Exhibition
              </button>
              <Link
                href="/news"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-medium transition-colors inline-block text-center"
              >
                View Recent Activities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to community outreach has touched thousands of lives across the metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Schools Visited</div>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-600">People Reached</div>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Exhibitions Held</div>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exhibition & Clinic Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              DFWTT conducts exhibitions and clinics at schools, shopping malls, churches, and pretty much any open
              places to promote table tennis in the metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {exhibitionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                <p className="text-xs text-gray-500">{type.locations}</p>
              </div>
            ))}
          </div>

          {/* Request Exhibition CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Request an Exhibition or Clinic</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Interested in having DFWTT conduct a table tennis exhibition or clinic at your school, church, or
              organization? Contact us to discuss how we can bring the excitement of table tennis to your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-purple-100">
                <Phone className="h-5 w-5" />
                <span>214-240-5975</span>
              </div>
              <div className="flex items-center gap-2 text-purple-100">
                <Mail className="h-5 w-5" />
                <span>dfwtt1@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Community Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Community Activities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highlights from our community outreach efforts and special programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {communityActivities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Recognition */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our community efforts are powered by dedicated volunteers who share our passion for table tennis.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="bg-yellow-100 p-4 rounded-full flex-shrink-0">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">USATT Volunteer Coach of the Year - 2005</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In 2005, USATT and USOC recognized and awarded our Daniel Rutenberg as the{" "}
                  <strong>Volunteer Coach of the Year</strong>. This prestigious award recognized his dedication to
                  promoting table tennis through countless exhibitions and free clinics in schools, shopping malls, and
                  other community venues.
                </p>
                <p className="text-gray-600 text-sm">
                  This recognition highlights DFWTT's commitment to community service and the impact our volunteers make
                  in promoting table tennis throughout the metroplex.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <Handshake className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Join Our Volunteer Team</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Most of our community activities are run with the help of volunteers! If you want to help or volunteer for
              future activities, please contact us. We couldn't do it without volunteers - Thank you!
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Newspaper className="h-12 w-12 mx-auto mb-4 text-gray-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Coverage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From time to time the media has shown interest in what DFWTT does for the table tennis community in the
              metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mediaArticles.map((article, index) => (
              <MediaCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn More About Table Tennis</h2>
          <p className="text-lg text-gray-600 mb-8">
            New to table tennis or want to learn more about the sport? Check out our spectator's guide to better
            understand and appreciate this exciting Olympic sport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Spectators Guide to Table Tennis
            </button>
            <Link
              href="/news"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Visit News & Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
