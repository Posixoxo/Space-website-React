import React, { useState, useEffect } from 'react';
import { spaceData } from '../data';

const Technology = () => {
  const [techIndex, setTechIndex] = useState(0);
  const [isFade, setIsFade] = useState(true);
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  // Simulated initial load for consistency
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleTechChange = (index) => {
    if (index === techIndex) return;
    setIsFade(false);
    setTimeout(() => {
      setTechIndex(index);
      setIsFade(true);
    }, 300);
  };

  // --- SWIPE LOGIC ---
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 70) { // Swipe Left (Next)
      handleTechChange((techIndex + 1) % spaceData.technology.length);
    }
    if (distance < -70) { // Swipe Right (Prev)
      handleTechChange((techIndex - 1 + spaceData.technology.length) % spaceData.technology.length);
    }
    setTouchStart(null);
  };

  const tech = spaceData.technology[techIndex];

  // Loader uses the CSS we added in the previous step
  if (loading) return <div className="loader"><span>03</span> SPACE LAUNCH 101...</div>;

  return (
    <section 
      className={`tab-margin transition-fade ${isFade ? 'fade-in' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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