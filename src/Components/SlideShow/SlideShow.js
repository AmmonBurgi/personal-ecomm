import React from 'react'
import Slider from 'react-slick'
import nike from '../../nike-slide.jpg'
import ua from '../../uaimage.jpg'
import adidas from '../../adidas.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlideShow.css'

function SlideShow(props){

const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2300,
    arrows: false,
    pauseOnHover: false
    // centerMode: true
}
    return(
        <Slider {...settings} className='slider'>
            <div>
                <img className='logo' src={nike} alt='nike' />
            </div>
            <div>
                <img className='logo' id='ua' src={ua} alt='Under Armour' />
            </div>
            <div>
                <img className='logo' src={adidas} alt='adidas' />
            </div>
        </Slider>
    )
}
export default SlideShow