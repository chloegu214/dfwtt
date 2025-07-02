import RegulationCard from "@/components/regulation-card"
import RegulationTimeline from "@/components/regulation-timeline"
import Link from "next/link"
import { Shield, AlertTriangle, Beaker, FileText, ExternalLink, CheckCircle, XCircle, Heart, Scale } from "lucide-react"

const prohibitedItems = [
  "Boosters (tuners, enhancers, improvers)",
  "Any chemical treatment of rubber",
  "Physical modification of covering material",
  "Products that change friction properties",
  "Substances that alter surface structure",
  "Materials that modify color or appearance",
]

const requiredPractices = [
  "Air new rubber outside plastic bag for 72+ hours before gluing",
  "Use only water-based glue or PSAs (Pressure Sensitive Adhesives)",
  "Always carry a spare racket if possible",
  "Ensure racket thickness does not exceed 4.00mm anywhere",
  "Keep racket free of volatile compounds (VCs)",
  "Use only ITTF-authorized covering materials",
]

const testingDevices = [
  {
    name: "enez Device",
    description: "Primary testing device that detects volatile compounds and shows red light when levels are too high",
    sensitivity: "Standard",
  },
  {
    name: "RAE Device",
    description: "Backup testing device with higher sensitivity for detecting boosters and volatile compounds",
    sensitivity: "High",
  },
]

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Table Tennis Regulations</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Official ITTF rules and regulations for equipment, serving, and tournament play. Stay compliant and play
              clean.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-red-100 text-sm">
                <strong>Source:</strong> International Table Tennis Federation (ITTF) Official Regulations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Alert */}
      <section className="py-8 bg-red-50 border-b border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-red-800">
            <AlertTriangle className="h-6 w-6" />
            <p className="font-medium text-center">
              <strong>Important:</strong> All booster products are banned effective September 1, 2008. Violation may
              result in disqualification.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Regulations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Regulations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ITTF Law 2.4.7 and related equipment standards that all players must follow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <RegulationCard title="Booster Ban - ITTF Law 2.4.7" type="danger">
                <div className="space-y-4">
                  <p className="font-medium">
                    <strong>Effective Date:</strong> September 1, 2008
                  </p>
                  <p>
                    The covering material should be used as it has been authorized by the ITTF{" "}
                    <strong>without any physical, chemical or other treatment</strong> changing or modifying:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Playing properties</li>
                    <li>Friction characteristics</li>
                    <li>Outlook or appearance</li>
                    <li>Color</li>
                    <li>Structure</li>
                    <li>Surface texture</li>
                  </ul>
                  <p className="text-sm bg-red-100 p-3 rounded-lg">
                    <strong>This means an absolute ban for the use of boosters</strong> (tuners, enhancers, improvers,
                    etc.)
                  </p>
                </div>
              </RegulationCard>

              <RegulationCard title="Health & Safety Concerns" type="warning">
                <div className="space-y-3">
                  <p>
                    <strong>Health Risks:</strong> Boosters are generally bad for your health, even containing poison in
                    some cases.
                  </p>
                  <p>
                    <strong>False Claims:</strong> Be skeptical of products claiming to be:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Harmless or safe</li>
                    <li>Allowed by ITTF</li>
                    <li>Without volatile compounds (VC)</li>
                  </ul>
                  <p className="text-sm">
                    <strong>Reality:</strong> Boosters represent a messy, time-consuming, costly, unhealthy, and now
                    illegal way of achieving spin and speed.
                  </p>
                </div>
              </RegulationCard>
            </div>

            <div className="space-y-6">
              <RegulationCard title="Thickness Regulations" type="info">
                <div className="space-y-3">
                  <p>
                    <strong>Maximum Thickness:</strong> 4.00mm total
                  </p>
                  <p>
                    <strong>Technical Leaflet T4:</strong> "On no part of the playing surface on a racket covering
                    should this be exceeded"
                  </p>
                  <p>
                    <strong>Testing:</strong> More strict enforcement with accurate measuring equipment
                  </p>
                  <p className="text-sm bg-blue-100 p-3 rounded-lg">
                    According to ITTF tests, there is no way that a sponge can be treated separate from the covering.
                  </p>
                </div>
              </RegulationCard>

              <RegulationCard title="Legal Alternatives" type="success">
                <div className="space-y-3">
                  <p>
                    <strong>Better Ways Exist:</strong> Other and better ways exist for achieving spin and speed without
                    illegal boosters.
                  </p>
                  <p>
                    <strong>Focus On:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Proper technique development</li>
                    <li>Quality ITTF-approved equipment</li>
                    <li>Professional coaching</li>
                    <li>Regular practice and training</li>
                  </ul>
                </div>
              </RegulationCard>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Procedures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Beaker className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tournament Testing Procedures</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding how equipment is tested at tournaments to ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Beaker className="h-5 w-5 text-blue-600" />
                Testing Devices
              </h3>
              <div className="space-y-4">
                {testingDevices.map((device, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{device.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          device.sensitivity === "High" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {device.sensitivity} Sensitivity
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{device.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <RegulationTimeline />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Prohibited Items
              </h3>
              <ul className="space-y-2">
                {prohibitedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Required Practices
              </h3>
              <ul className="space-y-2">
                {requiredPractices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Serving */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Serving Requirements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proper serving technique is essential for legal play and tournament compliance.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Detailed Serving Instructions</h3>
            <p className="text-blue-800 mb-6">
              Complete step-by-step serving instructions and video demonstrations are available to help you master legal
              serving technique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/spectators-guide"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <FileText className="h-5 w-5" />
                View Serving Rules
              </Link>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Watch Video Tutorial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Player Responsibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <Scale className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Player Responsibility</h2>
            <div className="text-blue-100 mb-8 text-lg space-y-4">
              <p>
                <strong>Remember:</strong> You as a player are responsible for using a clean racket, i.e. without VC and
                with the correct thickness.
              </p>
              <p>You may be detected and disqualified in a tournament if using illegal equipment or substances.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <Heart className="h-8 w-8 mx-auto mb-3 text-red-300" />
              <h3 className="text-xl font-bold mb-3">Clean Sport Initiative</h3>
              <p className="text-blue-100">
                We are all working for a <strong>Clean Sport</strong>, and we wish you to enjoy our game even better
                now.
              </p>
              <p className="text-sm text-blue-200 mt-2">- Odd Gustavsen, Chairman ITTF Equipment Committee</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join-us"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Join DFWTT
              </Link>
              <Link
                href="/coaching"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Learn Proper Techniques
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
