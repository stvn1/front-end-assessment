import React from 'react'

//component
import GradientButton from './GradientButton'

//material-ui 
import StarIcon from '@material-ui/icons/Star';


//style
import style from './styles/ReviewSection.css'

//image 
import image1 from '../assets/images/reviewImage/image1.png'


const Reviews = () => {
    return (
        <div className='review'>
               <div className='header-box'>
                <div>Menu</div>
                <div className='header-button'>
                    <GradientButton route='/pricing' val='Try it now' />
                </div>
            </div>

            <div className='review-container'>

                <div className='review-image'>
                    <img src={image1} ></img>
                </div>
                <div className="review-grid-container">
                    <div className="artist">
                    <span className='review-title'>Reviews</span>
                        <br></br>
                        <br></br>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <br></br>
                        <span className='reviewers'>Artist</span>
                        <br></br>
    
                        <span className='review-text'>
                            "Love it, it's the Best. I can't live without it!"
                        
                        </span>
                    </div>
                    <div className="producer">
                        <br></br>
                        <br></br>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <br></br>
                        <span className='reviewers'>Producer</span>
                        <br></br>
                        <span className='review-text'>
                            "Love it, it's the Best. I can't live without it!"
                        
                        </span>


                    </div>
                    <div class="music-fan">
                        <br></br>
                        <br></br>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <br></br>
                        <span className='reviewers'>Music Fan</span>
                        <br></br>
                        <span className='review-text'>
                            "Love it, it's the Best. I can't live without it!"
                        
                        </span>
                    </div>
                </div>
                <div>
                    

                   
                        <br></br>
                        <br></br>
                        
                </div>
    

            </div>
            
        </div>
    )
}

export default Reviews
