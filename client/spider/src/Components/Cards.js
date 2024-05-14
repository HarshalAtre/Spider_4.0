import React from 'react';
import '../Styles/Cards.css';

function Cards() {
  return (
    <div className='container'>
        <div className='cover'>
      <div className='cards'>
        <div className='card'>
          <img src="https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_c_m.jpg" alt="" />
          <p style={{ margin: '0' }}>Biozyme Performance Whey</p>
          <h4 style={{ margin: '0' }}>4.4 lb Rich chocolate</h4>
          <p style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹400</span> 
            <span style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '7px' }}>₹500</span> 
            <span style={{ color: 'green', fontSize: 'small', marginLeft: '7px' }}> Save ₹100</span>
          </p>
          <p style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹300</span> 
            <span style={{ color: 'gray', marginLeft: '7px', fontWeight: 'bold' }}>with</span> 
            <img className='logo' src="https://static1.hkrtcdn.com/mbnext/static/media/loyality/Union.svg" alt=""  />
            <span style={{ color: '#ffbe00', fontWeight: 'bolder' }}> Premium</span>
          </p>
          <button className='btn'><b>Add to Cart</b></button>
        </div>

        {/* Copying the first card content to other cards */}
        <div className='card'>
          <img src="https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_c_m.jpg" alt="" />
          <p style={{ margin: '0' }}>Biozyme Performance Whey</p>
          <h4 style={{ margin: '0' }}>4.4 lb Rich chocolate</h4>
          <p style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹400</span> 
            <span style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '7px' }}>₹500</span> 
            <span style={{ color: 'green', fontSize: 'small', marginLeft: '7px' }}> Save ₹100</span>
          </p>
          <p style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹300</span> 
            <span style={{ color: 'gray', marginLeft: '7px', fontWeight: 'bold' }}>with</span> 
            <img className='logo' src="https://static1.hkrtcdn.com/mbnext/static/media/loyality/Union.svg" alt=""  />
            <span style={{ color: '#ffbe00', fontWeight: 'bolder' }}> Premium</span>
          </p>
          <button className='btn'><b>Add to Cart</b></button>
        </div>

        {/* Repeat the same for other cards */}
        <div className='card'>
          <img src="https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_c_m.jpg" alt="" />
          <p style={{ margin: '0' }}>Biozyme Performance Whey</p>
          <h4 style={{ margin: '0' }}>4.4 lb Rich chocolate</h4>
          <p style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹400</span> 
            <span style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '7px' }}>₹500</span> 
            <span style={{ color: 'green', fontSize: 'small', marginLeft: '7px' }}> Save ₹100</span>
          </p>
          <p style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹300</span> 
            <span style={{ color: 'gray', marginLeft: '7px', fontWeight: 'bold' }}>with</span> 
            <img className='logo' src="https://static1.hkrtcdn.com/mbnext/static/media/loyality/Union.svg" alt=""  />
            <span style={{ color: '#ffbe00', fontWeight: 'bolder' }}> Premium</span>
          </p>
          <button className='btn'><b>Add to Cart</b></button>
        </div>

        <div className='card'>
          <img src="https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_c_m.jpg" alt="" />
          <p style={{ margin: '0' }}>Biozyme Performance Whey</p>
          <h4 style={{ margin: '0' }}>4.4 lb Rich chocolate</h4>
          <p style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹400</span> 
            <span style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '7px' }}>₹500</span> 
            <span style={{ color: 'green', fontSize: 'small', marginLeft: '7px' }}> Save ₹100</span>
          </p>
          <p style={{ margin: '0' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>₹300</span> 
            <span style={{ color: 'gray', marginLeft: '7px', fontWeight: 'bold' }}>with</span> 
            <img className='logo' src="https://static1.hkrtcdn.com/mbnext/static/media/loyality/Union.svg" alt=""  />
            <span style={{ color: '#ffbe00', fontWeight: 'bolder' }}> Premium</span>
          </p>
          <button className='btn'><b>Add to Cart</b></button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cards;
