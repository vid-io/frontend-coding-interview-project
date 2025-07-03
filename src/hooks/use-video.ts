import { useQuery } from "@tanstack/react-query"
import type { ApiResponse, Video } from "@/types/api"

const fetchVideo = async (id: string): Promise<Video> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/videos/${id}`)

  if (!response.ok) throw new Error("Failed to fetch video")

  const data: ApiResponse<Video> = await response.json()

  if (!data.success || !data.data) {
    throw new Error(data.message || "Video not found")
  }

  return data.data
}

export const useVideo = (id: string) => {
  return useQuery({
    queryKey: ["video", id],
    queryFn: () => fetchVideo(id),
    enabled: !!id,
  })
}
