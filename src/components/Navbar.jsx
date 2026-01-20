import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector('.active');
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        opacity: 1
      });
    }
  }, [location]);

  return (
    <header className="navbar">
      <Link to="/">
        <img src="assets/shared/logo.svg" alt="logo" className="logo" />
      </Link>

      {/* TABLET VIEW NAVBAR (Visible on tablet, hidden on mobile/desktop) */}
      <div className="tablet-nav tablet-version">
        <div className="tablet-n-contents">
          <NavLink className="menu-item" to="/">Home</NavLink>
          <NavLink className="menu-item" to="/destination">Destination</NavLink>
          <NavLink className="menu-item" to="/crew">Crew</NavLink>
          <NavLink className="menu-item" to="/technology">Technology</NavLink>
        </div>
      </div>

      <div className="navline desktop-version"></div>

      {/* DESKTOP VIEW NAVBAR */}
      <div className="desktop-nav desktop-version" ref={navRef}>
        <div className="desktop-n-contents" style={{ position: 'relative' }}>
          <NavLink className="menu-item" to="/">
            <span className="menu-number">00</span>Home
          </NavLink>
          <NavLink className="menu-item" to="/destination">
            <span className="menu-number">01</span>Destination
          </NavLink>
          <NavLink className="menu-item" to="/crew">
            <span className="menu-number">02</span>Crew
          </NavLink>
          <NavLink className="menu-item" to="/technology">
            <span className="menu-number">03</span>Technology
          </NavLink>
          <div className="nav-underline-indicator" style={underlineStyle}></div>
        </div>
      </div>

      {/* MOBILE HAMBURGER */}
      <img 
        src={isMenuOpen ? "assets/shared/icon-close.svg" : "assets/shared/icon-hamburger.svg"} 
        alt="open" 
        className="hamburger mobile-version" 
        onClick={toggleMenu}
      />

      <nav className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <ul className="menu-list">
            <NavLink className="menu-item" to="/" onClick={toggleMenu}><span className="menu-number">00</span>Home</NavLink>
            <NavLink className="menu-item" to="/destination" onClick={toggleMenu}><span className="menu-number">01</span>Destination</NavLink>
            <NavLink className="menu-item" to="/crew" onClick={toggleMenu}><span className="menu-number">02</span>Crew</NavLink>
            <NavLink className="menu-item" to="/technology" onClick={toggleMenu}><span className="menu-number">03</span>Technology</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;