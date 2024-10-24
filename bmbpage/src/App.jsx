import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./homepage/Homepage"
import Blog from "./blog/Blog"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={ <Blog /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
