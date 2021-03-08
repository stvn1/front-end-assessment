import React from 'react'
import { useParams } from 'react-router-dom'

//style
import style from './styles/Payment.css'

//component
import Footer from '../components/Footer'

const Payment = (props) => {

  let { plan } = useParams();
    return (
        <div className='payment-page' >
            <h1>{plan}</h1>
            <div className='payment-title'>
                PAYMENT
            </div>
            <div className='plan-selection'>
                <div className='basic-plan-selection'> 
                <input className='plan-selection-input' type='radio'></input>
                BASIC
                
                </div>
                <div className='adv-plan-selection'>ADVANCED</div>
                <div className='pro-plan-selection'>PRO</div>
            </div>

            <div className='payment-info'>
                <div className='billing-info'>
                    <span>2. Billing Information</span>
                    <br></br>
                    <label className='input-label'>FULL NAME</label>
                    <br></br>
                    <input type='text' className='input-text-fullwidth' />
                    <br></br>
                    <label className='input-label'>BILLING ADDRESS</label>
                    <br></br>
                    <input type='text' className='input-text-fullwidth' />
                    <div className='city-postal-code'>
                        <div className='city-div'>
                            <label className='input-label'>CITY</label>
                            <br></br>
                            <input type='text' className='input-text' />
                            <br></br>
                        </div>
                        <div>
                            <label className='input-label'>POSTAL CODE</label>
                            <br></br>
                            <input type='text' className='input-text' />
                            <br></br>
                        </div>
                    </div>
                    <label className='input-label'>COUNTRY</label>
                            <br></br>
                            <input type='text' className='input-text-fullwidth' />
                            <br></br>

                </div>

                <div className='credit-card-info'>
                    <span>3. Credit Card Information</span>
                    <br></br>
                    <label className='input-label'>CARDHOLDER'S NAME</label>
                    <br></br>
                    <input type='text' className='input-text-fullwidth' />
                    <br></br>
                    <label className='input-label'>CARD NUMBER</label>
                    <br></br>
                    <input type='text' className='input-text-fullwidth' />
                    <br></br>

                    <div className='month-year'>
                        <div className='month-div'>
                            <label className='input-label'>EXPIRY MONTH</label>
                            <br></br>
                            <input type='text' className='input-text' />
                            <br></br>
                        </div>
                        <div>
                            <label className='input-label'>EXPIRY YEAR</label>
                            <br></br>
                            <select className='year-select' name='year'>
                                <option disabled selected value> Select year </option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                            <br></br>
                        </div>
                    </div>
                    <label className='input-label'>CVV</label>
                    <br></br>
                    <input type='text' className='input-text-fullwidth' />
                    <br></br>

                    
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Payment
