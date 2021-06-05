import React from 'react';
import './BrandListDetails.css';

const BrandListDetails = ({review}) => {
    return (
        <div className=""> 
           <img className="m-auto imageBrand" src={review.imageURL} alt="" />
        </div>
    );
};

export default BrandListDetails;