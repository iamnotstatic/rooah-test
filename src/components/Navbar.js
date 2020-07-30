import React, { Fragment } from 'react';

import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="">
      <nav className="transparent z-depth-0">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">
            <img src={logo} alt="log" />
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li style={{ textTransform: 'uppercase' }}>
              <a href="sass.html">blog</a>
            </li>
            <li style={{ textTransform: 'uppercase' }}>
              <a href="badges.html">magazine</a>
            </li>
            <li style={{ textTransform: 'uppercase' }}>
              <a href="collapsible.html">best of the week</a>
            </li>
            <li style={{ textTransform: 'uppercase' }}>
              <a href="collapsible.html">best selling</a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons right">search</i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons right">menu</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <div className="divider"></div>
    </div>
  );
};

export default Navbar;
