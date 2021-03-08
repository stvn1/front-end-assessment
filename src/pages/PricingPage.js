import React from 'react'
import {useHistory} from 'react-router-dom'

//material-ui stuff
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

//style 
import style from './styles/PricingPage.css'

//component
import Perks from '../components/PricingPerkSection'
import Footer from '../components/Footer'


const PricingPage = () => {


    const history = useHistory();

    //click handlers
    const basicClickHandler = () =>{
        history.push('/payment/basic') 

    }

    const advancedClickHandler = () =>{
        history.push('/payment/advanced')

    }
    const proClickHandler = () =>{
        history.push('/payment/pro')

    }

    return (
        <div className='pricing-page'>

            <div className='header-box'>
                <div>Menu</div>
            </div>
            <div className='pricing-container'>
                <span className='pricing-title'>PRICING</span>
                <br></br>
                <span className='pricing-desc' >
                    Text out our app today! Choose from three subscription 
                    <br></br>
                    Based payment models.
                </span>

                <div className="pricing-grid">
                    <div className="basic">
                        Basic
                        <div className='underlined-text'></div>
             
        
                        MONTHLY
                        <br></br>
                        <span className='money'>$9</span>
                        <br></br>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Very good
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Amazing
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Perfect job
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Love this
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> It's so good
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Features
                            <br></br>
                        </span>
                        <button onClick={basicClickHandler} className='pricing-button'>
                            SELECT
                        </button>
                
                        
                    </div>
                    <div className="advanced">
                        Pro
                        <div className='underlined-text'></div>
             
        
                        YEARLY
                        <br></br>
                        <span className='money'>$120</span>
                        <br></br>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Very very good
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Even more
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Perfect job
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Love this more
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> It's so so good
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> More Features
                            <br></br>
                        </span>
                        <button onClick={advancedClickHandler} className='pricing-button-adv'>
                            SELECT
                        </button>
                    </div>
                    <div className="pro">
                    Pro
                        <div className='underlined-text'></div>
             
        
                        YEARLY
                        <br></br>
                        <span className='money'>$120</span>
                        <br></br>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Very very good
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Even more
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Perfect job
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> Love this more
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> It's so so good
                            <br></br>
                        </span>
                        <span className='white-letters'>
                            < AudiotrackIcon /> More Features
                            <br></br>
                        </span>
                        <button onClick={proClickHandler} className='pricing-button-pro'>
                            SELECT
                        </button>
                        

                    </div>
                </div>
                
            </div>
            <Perks />
            <Footer />
       
            
        </div>
    )
}

export default PricingPage
