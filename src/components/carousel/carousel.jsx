import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      <div>
        <img src="https://i.imgur.com/5c5tBMH.png" alt="Image 1" style={{width: '70%',marginLeft: '15%' , height: 'auto'}}/>
      </div>
      <div>
        <img src="https://i.imgur.com/mipUsHq.jpg" alt="Image 2" style={{width: '70%', marginLeft: '15%', height: 'auto'}}/>
      </div>
      <div>
        <img src="path_to_image_3.jpg" alt="Image 3" style={{width: '70%', marginLeft: '15%', height: 'auto'}} />
      </div>
    </Slider>
  );
};

export default ImageSlider;
