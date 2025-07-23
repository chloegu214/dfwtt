import type React from "react"

interface LocationCardProps {
  name: string
  address: string
  phone: string
  website: string
}

const LocationCard: React.FC<LocationCardProps> = ({ name, address, phone, website }) => {
  return (
    <div className="bg-blue-100 rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{name}</h3>
      <p className="text-blue-700 mb-1">{address}</p>
      <p className="text-blue-700 mb-1">Phone: {phone}</p>
      <a
        href={website}
        className="text-yellow-500 hover:text-yellow-700 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website
      </a>
      <div className="mt-4">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-blue-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Get Directions
        </button>
      </div>
    </div>
  )
}

export default LocationCard
