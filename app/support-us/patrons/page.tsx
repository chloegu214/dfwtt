import DonationCard from "@/components/donation-card";
import CharityStats from "@/components/charity-stats";
import {
  Heart,
  Users,
  DollarSign,
  Handshake,
  Globe,
  Shield,
} from "lucide-react";

const donationHistory = [
  {
    year: "2025",
    donations: [
       {
        amount: "150",
        organization: "American Red Cross",
        cause: "Where It Is Needed Most",
      },     
      { amount: "140", organization: "Dallas Chinese Community Center" },      
      {
        amount: "170",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
      {
        amount: "180",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
    ],
    totalAmount: 640,
  },
  {
    year: "2024",
    donations: [
      {
        amount: "176",
        organization: "American Red Cross",
        cause: "Service to the Armed Forces",
      },
      { amount: "150", organization: "Dallas Chinese Community Center" },
      {
        amount: "160",
        organization: "Welcome.US",
        cause: "Supporting those seeking refuge in the U.S.",
      },
    ],
    totalAmount: 486,
  },
  {
    year: "2023",
    donations: [
      {
        amount: "190",
        organization: "American Red Cross",
        cause: "Where It Is Needed Most",
      },
      { amount: "186", organization: "Dallas Chinese Community Center" },
    ],
    totalAmount: 376,
  },
  {
    year: "2022",
    donations: [
      { amount: "150", organization: "UNICEF", cause: "Children of Ukraine" },
      { amount: "207", organization: "Dallas Chinese Community Center" },
      {
        amount: "45",
        organization: "Sportfist",
        cause: "Online table tennis tournament software",
      },
      {
        amount: "200",
        organization: "Take UTD Table Tennis Club to Nationals!",
      },
    ],
    totalAmount: 602,
  },
  {
    year: "2021",
    donations: [
      {
        amount: "130",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
      {
        amount: "170",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
    ],
    totalAmount: 300,
  },
  {
    year: "2020",
    donations: [
      {
        amount: "1000",
        organization: "First Responders",
        cause: "$500 to Police and $500 to Firefighters",
      },
    ],
    totalAmount: 1000,
  },
  {
    year: "2019",
    donations: [
      { amount: "172", organization: "American Red Cross" },
      { amount: "167.98", organization: "Dallas Chinese Community Center" },
      {
        amount: "234",
        organization: "Sportfist",
        cause: "Online table tennis tournament software",
      },
      { amount: "175.10", organization: "Homes For Our Troops (HFOT)" },
      {
        amount: "500",
        organization: "Assist the Officer Foundation (ATO)",
        cause: "Dallas Police Association",
      },
      {
        amount: "500",
        organization: "Dallas Fire Fighters Association Local 58 Relief Fund",
      },
    ],
    totalAmount: 1749.08,
  },
  {
    year: "2018",
    donations: [
      {
        amount: "158",
        organization: "American Red Cross",
        cause: "California Wildfires",
      },
      { amount: "157.49", organization: "Dallas Chinese Community Center" },
      { amount: "150", organization: "Shared Hope International" },
      { amount: "198", organization: "Alan Chu", cause: "First Full-Marathon" },
      {
        amount: "500",
        organization: "Assist the Officer Foundation (ATO)",
        cause: "Dallas Police Association",
      },
      {
        amount: "500",
        organization: "Dallas Fire Fighters Association Local 58 Relief Fund",
      },
    ],
    totalAmount: 1663.49,
  },
  {
    year: "2017",
    donations: [
      { amount: "200", organization: "Dallas Chinese Community Center" },
      {
        amount: "198",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
      {
        amount: "112",
        organization: "Texas Table Tennis Fundraising Campaign",
      },
      {
        amount: "214",
        organization: "National Fallen Firefighters Foundation",
      },
    ],
    totalAmount: 724,
  },
  {
    year: "2016",
    donations: [
      {
        amount: "208",
        organization: "National Fallen Firefighters Foundation",
      },
      { amount: "210", organization: "Dallas Chinese Community Center" },
      {
        amount: "200",
        organization: "American Red Cross",
        cause: "Canada Wildfires",
      },
    ],
    totalAmount: 618,
  },
  {
    year: "2015",
    donations: [
      {
        amount: "250",
        organization: "American Red Cross",
        cause: "European Refugee and Migration Crisis",
      },
      { amount: "200", organization: "Dallas Chinese Community Center" },
      {
        amount: "200",
        organization: "National Fallen Firefighters Foundation",
      },
      { amount: "250", organization: "USATT Annual Giving Campaign" },
    ],
    totalAmount: 900,
  },
  {
    year: "2014",
    donations: [
      {
        amount: "168",
        organization: "National Fallen Firefighters Foundation",
      },
      { amount: "200", organization: "Dallas Chinese Community Center" },
      {
        amount: "190",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
      {
        amount: "250",
        organization: "USATT Annual Giving Campaign",
        cause: "including $20 from Warren Lemma",
      },
    ],
    totalAmount: 808,
  },
  {
    year: "2013",
    donations: [
      {
        amount: "200",
        organization: "American Red Cross",
        cause: "Typhoon Appeal & Disaster Response",
      },
      { amount: "200", organization: "Dallas Chinese Community Center" },
      {
        amount: "170",
        organization: "National Fallen Firefighters Foundation",
        cause: "Yarnell Hill Fire Hero Fund",
      },
      { amount: "262", organization: "USATT Annual Giving Campaign" },
      {
        amount: "100",
        organization: "Rainbow Days Inc",
        cause: "Kids School Program",
      },
    ],
    totalAmount: 932,
  },
  {
    year: "2012",
    donations: [
      {
        amount: "202",
        organization: "American Red Cross",
        cause: "Hurricane Sandy Relief",
      },
      {
        amount: "120",
        organization: "Cimarron Rec Center",
        cause: "American Heart Association",
      },
      {
        amount: "162",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
    ],
    totalAmount: 484,
  },
  {
    year: "2011",
    donations: [
      {
        amount: "140",
        organization: "Rainbow Days Inc",
        cause: "Kids School Program",
      },
      { amount: "200", organization: "Dallas Chinese Community Center" },
      {
        amount: "143",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
      {
        amount: "224",
        organization: "American Red Cross",
        cause: "Disaster Relief Fund",
      },
      {
        amount: "100",
        organization: "Rainbow Days Inc",
        cause: "Kids School Program",
      },
      {
        amount: "100",
        organization: "FNDR Foundation",
        cause: "Kids Education",
      },
    ],
    totalAmount: 907,
  },
  {
    year: "2010",
    donations: [
      {
        amount: "316",
        organization: "Taiwan Typhoon Relief",
        cause: "School Reconstruction",
      },
      {
        amount: "100",
        organization: "Rainbow Days",
        cause: "Dallas Kids Reading Program",
      },
      {
        amount: "180",
        organization: "FNDR Foundation",
        cause: "Kids Education",
      },
      { amount: "300", organization: "ITTF's Goodwill Fund for Project Haiti" },
    ],
    totalAmount: 896,
  },
  {
    year: "2009-2007",
    donations: [
      {
        amount: "2142",
        organization: "Multiple Organizations",
        cause:
          "FNDR Foundation, Rainbow Days Inc, China Earthquake Relief, Children Education Fund",
      },
    ],
    totalAmount: 2142,
  },
];

const causeCategories = [
  {
    icon: <Shield className="h-6 w-6 text-red-600" />,
    title: "Disaster Relief",
    description:
      "Supporting communities affected by natural disasters and emergencies",
    color: "red",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "First Responders",
    description:
      "Honoring police officers, firefighters, and emergency personnel",
    color: "blue",
  },
  {
    icon: <Heart className="h-6 w-6 text-pink-600" />,
    title: "Children & Education",
    description: "Supporting youth programs and educational initiatives",
    color: "pink",
  },
  {
    icon: <Globe className="h-6 w-6 text-green-600" />,
    title: "Global Causes",
    description: "International humanitarian aid and refugee support",
    color: "green",
  },
];

export default function PatronsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DFWTT Charitable Giving
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Every tournament participant contributes to charity through our $2
              donation program. Together, we've donated{" "}
              <span className="font-bold text-yellow-300">$15,187.57</span> to
              support communities in need.
            </p>

            {/* In the future we can uncomment this line to link with google form */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Join a Tournament
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Charity Program Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and impactful - every tournament entry
              automatically contributes to charity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Participate in Tournaments
              </h3>
              <p className="text-gray-600">
                Join any DFWTT tournament and automatically contribute $2 to our
                charity fund with your entry fee.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Funds Are Collected
              </h3>
              <p className="text-gray-600">
                We collect $2 from each participant and carefully track all
                contributions throughout the year.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Donations Are Made
              </h3>
              <p className="text-gray-600">
                Funds are donated to carefully selected non-profit organizations
                addressing critical community needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Stats */}
      <CharityStats />

      {/* Cause Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Causes We Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our donations support a wide range of causes, from local community
              needs to international humanitarian efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causeCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`bg-${category.color}-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Donation History
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete record of our charitable giving from 2007 to present,
              showing our commitment to community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationHistory.map((yearData, index) => (
              <DonationCard key={index} {...yearData} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Every time you participate in a DFWTT tournament, you're not just
            playing table tennis - you're making a difference in your community
            and beyond.
          </p>
          {/* uncomment if any upcoming Tournaments */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              View Upcoming Tournaments
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
