import React from 'react';

import './Footer.css';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a className='social-list__link' href='mailto:amdevitoam@gmail.com'>
            <i id='icons' class='far fa-envelope'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://www.instagram.com/am.devito/'
          >
            <i id='icons' class='fab fa-instagram'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://soundcloud.com/bobbypinmusic/sets/amdevito'
          >
            <i id='icons' class='fab fa-soundcloud'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a className='social-list__link' href='https://github.com/amdevito'>
            <i id='icons' class='fab fa-github'></i>
          </a>
        </li>
      </ul>
      <p className='copyright'>
        Copyright &copy; 2020 AM DeVito all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
