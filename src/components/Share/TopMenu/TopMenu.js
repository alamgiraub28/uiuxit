import React from 'react';
import logo from '../../../img/logo-uiuxiwhite.png';
import './TopMenu.css';

const TopMenu = () => {
    return (
        <section className="nav-custom fixed-top">
            <div className="container">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid text-start">
    <a class="navbar-brand" href="#"><img className="w-25" src={logo} alt=""/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link-custom active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link-custom" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link-custom" href="#service">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link-custom" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link-custom" href="#team">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link-custom" href="#testimonial">Testimonial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link-custom" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</section>
    );
};

export default TopMenu;