import React from 'react'
import HeroSection from './HeroSection'
import TouristSpots from './TouristSpots'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import CountryCards from './CountrySection'

const Home = () => {
  return (
    <>
        <HeroSection></HeroSection>
        <SectionHeader title="Tourist Spots" subtitle="Check awesome spots and select one of them. Rest responsibility is ours."></SectionHeader>
        <TouristSpots></TouristSpots>
        <SectionHeader title="Countries" subtitle="Click to see your desired country's tourist spots and details."></SectionHeader>
        <CountryCards></CountryCards>
    </>
  )
}

export default Home