import { useQuery } from "@tanstack/react-query"
import type { ApiResponse, Video } from "@/types/api"

const fetchVideos = async (): Promise<Video[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/videos`)

  if (!response.ok) throw new Error("Failed to fetch videos")

  const data: ApiResponse<Video[]> = await response.json()

  return data.data || []
}

export const useVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
  })
}
