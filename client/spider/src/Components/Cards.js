import React,{ Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Cards.css";

export default function SimpleSlider({cardData}) {
    

  const renderCards = () => {
    return cardData.map((card, index) => (
      <div className='card-i' key={index}>
        <img className="image" src={card.image} alt="" />
        <p className="span" style={{ margin: '0' }}>{card.title}</p>
        <h4 className="span" style={{ margin: '0' }}>{card.description}</h4>
        <p className="span" style={{ margin: '0' }}>
          <span style={{ color: 'black', fontWeight: 'bold' }}>₹{card.price}</span> 
          <span style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '7px' }}>₹{card.originalPrice}</span> 
          <span style={{ color: 'green', fontSize: 'small', marginLeft: '7px' }}> Save ₹{card.discount}</span>
        </p>
        <p className="span" style={{ margin: '0' }}>
          <span style={{ color: 'black', fontWeight: 'bold' }}>₹300</span> 
          <span style={{ color: 'gray', marginLeft: '7px', fontWeight: 'bold' }}>with</span> 
          <img className='logo-s' src="https://static1.hkrtcdn.com/mbnext/static/media/loyality/Union.svg" alt=""  />
          <span style={{ color: '#ffbe00', fontWeight: 'bolder' }}> Premium</span>
        </p>
        <button className='btn'><b>ADD TO CART</b></button>
      </div>
    ));
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="container">
      <div className="cards">
      <div className="slider-container">
        <Slider {...settings}>
          {renderCards()}
        </Slider>
        </div>
      </div>
    </div>
  );
}
