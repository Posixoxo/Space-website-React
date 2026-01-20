import React, { useState, useEffect } from 'react';
import { spaceData } from '../data';

const Destination = () => {
    const [planetIndex, setPlanetIndex] = useState(0);
    const [isFade, setIsFade] = useState(true);
    const [loading, setLoading] = useState(true);
    const [touchStart, setTouchStart] = useState(null);

    // Simulated initial load
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const handlePlanetChange = (index) => {
        if (index === planetIndex) return;
        setIsFade(false); 
        setTimeout(() => {
            setPlanetIndex(index);
            setIsFade(true);
        }, 300);
    };

    // --- SWIPE LOGIC ---
    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchEnd = (e) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0].clientX;
        if (touchStart - touchEnd > 70) { // Swipe Left (Next)
            const next = (planetIndex + 1) % spaceData.destinations.length;
            handlePlanetChange(next);
        }
        if (touchStart - touchEnd < -70) { // Swipe Right (Prev)
            const prev = (planetIndex - 1 + spaceData.destinations.length) % spaceData.destinations.length;
            handlePlanetChange(prev);
        }
    };

    const planet = spaceData.destinations[planetIndex];

    if (loading) return <div className="loader"><span>01</span> PICK YOUR DESTINATION...</div>;

    return (
        <section 
            className={`tab-margin transition-fade ${isFade ? 'fade-in' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="description destination-description">
                <h4 style={{ color: 'grey' }}>01</h4>
                <h4>PICK YOUR DESTINATION</h4>
            </div>

            <div className="flex-planets">
                <div className="moon-cover">
                    <img src={planet.images} alt={planet.name} className="planet-names" />
                </div>

                <div className="planets">
                    <div className="planets-list">
                        {spaceData.destinations.map((dest, index) => (
                      <button key={dest.name} onClick={() => handlePlanetChange(index)} 
                            className={planetIndex === index ? "active-link" : ""} 
                            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginRight: '15px', fontFamily: 'Bellefair', fontSize: '17px' }} > {dest.name} 
                      </button>
                        ))}
                    </div>

                    <div className="planet-description">
                        <h1>{planet.name}</h1>
                        <p>{planet.description}</p>
                    </div>

                    <div className="line"></div>

                    <div className="flex-d-t">
                        <div className="distance">
                            <p>AVG. DISTANCE</p>
                            <h2>{planet.distance}</h2>
                        </div>
                        <div className="time">
                            <p>EST. TRAVEL TIME</p>
                            <h2>{planet.travel}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destination;