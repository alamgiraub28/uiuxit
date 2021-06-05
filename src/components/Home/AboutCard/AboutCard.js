import React from 'react';
import './AboutCard.css';

const AboutCard = ({about}) => {
    return (
        <div className="col-md-4 mb-4 card-zindex">
            <div className="about-content shadow card">
                <div className="iconCustom">
                <img className="img-fluid" src={about.icon} alt=""/>
                </div>
            <h1>{about.title}</h1>
            <p className="text-secondary">{about.description}</p>
            </div>
        </div>
    );
};

export default AboutCard;