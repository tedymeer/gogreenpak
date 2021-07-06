import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import cover1 from './coverpic1.jpg'
import cover3 from './coverpic3.jpg'
import './coverstyle.css';
function Slider() {
    return (
        <Carousel >
        <Carousel.Item interval={5000} className="coverstyle">
          <img
            className="d-block w-100"
            src={cover1}
            alt="Big tree in middle"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000} className="coverstyle" >
          <img
            className="d-block w-100"
            src={cover3}
            alt="Third slide"
          />
        </Carousel.Item>
    
       
      
      </Carousel>
    )
}

export default Slider
