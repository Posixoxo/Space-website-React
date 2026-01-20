import React, { useState } from 'react';
import { spaceData } from '../data';

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);
  const [isFade, setIsFade] = useState(true);
  const member = spaceData.crew[crewIndex];

  const handleCrewChange = (index) => {
    if (index === crewIndex) return;
    setIsFade(false);
    setTimeout(() => {
      setCrewIndex(index);
      setIsFade(true);
    }, 300);
  };

  return (
    <section className={`tab-margin transition-fade ${isFade ? 'fade-in' : ''}`}>
      <div className="description destination-description">
        <h4 style={{ color: 'grey' }}>02</h4>
        <h4>MEET YOUR CREW</h4>
      </div>

      <div className="mobile-version">
        <div className="crew-image">
          <img src={member.image} alt={member.name} className="crew-x" />
        </div>
        <div className="progress">
          {spaceData.crew.map((_, i) => (
            <div key={i} className={`progress-bar ${crewIndex === i ? 'active' : ''}`} onClick={() => handleCrewChange(i)}></div>
          ))}
        </div>
        <div className="crew-container">
          <div className="crew-description">
            <h4>{member.role}</h4>
            <h2>{member.name}</h2>
          </div>
          <p>{member.bio}</p>
        </div>
      </div>

      <div className="tablet-version">
        <div className="crew-container">
          <div className="crew-description">
            <h4>{member.role}</h4>
            <h2>{member.name}</h2>
          </div>
          <p>{member.bio}</p>
        </div>
        <div className="progress">
          {spaceData.crew.map((_, i) => (
            <div key={i} className={`progress-bar ${crewIndex === i ? 'active' : ''}`} onClick={() => handleCrewChange(i)}></div>
          ))}
        </div>
        <div className="crew-image">
          <img src={member.image} alt={member.name} className="crew-x" />
        </div>
      </div>

      <div className="desktop-version">
        <div className="desktop-crew-container">
          <div className="flex-description-image">
            <div className="crew-description">
              <h4>{member.role}</h4>
              <h2>{member.name}</h2>
            </div>
            <p>{member.bio}</p>
            <div className="progress">
              {spaceData.crew.map((_, i) => (
                <div key={i} className={`progress-bar ${crewIndex === i ? 'active' : ''}`} onClick={() => handleCrewChange(i)}></div>
              ))}
            </div>
          </div>
          <div className="crew-image">
            <img src={member.image} alt={member.name} className="crew-x" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;