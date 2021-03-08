import React from 'react'

//component
import GradientButton from './GradientButton'

//style 
import style from './styles/GetExp.css'

const GetEXPSection = () => {
    return (
        <div className='get-exp'>
            <div className='get-exp-menu'>
                menu
            </div>
            <div className='get-exp-container'>

                <div>
                    <span className='get-exp-red-lettering'>GET EXP|CON NOW</span>
                    <br></br>
    
                    <span className='get-exp-white-lettering'>Purchase and download the app.</span>
                </div>
                <div className='get-exp-grad-button'>
                    <GradientButton val='TRY IT NOW' />
                </div>

               
                
            </div>          
        </div>
    )
}

export default GetEXPSection
