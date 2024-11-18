import React from 'react'
import Navber from './Components/Navber/Navber'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import MyWork from './Components/My Work/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App