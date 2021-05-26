
import { faFacebook, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SkilledTeamDetails.css';

const SkilledTeamDetails = ({skillPerson}) => {
    

    return (
        <div className="col-md-4 col-sm-6">
            <div class="skillDetails">
                <img src={skillPerson.image} class="w-100" alt="..." />
                <div class="team-details py-4 ps-5">
                    <div className="socialLink text-start pt-3">
                    <a href={skillPerson.socialIcon.facebook} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{color:"#ffffff", fontSize:"20px" }} className="icon" icon={faFacebook}/>
                    </a>
                    <a href={skillPerson.socialIcon.facebook} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{color:"#ffffff", fontSize:"20px"}} className="icon" icon={faYoutube}/>
                    </a>
                    <a href={skillPerson.socialIcon.facebook} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{color:"#ffffff", fontSize:"20px"}} className="icon" icon={faTwitter}/>
                    </a>
                    <a href={skillPerson.socialIcon.facebook} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{color:"#ffffff", fontSize:"20px"}} className="icon" icon={faLinkedinIn}/>
                    </a>
                    </div>
                <div className="detail-text p-0 text-start">
                <h5>{skillPerson.title}</h5>
                <p>{skillPerson.designation}</p>
                </div>
            </div>
            </div>
            
            
        </div>
    );
};

export default SkilledTeamDetails;