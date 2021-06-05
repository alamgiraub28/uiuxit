import React from 'react';
import serviceIcon from '../../../img/service-icon.svg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import pngIconT from '../../../img/service-icon.png';

const serviceData = [
    {
        icon: serviceIcon,
        pngIcon: pngIconT,
        title: "Website Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },

    {
        icon: serviceIcon,
        pngIcon: pngIconT,
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },


    {
        icon: serviceIcon,
        pngIcon: pngIconT,
        title: "APP Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },


    {
        icon: serviceIcon,
        pngIcon: pngIconT,
        title: "Word-press Themes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },


    {
        icon: serviceIcon,
        pngIcon: pngIconT,
        title: "HTML Template",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },


    {
        icon: serviceIcon,
        pngIcon: pngIconT,
        title: "Domain & Hosting",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    }
]

const Services = () => {
    return (
        <div style={{ backgroundColor: "#f6f7fc", padding:"120px 0"}} id="services">
            <div className="container">
                <div className="col-md-6 m-auto col-sm-12">
                <h1 style={{ fontSize: "60px", fontWeight: "700" }}>Services</h1>
                <p style={{ fontSize: "16px",  margin:"auto"}} className="text-secondary pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida.</p>
                </div>
               
            </div>
            <div className="container">
                <div className="row">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;