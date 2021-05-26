import React from 'react';
import './BrandList.css';
import brand1 from '../../../img/brand-logo-1.png';
import brand2 from '../../../img/brand-logo-2.png';
import brand3 from '../../../img/brand-logo-3.png';
import brand4 from '../../../img/brand-logo-4.png';
import brand5 from '../../../img/brand-logo-5.png';
import brand6 from '../../../img/brand-logo-6.png';

const BrandList = () => {
    return (
        <div className="brandList-section py-5">
<div className="d-flex align-items-center justify-content-center w-75 m-auto">
              <div className="col-md-2 col-sm-6"><img className="allBrand" src={brand1} alt="" /></div>
              <div className="col-md-2 col-sm-6"><img className="allBrand" src={brand2} alt="" /></div>
              <div className="col-md-2 col-sm-6"><img className="allBrand" src={brand3} alt="" /></div>
              <div className="col-md-2 col-sm-6"><img className="allBrand" src={brand4} alt="" /></div>
              <div className="col-md-2 col-sm-6"><img className="allBrand" src={brand5} alt="" /></div>
              <div className="col-md-2 col-sm-6"><img className="allBrand"  src={brand6} alt="" /></div>
            </div>
        </div>
    );
};

export default BrandList;