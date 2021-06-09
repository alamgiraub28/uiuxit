
import React from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ReviewSectionDetails.css';




const ReviewSectionDetails = ({review}) => {
   
    return (
        <div className="container">
          <div className="text-center">
          <img className="review-img" src={review.imageURL} alt="" />
          <p className="review-p">{review.description}</p>
          <h5 className="review-h5">{review.name}</h5>
          <h6 className="review-h6 pb-3">{review.designation}</h6>
          </div>
        </div>
        

    );
};

export default ReviewSectionDetails;