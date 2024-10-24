import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./homepage/Homepage"
import Blog from "./blog/Blog"
import About from "./about/About"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
