import Link from "next/link";
import { Calendar, Archive, ExternalLink, Camera, Trophy } from "lucide-react";

const currentNews = [
   {
    date: "November 15, 2025",
    title: "2025 DFWTT Fall Open",
    content:
      "DFWTT hosted its yearly Fall Open on November 15th. The tournament was held in Irving at the Cimarron Recreation Center and raised $150 for the American Red Cross - Where It Is Needed Most Fund.",
    category: "Tournament",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/c/acd8701c94f053f8/EopOseb5FqJIobSw_P5X_0wBFwKY-U8BoKbWMXo0LxOU2w?e=fxK3rv" },
    ],
  }, 
  {
    date: "September 27, 2025",
    title: "2025 Chinese Double Ten",
    content:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament on September 27th at the Irving Cimarron Recreation Center. The tournament raised $140 to the Dallas Chinese Community Center.",
    category: "Tournament",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/c/acd8701c94f053f8/Ej6Whiv3_v5GukUr2Xppfv8BgHxA6U8tk3x7GN-bief9tA?e=vQTeTL" },
    ],
  }, 
  {
    date: "September 6, 2025",
    title: "2025 Dallas Golden Games",
    content:
      "DFWTT hosted the Dallas Golden Games Table Tennis Tournament on September 6th at the Marcus Recreation Center in Dallas. This event is part of the Dallas Park and Recreation's Golden Games which includes various competitive sports and games for adults ages 50 and up.",
    category: "Tournament",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/c/acd8701c94f053f8/EhEummqAirZDuLaKZS1NQlgBcmecO2mhAPFyy8K0Mu4DNQ?e=t6ty3K" },
    ],
  },  
  {
    date: "June 15, 2025",
    title: "Special Training Program with Coach Seth Pech",
    content:
      "DFWTT is privileged to have Seth Pech, a professional table tennis athlete and coach (USATT 2500+) known from his YouTube Channel PechPong. Seth will be coaching at DFW clubs for four months (April-August), bringing professional experience from Germany and Sweden.",
    category: "Training",
    hasPhotos: true,
  },
  {
    date: "June 14, 2025",
    title: "2025 DFWTT Summer Open",
    content:
      "DFWTT hosted its Summer Open on June 14th at the Cimarron Recreation Center in Irving. The tournament raised $170 for the American Red Cross Disaster Relief Fund.",
    category: "Tournament",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://1drv.ms/f/c/acd8701c94f053f8/El8ezZL6Ck9CsqmW_NV_pLEBRpNTjPuKHhzNbAluW6OjtQ?e=h8SN9f",
      },
    ],
  },
  {
    date: "April 6, 2025",
    title: "2025 NCTTA Championships",
    content:
      "The 2025 NCTTA Championships were held in Rockford, Illinois on April 3-6th. Information and results available on the NCTTA website.",
    category: "Championship",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://1drv.ms/f/s!AvhT8JQccNiskfUeauh7wJT7STPibQ?e=UyMaYG",
      },
      { text: "NCTTA Website", url: "http://www.nctta.org" },
    ],
  },
  {
    date: "April 3, 2025",
    title: "2025 World University Games Trials",
    content:
      "Collegiate National Team trials were held in Rockford, Illinois on April 3rd, determining five WUG team positions for the upcoming event in Rhine-Ruhr, Germany.",
    category: "Competition",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://1drv.ms/f/s!AvhT8JQccNiskfUdY5PbUXFKiiBjQw?e=wSHZDr",
      },
      {
        text: "NCTTA Article",
        url: "http://www.nctta.org/content/opening-world-university-games-trials-kick-nctta-championships-explosive-style",
      },
    ],
  },
  {
    date: "March 29, 2025",
    title: "2025 DFWTT School Challenge",
    content:
      "The DFWTT School Challenge was held on March 29th at the Marcus Recreation Center. This served as a qualifying event for the AYTTO 2025 Scholastic National Championship.",
    category: "Youth",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://photos.app.goo.gl/i5Vs2tdH1ECHCytg8" },
    ],
  },
  {
    date: "March 22, 2025",
    title: "2025 DFWTT Spring Open Success",
    content:
      "DFWTT hosted its Spring Open on March 22nd at the Cimarron Recreation Center, raising $180 for the American Red Cross Disaster Relief Fund.",
    category: "Tournament",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://1drv.ms/f/s!AvhT8JQccNiskd0IooDhNIPDRqueWQ?e=8EdMEj",
      },
    ],
  },
];

const archiveYears = [
  { year: "2024", count: 12 },
  { year: "2023", count: 15 },
  { year: "2022", count: 8 },
  { year: "2021", count: 7 },
  { year: "2020", count: 4 },
  { year: "2019", count: 11 },
  { year: "2018", count: 9 },
  { year: "2017", count: 14 },
  { year: "2016", count: 8 },
  { year: "2015", count: 10 },
  { year: "2014", count: 16 },
  { year: "2013", count: 15 },
  { year: "2012", count: 13 },
  { year: "2011", count: 12 },
  { year: "2010", count: 11 },
  { year: "2009", count: 15 },
  { year: "2008", count: 12 },
  { year: "2007", count: 11 },
  { year: "2006", count: 13 },
  { year: "2005", count: 12 },
];

const categoryColors = {
  Training: "bg-purple-100 text-purple-800",
  Tournament: "bg-blue-100 text-blue-800",
  Championship: "bg-yellow-100 text-yellow-800",
  Competition: "bg-green-100 text-green-800",
  Youth: "bg-pink-100 text-pink-800",
  League: "bg-indigo-100 text-indigo-800",
  Charity: "bg-red-100 text-red-800",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DFWTT News & Updates
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay up to date with the latest tournaments, training programs,
              and community events from Dallas Fort Worth Table Tennis.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
            <div className="flex gap-4">
              <Link
                href="/news/archive"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Archive className="h-4 w-4" />
                View Archive
              </Link>
              <Link
                href="/news/memories"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Calendar className="h-4 w-4" />
                Memories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current News */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {currentNews.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          categoryColors[item.category] ||
                          "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {item.hasPhotos && (
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Camera className="h-3 w-3" />
                        Photos
                      </span>
                    )}
                    {item.hasResults && (
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Trophy className="h-3 w-3" />
                        Results
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.content}
                </p>

                {item.links && (
                  <div className="flex flex-wrap gap-3">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target={
                          link.url.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          link.url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        {link.text}
                        {link.url.startsWith("http") && (
                          <ExternalLink className="h-3 w-3" />
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              News Archive
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our complete news archive spanning over a decade of
              DFWTT history.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {archiveYears.map((archive) => (
              <Link
                key={archive.year}
                href={`/news/archive/${archive.year}`}
                className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 text-center transition-colors group"
              >
                <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                  {archive.year}
                </div>
                <div className="text-xs text-gray-500">
                  {archive.count} articles
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
