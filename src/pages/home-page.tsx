import { useParams, useNavigate } from "react-router-dom"
import { VideoGrid } from "@/components/video-grid"
import { VideoModal } from "@/components/video-modal"
import { useVideos } from "@/hooks/use-videos"

export function HomePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data: videos, isLoading, error } = useVideos()

  const handleCloseModal = () => {
    navigate("/")
  }

  return (
    <div className="min-h-svh bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/vidiq-logo.jpg"
                alt="vidIQ Logo"
                className="w-10 h-10 rounded-xl shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  vidIQ Optimize
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  AI-powered video optimization platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <VideoGrid
          videos={videos || []}
          isLoading={isLoading}
          error={error}
        />
      </main>

      {id && <VideoModal videoId={id} onClose={handleCloseModal} />}
    </div>
  )
}
