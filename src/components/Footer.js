import React from 'react'

//material- ui
import EmailIcon from '@material-ui/icons/Email';



//style
import style from './styles/Footer.css'



const Footer = () => {
    return (
        <div id='footer'>

            <div id='footer-email-icon'>
                <EmailIcon style={{color:"white", fontSize:"30px"}} />
                <div className='email'>
                <a className='email' href='mailto:support@experienceconcerts.co'>support@experienceconcerts.co </a>
                </div>
            </div>

            <div id='footer-slogan-container'>
                <div className='slogan'>
                    EXP | CON
                </div>
                <div id='copyright'>
                    <small>2019  &copy;  All Rights Reserved   |   Speer Technologies Incorporated</small> 
                </div>
            </div>

            

     
            
        </div>
    )
}

export default Footer