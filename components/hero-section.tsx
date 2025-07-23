import { FaEnvelope, FaPhone } from "react-icons/fa"

const HeroSection = () => {
  return (
    <div className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Your Trusted Partner for <span className="text-yellow-400">Innovative Solutions</span>
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              We deliver cutting-edge technology and expert services to help your business thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-semibold py-3 px-6 rounded-md">
                Get Started
              </button>
              <button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent py-3 px-6 rounded-md border-2">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-700">
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-yellow-400" size={20} />
              <span className="text-blue-100">info@example.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2 text-yellow-400" size={20} />
              <span className="text-blue-100">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  )
}

export default HeroSection
