import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Services/Service'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </>
  )
}

export default App