import React from 'react'

//style 
import style from './styles/SpeakerSection.css'

//images
import speakerImg from '../assets/images/speaker/image1.png'

//components
import GradientButton from '../components/GradientButton'

const SpeakerSection = () => {
    return (
        <div className='speaker-section'>
            <div className='header-box'>
                <div>Menu</div>
                <div className='header-button'>
                    <GradientButton route='/pricing' val='Try it now' />
                </div>
            </div>

            <div className='speaker-grid'>
    
                <div className='title-letters'>
                    SUPERIOR SOUND
                </div>
                <br></br>
                <div className='small-desc' >
                    Experience live versions of your favourite songs.
                    <br></br>
                <GradientButton val='See Demo' />
                </div>
            
        
                <img className='speaker-img' src={speakerImg} ></img>
    
            </div>
               
            
        </div>
    )
}

export default SpeakerSection
