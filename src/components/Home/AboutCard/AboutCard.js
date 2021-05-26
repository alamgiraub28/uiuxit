import React from 'react';
import './AboutCard.css';

const AboutCard = ({about}) => {
    return (
        <div className="col-md-4 about-content-main">
            <div className="about-content shadow">
                <div className="iconCustom">
                <img className="h-100" src={about.icon} alt=""/>
                </div>
            <h1>{about.title}</h1>
            <p className="text-secondary">{about.description}</p>
            </div>
        </div>
    );
};

export default AboutCard;