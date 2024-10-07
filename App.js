import Navbar from "./Navbar"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Title from "./components/Title"
import About from "./components/About"


import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/title" element={<Title />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App