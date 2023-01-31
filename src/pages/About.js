import React from 'react'
import Abt from '../components/About/Abt'
import Card from '../components/About/Card'
import Hero from '../components/About/Hero'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const About = () => {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <Abt/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default About