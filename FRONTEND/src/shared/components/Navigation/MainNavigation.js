import React, { useState } from 'react';

// Components
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

import './MainNavigation.css';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className='main-navigation__menu-btn'
          onClick={openDrawerHandler}
        >
          <i id='dropdown-icon' class='fas fa-bars'></i>
        </button>
        <div className='headers-div'>
          <h1 className='main-navigation__title'>AM&nbsp;DeVito</h1>
          <p className='main-navigation__subheader'>Interdisciplinary Artist / Composer</p>
        </div>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
