
import React from "react"
import Hero from "./pages/Hero"
import Footer from "./pages/Footer"
import Navber from "./components/Navber"
import Coures from "./pages/Coures"


function App() {

  return (
    <React.Fragment>
      <Navber/>
      <Hero/>
      <Coures/>
      <Footer/>
    </React.Fragment>
  )
}

export default App
