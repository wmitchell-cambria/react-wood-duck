import React from 'react';

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
};
const Header = ({showMenuBar,showLeftNavBar}) => (
  <div className="App-header">
    <button className= {!showMenuBar ? "menu-button visible-xs":"menu-button"} onClick={showLeftNavBar}>
      <span className='glyphicon glyphicon-menu-hamburger menu-add' />
    </button>
    Primary Navigation
  </div>
);

export default Header;
