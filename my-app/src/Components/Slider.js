import React from 'react';
import '../App.css';

//Slider
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

//image
import img2 from "../assetes/images/img2.jpg";
import img3 from "../assetes/images/img3.jpg";


const slider = () => {
    return (
        <>
        <div className='App'>
        <AliceCarousel autoPlay autoPlayInterval="2000" className='alice-carousel__dots,alice-carousel__prev-btn,alice-carousel__next-btn'>
            <img src={img2} alt="img" className="sliderimg" />
            <img src={img3} alt="img" className="sliderimg" />
        </AliceCarousel> 
        </div> 
        </>
    );
};

export default slider;