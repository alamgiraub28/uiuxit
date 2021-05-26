import React from 'react';
import './ServiceDetails.css';
const ServiceDetails = ({service}) => {
    return (
<div className="col-md-4 mb-4">
            <div className="service-card-bg">
                <div className="serviceIcon">
                <img className="h-100 serviceIconSVG" src={service.icon} alt=""/>
                <img className="h-100 serviceIconPNG" src={service.pngIcon} alt=""/>
                
                </div>
            <h1>{service.title}</h1>
            <p className="text-secondary">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;