import { VideoCard } from "@/components/video-card"
import { VideoGridSkeleton } from "@/components/video-card-skeleton"
import type { Video } from "@/types/api"

interface VideoGridProps {
  videos: Video[]
  isLoading: boolean
  error: Error | null
}

export function VideoGrid({ videos, isLoading, error }: VideoGridProps) {
  if (isLoading) return <VideoGridSkeleton count={50} />

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
          <div className="w-10 h-10 text-red-500">⚠️</div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Failed to load videos
        </h3>
        <p className="text-gray-600 text-center max-w-md leading-relaxed">
          Something went wrong while loading the videos. Please try refreshing
          the page or check your connection.
        </p>
        <div className="mt-6 px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{error.message}</p>
        </div>
      </div>
    )
  }

  if (!videos || videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
          <div className="w-10 h-10 text-gray-400">📹</div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          No videos available
        </h3>
        <p className="text-gray-600 text-center max-w-md leading-relaxed">
          There are no videos to display at the moment.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-1">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="animate-in fade-in-0 slide-in-from-bottom-4"
          style={{
            animationDelay: `${Math.min(index * 50, 500)}ms`,
            animationFillMode: "both",
          }}
        >
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  )
}
