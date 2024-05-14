import React from 'react';
import '../Styles/Flip.css'; 
const Flip = () => {
  return (
    <div className="maincontainer">
      <div className="thecard">
        <div className="thefront">
          <h1>Beginner</h1>
        </div>
        <div className="theback">
         
          <b>For all budding health buffs who are starting out on their fitness journey.</b>
          
        </div>
      </div>
      <div className="thecard">
        <div className="thefront">
        <h1>Intermidiate</h1>
        </div>
        <div className="theback">
          <b>In the middle of your fitness journey and looking to improve? This range is for you.</b>
        </div>
      </div>
      <div className="thecard">
        <div className="thefront">
        <h1>Advanced</h1>
        </div>
        <div className="theback">
          <b>The perfect range for all health gurus who have advanced well into their fitness journey.</b>
        </div>
      </div>
    </div>
  );
};

export default Flip;
