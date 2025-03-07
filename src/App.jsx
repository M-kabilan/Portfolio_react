import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Projects/Project'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App