import React from 'react';

import Navbar from './Navbar';
import readicon from '../assets/icon.png';
import right from '../assets/right.png';
import left from '../assets/left.png';
import eli1 from '../assets/Ellipse 4.png';
import eli2 from '../assets/Ellipse 5.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col m11">
          <div className="left">
            <p>photography 2020</p>

            <h1>These Amazing</h1>
            <h2>
              Photos Will Inspire <br />
            </h2>
            <h3>Your Travels</h3>

            <p className="read-more">
              read more <img src={readicon} alt="icon" />
            </p>
            <div className="row">
              <div className="ellipse">
                <p className="col m3">
                  <img src={eli1} alt="el1" />
                </p>
                <p className="col m3">
                  <img src={eli2} alt="el1" />
                </p>
                <p className="col m3">
                  <img src={eli2} alt="el1" />
                </p>
                <p className="col m3">
                  <img src={eli2} alt="el1" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col m1">
          <div className="right">
            <div className="social-icons">
              <a
                href="https://facebook.com/directrecharge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/direcharge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com/direcharge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
            <div className="row">
              <div className="nav-icons">
                <p className="col m6">
                  <img src={left} alt="left-icon" />
                </p>
                <p className="col m6">
                  <img src={right} alt="right-icon" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
