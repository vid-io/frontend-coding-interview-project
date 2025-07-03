export type Video = {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: number // Duration in seconds
  views: number
  publishedAt: string
  tags: string[]
}

export type ApiResponse<T> = {
  success: boolean
  data?: T
  message?: string
  timestamp: string
}

