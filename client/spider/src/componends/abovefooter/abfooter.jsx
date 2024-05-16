import React from 'react';
import './abfooter.css'; 

const Abfooter = () => {
  return (
    <div className="abfooter">
      <div className="abfooter-cont">
        <div className="abfooter-item">
          <img  src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/safeandsecure.svg" alt="safeandsecure.svg" />
          <span>100% Safe & Secure Payments</span>
        </div>
        <div className="abfooter-item">
          <img src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/freeshiping.svg" alt="freeshiping.svg" />
          <span>Free Shipping</span>
        </div>
        <div className="abfooter-item">
          <img src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/mb_cash.svg" alt="new.png" />
          <span>Shop with us & earn MB Cash</span>
        </div>
        <div className="abfooter-item">
          <img src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/authen.svg" alt="authen.svg" />
          <span>Authenticity Guaranteed</span>
        </div>
      </div>
      <div className="h"><h1>- MuscleBlaze - Leading Bodybuilding & Sports Nutrition Supplement Brand</h1></div>
    </div>
  );
}

export default Abfooter;
