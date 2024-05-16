import React, { useState } from 'react';
import './shopbygoal.css';

function Shopbygoal() {
  const [selectedGoal, setSelectedGoal] = useState({
    title: 'Lean Muscle Mass',
    description: 'Transform yourself into a lean, toned, and ripped physique.',
    imageSrc: 'https://img2.hkrtcdn.com/30248/bnr_3024771_o.png'
  });

  const handleGoalChange = (title, description, imageSrc) => {
    setSelectedGoal({
      title: title,
      description: description,
      imageSrc: imageSrc
    });
  };

  return (
    <div className="container-wrap">
      <div className="head">
        <div className="bar"></div>
        <h1>Shop by Goal</h1>
      </div>
      <div className="goals-container">
        <button
          className={selectedGoal.title === 'Lean Muscle Mass' ? 'goal-item-tabs selected' : 'goal-item-tabs'}
          onClick={() =>
            handleGoalChange(
              'Lean Muscle Mass',
              'Transform yourself into a lean, toned, and ripped physique.',
              'https://img2.hkrtcdn.com/30248/bnr_3024771_o.png'
            )
          }
        >
          Lean Muscle Mass
        </button>
        <button
          className={selectedGoal.title === 'Bulking Up' ? 'goal-item-tabs selected' : 'goal-item-tabs'}
          onClick={() =>
            handleGoalChange(
              'Bulking Up',
              'Build muscle mass and increase overall body size and strength.',
              'https://img3.hkrtcdn.com/27510/bnr_2750932_o.png' 
            )
          }
        >
          Bulking Up
        </button>
        <button
          className={selectedGoal.title === 'Sports Fitness' ? 'goal-item-tabs selected' : 'goal-item-tabs'}
          onClick={() =>
            handleGoalChange(
              'Sports Fitness',
              'Improve performance and endurance for sports activities.',
              'https://img7.hkrtcdn.com/27510/bnr_2750936_o.png' 
            )
          }
        >
          Sports Fitness
        </button>
        <button
          className={selectedGoal.title === 'Weight Loss' ? 'goal-item-tabs selected' : 'goal-item-tabs'}
          onClick={() =>
            handleGoalChange(
              'Weight Loss',
              'Efficiently lose weight and achieve a healthier body composition.',
              'https://img9.hkrtcdn.com/27510/bnr_2750938_o.png' 
            )
          }
        >
          Weight Loss
        </button>
      </div>
      <div className="goal-description-container">
        <div className="selected-setion-desc-area">
            <div className="tp">
            <div className="selected-section-desc-title">{selectedGoal.title}</div>
            <p>{selectedGoal.description}</p>
            </div>
          <img className="selected-setion-icon" src={selectedGoal.imageSrc} alt={selectedGoal.title + ' Icon'} />
        </div>
        {/* add cards here */}
      </div>
    </div>
  );
}

export default Shopbygoal;
