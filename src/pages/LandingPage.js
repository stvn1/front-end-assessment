import React from 'react'

//components
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import SpeakerSection from '../components/SpeakerSection'
import YellowSection from '../components/YellowSection'
import PerkSection from '../components/PerksSection'
import Reviews from '../components/Reviews'
import GetEXPSection from'../components/GetEXPSection'


const LandingPage = () => {
    return (
        <div>
            <Slider />
            <SpeakerSection />
            <YellowSection />
            <PerkSection />
            <Reviews />
            <GetEXPSection />

            <Footer />
          
            
        </div>
    )
}

export default LandingPage
