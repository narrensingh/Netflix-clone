import React, { useEffect, useRef, useState } from 'react';
import './Nav.css';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Navigate, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [showChildren, SetshowChildren] = useState(window.innerWidth > 1250);
  const [menuShow, setmenuShow] = useState(window.innerWidth < 1180);
  const navigate = useNavigate();

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    const handleResize = () => {
      SetshowChildren(window.innerWidth > 1250);
    };
    const toogleMenu = () => {
      setmenuShow(window.innerWidth < 1180);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', toogleMenu);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', toogleMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleSearch = () => {
    setActive(!active);
  };
  return (
    <div className={`nav ${show && 'nav__black'}`} ref={navRef}>
      <div className="nav__left">
        <div className="logo-container">
          <img
            onClick={() => navigate('./')}
            className="nav__logo"
            src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
            alt="logo"
          />
          {menuShow && <p className="browse-text">Browse</p>}
        </div>
        {!menuShow && (
          <>
            <p>Home</p>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>New & Popular</p>
            <p>My List</p>
            <p>Browse by Languages</p>
          </>
        )}
      </div>
      <div className="nav__right">
        <div className="wrapper">
          <div className={`nav__input ${active ? 'active' : 'not__active'}`}>
            <SearchRoundedIcon
              sx={{
                color: 'white',
                fontSize: 30,
              }}
              onClick={toggleSearch}
            />
            <input
              placeholder="Titles, people, genres"
              style={{ display: `${active ? 'block' : 'none'}` }}
            />
          </div>
        </div>
        {showChildren && <p>Children</p>}
        <NotificationsNoneRoundedIcon sx={{ color: 'white', fontSize: 30 }} />
        <img
          onClick={() => navigate('./profile')}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
