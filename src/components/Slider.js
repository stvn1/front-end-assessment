import React from 'react'


import Carousel from 'react-bootstrap/Carousel'

//styles
import style from './styles/Slider.css'

//component
import GradientButton from './GradientButton'

//image
import image1 from '../assets/images/concert/concert1.jpg'
import image2 from '../assets/images/concert/concert2.jpg'
import image3 from '../assets/images/concert/concert3.jpg'


const Slider = () => {
    return (
        <div id='slider'>
          <div>
               

          <Carousel
          interval={5000}
          indicators={true}
          controls={false}
          >


            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Interactive Concert Experience</h3>
                <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                <div className='car-grad-button'>
                <GradientButton route='/pricing' val='Try it now' />
                </div>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Interactive Concert Experience</h3>
                <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                <div className='car-grad-button'>
                <GradientButton route='/pricing' val='Try it now' />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Interactive Concert Experience</h3>
                <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                <div className='car-grad-button'>
                <GradientButton route='/pricing' val='Try it now' />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>


           
        </div>
    )
}

export default Slider
