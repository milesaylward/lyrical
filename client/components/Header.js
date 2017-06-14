import React from 'react';
import { Link } from 'react-router';
import { logo } from './Images';

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
