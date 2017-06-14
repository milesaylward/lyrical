import React from 'react';
import { Link } from 'react-router';

const logo = 'http://res.cloudinary.com/milesaylward/image/upload/v1497468931/lyricwritingapplogo_btuj7b.png'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} className='logo' />
      </Link>
    </div>
  );
};

export default Header;
