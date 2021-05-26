import React from 'react';
import './ContactUs.css';
import contactUsImage from '../../../img/skillied-team-1.jpg';

const ContactUs = () => {

    return (
       
        <div style={{ backgroundColor: "#ffffff", paddingTop:"120px", paddingBottom:"120px"}} id="contact">
        <div className="container my-5" >
            <div className="d-flex justify-content-between align-items-center">
            
            <div className="col-md-6">
                <div className="w-100 m-auto"> <h1 style={{ fontSize: "60px", fontWeight: "700", textAlign:"start" }}>Lets Talk Us</h1>
                    <p className="text-secondary pb-4 text-start">I am available for freelance work. Connect me with via <br /> phone: <b>01795-333022</b>  or email: <b>anamrasel@gmail.com</b> </p>
                </div>
                <form action="" className="text-start">
                <input type="text" className="form-control" placeholder="Your Name" /><br />
                <input type="number" className="form-control" placeholder="Phone"/><br />
                <input type="email" className="form-control" placeholder="Email Address" /><br />
                <textarea name="text" id="" className="form-control" cols="30" rows="10"></textarea>
                <button className="btn btn-custom-outline send-btn mt-2">Send Message</button>
                </form>
            </div>

            <div className="col-md-6">
                <img className="contactUsImage" src={contactUsImage} alt="" />
            </div>
        </div>
        </div>
        </div>
    );
};

export default ContactUs;