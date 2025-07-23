import { ExternalLink, Calendar, Newspaper } from "lucide-react"

interface MediaCardProps {
  date: string
  publication: string
  title: string
  description: string
  url?: string
  featured?: boolean
}

export default function MediaCard({ date, publication, title, description, url, featured = false }: MediaCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 ${
        featured ? "ring-2 ring-blue-500" : ""
      }`}
    >
      {featured && (
        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block">
          Featured Coverage
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
          <Newspaper className="h-6 w-6 text-blue-600" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
            <span>•</span>
            <span className="font-medium text-blue-600">{publication}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              <span>Read Full Article</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
