import { Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/home-page"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/videos/:id" element={<HomePage />} />
    </Routes>
  )
}

export default App
