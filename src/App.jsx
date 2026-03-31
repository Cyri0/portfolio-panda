import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to={""}>🏠</Link>
        <Link to={"/projects"}>💻</Link>
        <Link to={"/contact"}>📧</Link>
      </nav>

      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App