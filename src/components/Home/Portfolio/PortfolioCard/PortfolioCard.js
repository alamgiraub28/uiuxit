import React from 'react';
import './PortfolioCard.css';



const PortfolioCard = ({element}) => {
    return (
        <div className="col-md-4">
            <div className="galleryImg" >
                <img className="w-100" src={element.imageURL} alt="" />
                <div className="hoverStyle d-flex justify-content-center align-items-center">
                    <a className="text" href={element.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;