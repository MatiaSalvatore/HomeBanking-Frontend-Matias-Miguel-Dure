import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientDBCards from "./ClientDBCards";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




  return (
    <div className="slider-container">
        <Slider {...settings}>
          <ClientDBCards></ClientDBCards>
        </Slider>
        
    </div>

  );
}


