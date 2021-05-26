import React from 'react';
import SkilledTeamDetails from '../SkilledTeamDetails/SkilledTeamDetails';
import './SkilledTeam.css';
import teamMember from '../../../img/skillied-team-1.jpg';
import teamMemberSecond from '../../../img/skillied-team-2.jpg';

const skilledTeamData = [
    {   id:"1",
        image: teamMember,
        title: "Alamgir Hossain",
        designation: "Founder & CEO",
        socialIcon: {
            facebook: "https://www.facebook.com/mdakashali",
            twitter: "",
            linkedIn: "",
            youtube: "",
            instagram: "",
        }
    },

    {   id:"2",
        image: teamMemberSecond,
        title: "Alamgir Hossain",
        designation: "Founder & CEO",
        socialIcon: {
            facebook: "https://www.facebook.com/rasel",
            twitter: "",
            linkedIn: "",
            youtube: "",
            instagram: "",
        }
    },

    {   id:"3",
        image: teamMember,
        title: "Alamgir Hossain",
        designation: "Founder & CEO",
        socialIcon: {
            facebook: "https://www.facebook.com/alamgir",
            twitter: "",
            linkedIn: "",
            youtube: "",
            instagram: "",
        }
    },

    {   id:"4",
        image: teamMemberSecond,
        title: "Alamgir Hossain",
        designation: "Founder & CEO",
        socialIcon: {
            facebook: "",
            twitter: "",
            linkedIn: "",
            youtube: "",
            instagram: "",
        }
    },

    {   id:"5",
        image: teamMember,
        title: "Alamgir Hossain",
        designation: "Founder & CEO",
        socialIcon: {
            facebook: "",
            twitter: "",
            linkedIn: "",
            youtube: "",
            instagram: "",
        }
    },


    {   id:"6",
        image: teamMemberSecond,
        title: "Alamgir Hossain",
        designation: "Founder & CEO",
        socialIcon: {
            facebook: "https://www.facebook.com/mdakashali",
            twitter: "www.youtube",
            linkedIn: "",
            youtube: "",
            instagram: "",
        }
    },
]

const SkilledTeam = () => {
    return (
        <div style={{ backgroundColor: "#f6f7fc", padding: "120px"}} id="team">
            <div className=""> 
            <h1 style={{ fontSize: "60px", fontWeight: "700" }}>Skilled Team</h1>
             <p style={{ fontSize: "16px", width: "750px", margin:"auto",  paddingBottom: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida.</p>
            </div>
            <div className="container">
            <div className="row">
                            {
                                skilledTeamData.map(skillPerson =><SkilledTeamDetails skillPerson={skillPerson} key={skillPerson.id}></SkilledTeamDetails>)
                            }
            </div>
            </div>
        </div>
    );
};

export default SkilledTeam;