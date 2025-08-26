import React from 'react'
import Header from "./Components/Header.jsx"
import Hero from "./Components/Hero.jsx"
import Info from "./Components/Info.jsx"
import RolesSection from './Components/RolesSection.jsx'
import Footer from "./Components/Footer.jsx"
function App() {
  return (
    <div>
      <Header/>
      <Hero></Hero>
      <Info/>
      <RolesSection/>
      <Footer/>

    </div>
  )
}

export default App