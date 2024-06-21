import React from 'react'
import HeroSection from './HeroSection'
import TouristSpots from './TouristSpots'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'

const Home = () => {
  return (
    <>
        <HeroSection></HeroSection>
        <SectionHeader title="Tourist Spots" subtitle="Check awesome spots and select one of them. Rest responsibility is ours."></SectionHeader>
        <TouristSpots></TouristSpots>
    </>
  )
}

export default Home