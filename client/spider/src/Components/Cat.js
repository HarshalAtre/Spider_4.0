import React from 'react';
import '../Styles/Cat.css'; // Import your CSS file for styling if you have one

const Cat= () => {
  return (
    <div className="component">
      <div  className="card" >
        <div style={{height:"100%",width:"100%",backgroundImage:"url(https://img9.hkrtcdn.com/19036/bnr_1903568_o.png)"}}>hhfkj</div>
        
      </div>
      <div className="card">
      <img className='c-img' src="https://img1.hkrtcdn.com/19036/bnr_1903570_o.png" alt="" />

      </div>
      <div className="card">
      <img className='c-img' src="https://img3.hkrtcdn.com/19036/bnr_1903572_o.png" alt="" />
   
      </div>
      <div className="card">
      <img className='c-img' src="https://img5.hkrtcdn.com/19036/bnr_1903574_o.png" alt="" />

      </div>
      <div className="card">
      <img className='c-img' src="https://img3.hkrtcdn.com/19036/bnr_1903582_o.png" alt="" />

      </div>
    </div>
  );
}

export default Cat;
