export default function AboutStats() {
  const stats = [
    {
      number: "100+",
      label: "Active Members",
      description: "Players from all skill levels",
    },
    {
      number: "28",
      label: "Years Established",
      description: "Since 1996",
    },
    {
      number: "2000+",
      label: "Elite Rating",
      description: "Top player ratings",
    },
    {
      number: "20+",
      label: "Countries Represented",
      description: "Diverse global community",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Building a stronger <span className="text-gray-500">table tennis community</span>
              <span className="text-gray-400"> in the Metroplex</span>
            </h2>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
