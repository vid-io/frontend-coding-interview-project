import { useEffect } from "react"
import { X } from "lucide-react"
import { useVideo } from "@/hooks/use-video"
import { formatDuration } from "@/lib/utils"

interface VideoModalProps {
  videoId: string
  onClose: () => void
}

export function VideoModal({ videoId, onClose }: VideoModalProps) {
  const { data: video, isLoading, error } = useVideo(videoId)

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            <div className="text-gray-700 font-medium">Loading video...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !video) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 text-center shadow-2xl max-w-md mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 text-red-500">⚠️</div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Failed to load video
          </h3>
          <p className="text-gray-500 mb-6">
            Something went wrong while loading the video details.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer font-medium"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto border border-gray-200/50">
        <div className="flex items-center justify-between p-4 border-b border-gray-200/50 bg-gradient-to-r from-gray-50 to-white">
          <h2 className="text-lg font-bold text-gray-900">Video Details</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 cursor-pointer group"
            aria-label="Close modal"
          >
            <X size={18} className="text-gray-500 group-hover:text-gray-700" />
          </button>
        </div>

        <div className="p-0">
          <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg">
              {formatDuration(video.duration)}
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                  {video.title}
                </h1>

                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="font-medium text-gray-700">
                      {video.views.toLocaleString()} views
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-600">
                      {new Date(video.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {video.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 text-xs font-medium rounded-full hover:from-blue-100 hover:to-indigo-100 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
