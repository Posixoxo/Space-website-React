import React, { useState, useEffect } from 'react';
import { spaceData } from '../data';

const Crew = () => {
    const [crewIndex, setCrewIndex] = useState(0);
    const [isFade, setIsFade] = useState(true);
    const [loading, setLoading] = useState(true);
    const [touchStart, setTouchStart] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const handleCrewChange = (index) => {
        if (index === crewIndex) return;
        setIsFade(false);
        setTimeout(() => {
            setCrewIndex(index);
            setIsFade(true);
        }, 300);
    };

    // --- SWIPE LOGIC ---
    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchEnd = (e) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0].clientX;
        if (touchStart - touchEnd > 70) { // Next
            handleCrewChange((crewIndex + 1) % spaceData.crew.length);
        }
        if (touchStart - touchEnd < -70) { // Prev
            handleCrewChange((crewIndex - 1 + spaceData.crew.length) % spaceData.crew.length);
        }
    };

    const member = spaceData.crew[crewIndex];

    if (loading) return <div className="loader"><span>02</span> MEET YOUR CREW...</div>;

    return (
        <section 
            className={`tab-margin transition-fade ${isFade ? 'fade-in' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="description destination-description">
                <h4 style={{ color: 'grey' }}>02</h4>
                <h4>MEET YOUR CREW</h4>
            </div>

            {/* MOBILE STRUCTURE */}
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

            {/* TABLET STRUCTURE */}
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

            {/* DESKTOP STRUCTURE */}
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