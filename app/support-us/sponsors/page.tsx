import SponsorCard from "@/components/sponsor-card";
import {
  Phone,
  Mail,
  Users,
  Trophy,
  Target,
  Heart,
  Handshake,
  Star,
} from "lucide-react";

const currentSponsors = [
  {
    name: "DFW Chinese Double Ten Celebration Committee",
    description:
      "Supporting cultural exchange and community events through table tennis programs and tournaments.",
    partnership: "Cultural Events & Tournament Support",
    since: "2015",
    tier: "gold" as const,
    website: "https://sites.google.com/view/dfwdoubletenth",
  },
  {
    name: "Taiwanese Chamber of Commerce - Dallas/Fort Worth",
    description:
      "Promoting business networking and community development through sports and cultural activities.",
    partnership: "Business Community Outreach",
    since: "2018",
    tier: "gold" as const,
    website: "https://gdtcc.net/",
  },
];

const sponsorshipValues = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Community Impact",
    description:
      "Support a diverse community of 100+ active players from over 20 countries",
  },
  {
    icon: <Trophy className="h-8 w-8 text-blue-600" />,
    title: "Tournament Excellence",
    description:
      "Sponsor sanctioned tournaments that attract players from across Texas and beyond",
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Youth Development",
    description:
      "Help develop the next generation of table tennis players through our junior programs",
  },
  {
    icon: <Heart className="h-8 w-8 text-blue-600" />,
    title: "Community Service",
    description:
      "Support charitable initiatives like our American Red Cross fundraising efforts",
  },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Partner with DFWTT
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join our community of sponsors who support table tennis excellence
              in Dallas-Fort Worth. Your partnership helps us provide better
              programs, tournaments, and community outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor DFWTT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Sponsor DFWTT?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sponsors are a vital part of our program, providing not only
              financial support but community engagement through participation
              and donations of goods and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipValues.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Valued Sponsors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're grateful for our current sponsors who help make our programs
              and tournaments possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {currentSponsors.map((sponsor, index) => (
              <SponsorCard key={index} {...sponsor} />
            ))}
          </div>

          {/* Sponsor Recognition */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You to Our Sponsors
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our sponsors enable us to run better programs, tournaments, and
              leagues while building a stronger table tennis community in the
              Metroplex. Their support goes beyond financial contributions to
              include community engagement and valuable partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sponsorship Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how sponsor support directly benefits our community and
              programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                $5,000+
              </div>
              <div className="text-gray-600 mb-4">Raised for Charity</div>
              <p className="text-sm text-gray-500">
                Annual donations to American Red Cross through tournament
                proceeds
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 mb-4">Youth Players Supported</div>
              <p className="text-sm text-gray-500">
                Junior development programs made possible by sponsor support
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600 mb-4">Annual Tournaments</div>
              <p className="text-sm text-gray-500">
                Sanctioned tournaments hosted with sponsor backing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Become a Sponsor?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact us today to discuss sponsorship opportunities and learn how
            your organization can support table tennis in the Dallas-Fort Worth
            community.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <div className="font-semibold">Donna Chen</div>
                <span>•</span>
                <div>Sponsorship Coordinator</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
