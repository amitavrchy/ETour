import React from 'react'
import HeroSection from './HeroSection'
import TouristSpots from './TouristSpots'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import CountryCards from './CountrySection'
import Testimonial from './Testimonial'
import Featured from './Featured'

const Home = () => {
  return (
    <>
        <HeroSection></HeroSection>
        <SectionHeader title="Tourist Spots" subtitle="Check awesome spots and select one of them. Rest responsibility is ours."></SectionHeader>
        <TouristSpots></TouristSpots>
        <Featured></Featured>
        <SectionHeader title="Countries" subtitle="Click to see your desired country's tourist spots and details."></SectionHeader>
        <CountryCards></CountryCards>
        <SectionHeader title="Testimonial" subtitle="What our customer say."></SectionHeader>
        <Testimonial></Testimonial>
    </>
  )
}

export default Home