import React from 'react'




//style 
import style from './styles/PricingPerkSection.css'

const PerksSection = () => {
    return (
        <div className='pricing-perk-section'>
            <div className='header-box'>
                <div>Menu</div>
                
            </div>
            <div className='perks-title'>
                PERKS
                <div className='pricing-perks-grid'>
                    <div className="first">
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
                    <div className="second">
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
                    <div className="third">
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
