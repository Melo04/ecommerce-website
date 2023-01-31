import React from 'react'
import Phone from '../components/Home/Phone'
import Service from '../components/Home/Service'
import Categories from '../components/Home/Categories'
import Slider from '../components/Home/Slide'
import Footer from '../components/Footer'
import FlashCard from '../components/Home/FlashCard'
import Navigation from '../components/Navigation'
import Testimonial from '../components/Home/Testimonial'

const Home = () => {
  return (
    <>
    <Navigation/>
    <Slider/>
    <Phone/>
    <Service/>
    <Categories/>
    <FlashCard/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home