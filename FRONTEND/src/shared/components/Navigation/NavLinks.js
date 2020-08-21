import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          WORKSHOP
        </NavLink>
      </li>
      <li>
        <NavLink to='/about'>ABOUT</NavLink>
      </li>
      <li>
        <NavLink to='/vault'>VAULT</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
