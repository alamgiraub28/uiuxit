import React from 'react';
import './Header.css';
import heroPic from '../../../img/header-image-uiuxit.png';

const Header = () => {
    return (
        <section className="bg-hero">
<div className="shape-main">
    <div className="custom-shape-1"></div>
    <div className="custom-shape-2"></div>
    <div className="custom-shape-3"></div>
</div>

{/* <div className="imageDiv-main">
    <div className="row imgRowHeight d-flex justify-content-center align-items-center">
        <div className="col-md-12 col-sm-12 text-end">
           <img className="w-100" src={heroPic} alt=""/>
        </div>
    </div>
</div>

<div className="container ">
    <div className="row hero-content">
        <div className="col-md-8 col-sm-12 text-start">
            <h1>design. development. <br/> branding</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <button className="btn-custom-outline">VIEW MORE</button>
            <button className="btn-custom-outline">CONTACT US</button>
        </div>
    </div>
</div> */}
<div class="container">
  <div class="row gx-1 align-items-center py-5 hero-height">
    <div class="col-md-6 col-sm-12">
     <div class="pe-3">
     <h1 className="hero-title">design. development. <br/> branding</h1>
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <button className="btn-custom-outline me-3">VIEW MORE</button>
            <button className="btn-custom-outline my-2">CONTACT US</button>
     </div>
    </div>
    <div class="col-md-6 col-sm-12">
      <div class="p-3">
      <img className="img-fluid" src={heroPic} alt=""/>
      </div>
    </div>
  </div>
</div>

{/* <div className="container">
    <div className="row bg-info">
        <div className="col-md-6 col-sm-12 text-start">
            <h1 className="hero-title">design. development. <br/> branding</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <button className="btn-custom-outline">VIEW MORE</button>
            <button className="btn-custom-outline my-2">CONTACT US</button>
        </div>
        <div className="col-md-6 col-sm-12">
        <img className="img-fluid mt-5" src={heroPic} alt=""/>
        </div>
    </div>
    
</div> */}
        </section>
    );
};

export default Header;