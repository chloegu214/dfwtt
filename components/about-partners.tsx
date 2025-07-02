import Image from "next/image"

const partners = [
  { name: "USA Table Tennis", logo: "/placeholder.svg?height=60&width=120" },
  { name: "ITTF", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Texas Table Tennis", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Olympic Committee", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Youth Sports", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Community Center", logo: "/placeholder.svg?height=60&width=120" },
]

export default function AboutPartners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Affiliated Organizations</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
