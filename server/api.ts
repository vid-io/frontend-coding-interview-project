import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import type { ApiResponse, Video } from "@/types/api"
import { mockVideos } from "./mock-videos"

dotenv.config({ path: ".env.local" })

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get("/api/videos", (_req, res) => {
  const response: ApiResponse<Video[]> = {
    success: true,
    data: mockVideos,
    timestamp: new Date().toISOString(),
  }
  res.json(response)
})

app.get("/api/videos/:id", (req, res) => {
  const { id } = req.params
  const video = mockVideos.find(videoObj => videoObj.id === id)

  if (!video) {
    const response: ApiResponse<null> = {
      success: false,
      message: "Video not found",
      timestamp: new Date().toISOString(),
    }
    res.status(404).json(response)
    return
  }

  const response: ApiResponse<Video> = {
    success: true,
    data: video,
    timestamp: new Date().toISOString(),
  }
  res.json(response)
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
