import React from 'react';
import AboutCard from '../AboutCard/AboutCard';
import IconCreate from '../../../img/about-creativeIcon.png';
import IconSuper from '../../../img/superIdeaIcon.png';
import IconFast from '../../../img/fastperformance.png';
import aboutPic from '../../../img/about-pic.png';
import './AboutUs.css';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const aboutInfoData = [
    {
        icon: IconCreate,
        title: "Creative Design",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, voluptate."
    },

    {
        icon: IconSuper,
        title: "Super Idear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, voluptate."
    },

    {
        icon: IconFast,
        title: "Fast Performance",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, voluptate."
    },
]

const AboutUs = () => {
    return (
        <div className="container about-content-main" id="about">
            <div className="row ">
                {
                    aboutInfoData.map(about => <AboutCard about={about}></AboutCard>)
                }
            </div>

            <div className="container about-secondPart">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <img className="img-fluid" src={aboutPic} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 aboutUs-content">
                        <div class="row">
                            <div class="col-12">
                                <h1>About</h1>
                                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                            <div class="col-md-6">
                                <h1 className="title-feature">Who we are</h1>
                                <p className="text-secondary">
                                <FontAwesomeIcon icon={faCheck} className="faCheck"/> State Of The Art Design <br />
                                <FontAwesomeIcon icon={faCheck} className="faCheck"/> Robust & Symantec Coing <br />
                                <FontAwesomeIcon icon={faCheck} className="faCheck"/> Industry Standard Support
                                </p>
                            </div>
                            <div class="col-md-6">
                                <h1 className="title-feature">Why with us</h1>
                                <p className="text-secondary">
                                <FontAwesomeIcon icon={faCheck} className="faCheck"/> State Of The Art Design <br />
                                <FontAwesomeIcon icon={faCheck} className="faCheck"/> Robust & Symantec Coing <br />
                                <FontAwesomeIcon icon={faCheck} className="faCheck"/> Industry Standard Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;