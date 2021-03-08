import React from 'react'


//component
import GradientButton from './GradientButton'

//style 
import style from './styles/PerkSection.css'

const PerksSection = () => {
    return (
        <div className='perk-section'>
            <div className='header-box'>
                <div>Menu</div>
                <div className='header-button'>
                    <GradientButton route='/pricing' val='Try it now' />
                </div>
            </div>
            <div className='perks-title'>
                PERKS
                <div className='perks-grid'>
                    <div className="red">
                        <span className='line'>___</span>
                        <br></br>
                        Subscription
                        <br></br>
                        Payment
                        <br></br>
                        Model
                        <br></br>
                        <span className='white-letters'>
                            No commitment,
                            cancel anytime. Never
                            worry about forgetting
                            a payment again!
                        </span>
                    </div>
                    <div className="blue">
                        <span className='line'>___</span>
                        <br></br>
                        No Fee
                        <br></br>
                        Cancelation
                        <br></br>
                        Policy
                        <br></br>
                        <span className='white-letters'>
                            No commitment,
                            cancel anytime. Never
                            worry about forgetting
                            a payment again!
                        </span>

                    </div>
                    <div className="yellow">
                        <span className='line'>___</span>
                        <br></br>
                        Subscription 
                        <br></br>
                        Payment
                        <br></br>
                        Model
                        <br></br>
                        <span className='white-letters'>
                            No commitment,
                            cancel anytime. Never
                            worry about forgetting
                            a payment again!
                        </span>

                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default PerksSection
