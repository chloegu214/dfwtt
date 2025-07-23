import type React from "react"

interface NewsCardProps {
  title: string
  description: string
  imageUrl: string
  date: string
  source: string
  category?: string
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, imageUrl, date, source, category }) => {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl || "/placeholder.svg"} alt={title} />
      <div className="p-4">
        {category && (
          <span className="inline-block bg-yellow-200 text-yellow-800 text-sm font-semibold px-2 py-1 rounded-full mb-2">
            {category}
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            {date} | {source}
          </p>
          {/* You can add a "Read More" link here if needed */}
        </div>
      </div>
    </div>
  )
}

export default NewsCard
