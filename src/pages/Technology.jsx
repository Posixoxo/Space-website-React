import React, { useState } from 'react';
import { spaceData } from '../data';

const Technology = () => {
  const [techIndex, setTechIndex] = useState(0);
  const [isFade, setIsFade] = useState(true);
  const tech = spaceData.technology[techIndex];

  const handleTechChange = (index) => {
    if (index === techIndex) return;
    setIsFade(false);
    setTimeout(() => {
      setTechIndex(index);
      setIsFade(true);
    }, 300);
  };

  return (
    <section className={`tab-margin transition-fade ${isFade ? 'fade-in' : ''}`}>
      <div className="description destination-description">
        <h4 style={{ color: 'grey' }}>03</h4>
        <h4>SPACE LAUNCH 101</h4>
      </div>

      {/* --- MOBILE STRUCTURE --- */}
      <div className="tech-container mobile-version">
        <div className="tech-image">
          <img src={tech.images.landscape} alt={tech.name} className="tech-x" />
        </div>
        <div className="butt">
          {spaceData.technology.map((_, index) => (
            <button 
              key={index} 
              className={`btn ${techIndex === index ? 'active' : ''}`} 
              onClick={() => handleTechChange(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="tech-description">
          <h6>THE TERMINOLOGY...</h6>
          <h2>{tech.name}</h2>
          <p>{tech.description}</p>
        </div>
      </div>

      {/* --- TABLET STRUCTURE --- */}
      <div className="tech-container tablet-version">
        <div className="tech-image">
          <img src={tech.images.landscape} alt={tech.name} className="tech-x" />
        </div>
        <div className="butt">
          {spaceData.technology.map((_, index) => (
            <button 
              key={index} 
              className={`btn ${techIndex === index ? 'active' : ''}`} 
              onClick={() => handleTechChange(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="tech-description">
          <h6>THE TERMINOLOGY...</h6>
          <h2>{tech.name}</h2>
          <p>{tech.description}</p>
        </div>
      </div>

      {/* --- DESKTOP STRUCTURE --- */}
      <div className="desktop-version">
        <div className="flex-butt-tech">
          <div className="butt">
            {spaceData.technology.map((_, index) => (
              <button 
                key={index} 
                className={`btn ${techIndex === index ? 'active' : ''}`} 
                onClick={() => handleTechChange(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="tech-description">
            <h6>THE TERMINOLOGY...</h6>
            <h2>{tech.name}</h2>
            <p>{tech.description}</p>
          </div>
          <div className="tech-image">
            <img src={tech.images.portrait} alt={tech.name} className="tech-x" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;