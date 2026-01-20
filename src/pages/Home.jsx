import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <div className="desktop-description-container">
        <div className="description">
          <h4>SO, YOU WANT TO TRAVEL TO</h4>
          <h1>SPACE</h1>
          <div className="description-text">
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</p>
          </div>
        </div>

        <div className="explore">
          <Link to="/destination">EXPLORE</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;