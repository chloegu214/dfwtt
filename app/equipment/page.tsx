"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Star, Zap, Target, Trophy, ShoppingCart, ExternalLink } from "lucide-react"

const brands = [
  {
    name: "Butterfly",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Premium table tennis equipment and professional gear",
    specialty: "Professional Equipment",
  },
  {
    name: "Yasaka",
    logo: "/placeholder.svg?height=80&width=120",
    description: "High-quality rubbers and blades from Sweden",
    specialty: "Rubbers & Blades",
  },
  {
    name: "Nittaku",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Japanese precision in table tennis equipment",
    specialty: "Tables & Balls",
  },
  {
    name: "STIGA",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Swedish innovation in table tennis since 1944",
    specialty: "Complete Equipment",
  },
  {
    name: "JUIC",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Japanese quality rubbers and accessories",
    specialty: "Rubbers & Glue",
  },
  {
    name: "Newgy",
    logo: "/placeholder.svg?height=80&width=120",
    description: "Leading manufacturer of table tennis robots",
    specialty: "Training Robots",
    featured: true,
  },
]

const equipmentCategories = [
  {
    title: "Paddles & Blades",
    icon: <Target className="h-6 w-6" />,
    items: ["Professional Blades", "Recreational Paddles", "Custom Assembly", "Grip Tape"],
  },
  {
    title: "Rubbers & Sheets",
    icon: <Zap className="h-6 w-6" />,
    items: ["Inverted Rubbers", "Pips-Out Rubbers", "Anti-Spin Rubbers", "Long Pips"],
  },
  {
    title: "Tables & Nets",
    icon: <Trophy className="h-6 w-6" />,
    items: ["Competition Tables", "Recreational Tables", "Net Sets", "Table Covers"],
  },
  {
    title: "Training Equipment",
    icon: <Star className="h-6 w-6" />,
    items: ["Robot Machines", "Ball Machines", "Multi-Ball Sets", "Training Aids"],
  },
]

export default function EquipmentPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  const handleBrandClick = (brandName: string) => {
    const phoneNumber = "2142405975"
    const message = `Hi Donna, I'm interested in getting the best prices for ${brandName} table tennis equipment. Can you help me?`
    const encodedMessage = encodeURIComponent(message)

    // Try to open SMS first, fallback to phone call
    const smsUrl = `sms:${phoneNumber}?body=${encodedMessage}`
    window.open(smsUrl, "_self")
  }

  const handleCallDonna = () => {
    window.open("tel:2142405975", "_self")
  }

  const handleEmailInquiry = () => {
    const subject = encodeURIComponent("Table Tennis Equipment Inquiry")
    const body = encodeURIComponent(
      "Hi Donna,\n\nI'm interested in learning more about table tennis equipment and getting the best prices. Please contact me at your earliest convenience.\n\nThank you!",
    )
    window.open(`mailto:?subject=${subject}&body=${body}`, "_self")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Table Tennis Equipment</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Professional gear at unbeatable prices</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">For Best Prices, Contact:</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">Donna Chen</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <span>(214) 240-5975</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Button onClick={handleCallDonna} className="bg-green-500 hover:bg-green-600 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={handleEmailInquiry}
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured: Newgy Robots */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-100 to-red-100 border-orange-200">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
                <CardTitle className="text-3xl text-orange-800">Featured Equipment</CardTitle>
              </div>
              <CardDescription className="text-lg text-orange-700">
                Check out the Newgy Robo-Pong Table Tennis Robots
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Newgy Robo-Pong Robot"
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">Newgy Robo-Pong Robots</h3>
                <p className="text-gray-600 mb-4">
                  Advanced training robots for players of all skill levels. Perfect your game with consistent,
                  programmable shots.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary">Programmable</Badge>
                  <Badge variant="secondary">Variable Speed</Badge>
                  <Badge variant="secondary">Spin Control</Badge>
                  <Badge variant="secondary">Professional Grade</Badge>
                </div>
              </div>
              <Button
                onClick={() => handleBrandClick("Newgy Robo-Pong")}
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-3"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Get Best Price on Newgy Robots
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Brand Logos Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Premium Brands Available</h2>
          <p className="text-center text-lg text-gray-600 mb-8">Click on any logo to inquire about the BEST prices!</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <Card
                key={brand.name}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  brand.featured ? "ring-2 ring-orange-400 bg-orange-50" : "hover:shadow-xl"
                } ${selectedBrand === brand.name ? "ring-2 ring-blue-400" : ""}`}
                onClick={() => handleBrandClick(brand.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      className="mx-auto h-20 w-auto object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{brand.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{brand.description}</p>
                  <Badge
                    variant={brand.featured ? "default" : "secondary"}
                    className={brand.featured ? "bg-orange-500" : ""}
                  >
                    {brand.specialty}
                  </Badge>
                  {brand.featured && (
                    <div className="mt-2">
                      <Badge variant="outline" className="text-orange-600 border-orange-400">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-center text-blue-600">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span className="text-sm">Click for Best Prices</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Equipment Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentCategories.map((category) => (
              <Card key={category.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3 text-blue-600">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to Upgrade Your Game?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Contact Donna Chen today for personalized equipment recommendations and unbeatable prices!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleCallDonna} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (214) 240-5975
                </Button>
                <Button
                  onClick={handleEmailInquiry}
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email Inquiry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
