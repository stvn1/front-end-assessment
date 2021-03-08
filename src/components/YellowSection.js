import React from 'react'

//style
import style from './styles/YellowSection.css'

//components
import GradientButton from './GradientButton'

const YellowSection = () => {
    return (
        <div className='yellow-section'>
            <div className='header-box'>
                <div>Menu</div>
                <div className='header-button'>
                    <GradientButton route='/pricing' val='Try it now' />
                </div>
            </div>
            
        </div>
    )
}

export default YellowSection
