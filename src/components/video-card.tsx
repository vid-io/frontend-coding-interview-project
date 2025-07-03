import { Link } from "react-router-dom"
import type { Video } from "@/types/api"
import { formatDuration } from "@/lib/utils"

interface VideoCardProps {
  video: Video
}

const formatViews = (views: number): string => {
  if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1)}M views`
  } else if (views >= 1_000) {
    return `${(views / 1_000).toFixed(1)}K views`
  } else {
    return `${views} views`
  }
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  )

  if (diffInDays === 0) {
    return "Today"
  } else if (diffInDays === 1) {
    return "1 day ago"
  } else if (diffInDays < 30) {
    return `${diffInDays} days ago`
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30)
    return months === 1 ? "1 month ago" : `${months} months ago`
  } else {
    const years = Math.floor(diffInDays / 365)
    return years === 1 ? "1 year ago" : `${years} years ago`
  }
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/videos/${video.id}`} className="group cursor-pointer block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200/50 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 group-hover:-translate-y-1 group-hover:border-blue-200">
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
          <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-lg">
            {formatDuration(video.duration)}
          </div>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
            {video.title}
          </h3>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <span className="font-medium">{formatViews(video.views)}</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>{formatDate(video.publishedAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
