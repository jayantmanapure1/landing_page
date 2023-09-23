import React from 'react';
import pl from '../assets/leaf.png';
import search from '../assets/search.png';
import login from '../assets/log.svg';

function Navbar() {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={pl} alt="logo" className="logo" />
          <span className="fst-italic fw-bold">Plant Me</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto list">
              <a className="nav-link text-white" href="#">
                Our Services
              </a>
              <a className="nav-link text-white" href="#">
                Plant Care
              </a>
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
              <a className="nav-link text-white" href="#">
                About
              </a>
              <img src={search} alt="search" className="search" />
              <img src={login} alt="login" className="login" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
