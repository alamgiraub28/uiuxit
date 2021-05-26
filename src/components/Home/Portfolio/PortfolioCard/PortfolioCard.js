import React from 'react';
import './PortfolioCard.css';



const PortfolioCard = ({element}) => {
    return (
<div className="row">
    <div className="col-md-12">
        <div>
                <div className="galleryImg" >
            <img className="w-100" src={element.imageURL} alt=""/>
                <div className="hoverStyle d-flex justify-content-center align-item-center">
                    <a className="text" href={element.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default PortfolioCard;