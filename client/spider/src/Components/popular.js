import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Cards.css';
import '../Styles/Cat.css'; // Import your CSS file for styling if you have one

const CombinedComponent = ({ cardData, title }) => {
  const [showCards, setShowCards] = useState(true);

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
        {card.premium && (
          <p className="span" style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹{card.premium}</span> 
            <span style={{ color: 'gray', marginLeft: '7px', fontWeight: 'bold' }}>with</span> 
            <img className='logo-s' src="https://static1.hkrtcdn.com/mbnext/static/media/loyality/Union.svg" alt="" />
            <span style={{ color: '#ffbe00', fontWeight: 'bolder' }}> Premium</span>
          </p>
        )}
        <button className='btn'><b>ADD TO CART</b></button>
      </div>
    ));
  };

  const renderCategories = () => (
    <div className="component">
      <div className="card">
        <p style={{position:"absolute", color:"white", fontSize:"20px"}}>Proteins</p>
        <img className='c-img' src="https://img9.hkrtcdn.com/19036/bnr_1903568_o.png" alt="Proteins" />
      </div>
      <div className="card">
        <p style={{position:"absolute", color:"white", fontSize:"20px"}}>Gainers</p>
        <img className='c-img' src="https://img1.hkrtcdn.com/19036/bnr_1903570_o.png" alt="Gainers" />
      </div>
      <div className="card">
        <p style={{position:"absolute", color:"white", fontSize:"20px"}}>Pre/Post Workouts</p>
        <img className='c-img' src="https://img3.hkrtcdn.com/19036/bnr_1903572_o.png" alt="Pre/Post Workouts" />
      </div>
      <div className="card">
        <p style={{position:"absolute", color:"white", fontSize:"20px"}}>Fit Food Range</p>
        <img className='c-img' src="https://img5.hkrtcdn.com/19036/bnr_1903574_o.png" alt="Fit Food Range" />
      </div>
      <div className="card">
        <p style={{position:"absolute", color:"white", fontSize:"20px"}}>Vitamin and Supplements</p>
        <img className='c-img' src="https://img3.hkrtcdn.com/19036/bnr_1903582_o.png" alt="Vitamin and Supplements" />
      </div>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container">
      <div className="headin">
        <div className="bar"></div>
        <h1>{title}</h1>
      </div>
      <div className="toggle-buttons">
        <button 
          className={`ind-btn ${showCards ? 'selected-1' : ''}`} 
          onClick={() => setShowCards(true)} 
        >
          Best Seller
        </button>
        <button 
          className={`ind-btn ${!showCards ? 'selected-1' : ''}`} 
          onClick={() => setShowCards(false)} 
        >
          Categories
        </button>
      </div>
      <div className={`cards ${showCards ? 'show' : 'hide'}`}>
        {showCards ? (
          <div className="slider-container">
            <Slider {...settings}>
              {renderCards()}
            </Slider>
          </div>
        ) : (
            
           
              renderCategories()
           
          
        )}
      </div>
      <div className="lower">See All Products {">"} </div>
    </div>
  );
}

export default CombinedComponent;
