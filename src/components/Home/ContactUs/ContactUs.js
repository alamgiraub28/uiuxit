import React from 'react';
import './ContactUs.css';
import contactUsImage from '../../../img/contactus-img.png';

const ContactUs = () => {

    return (

        <div style={{ backgroundColor: "#ffffff", padding: "120px 0" }} id="contact">
            <div className="container" >
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-12 mb-5">
                        <div className="">
                            <h1 style={{ fontSize: "60px", fontWeight: "700", textAlign: "start" }}>Lets Talk Us</h1>
                            <p className="text-secondary pb-4 text-start">I am available for freelance work. Connect me with via  phone: <b>01795-333022</b>  or email: <b>anamrasel@gmail.com</b> </p>
                        </div>
                        <form action="" className="text-start">
                            <input type="text" className="form-control" placeholder="Your Name" /><br />
                            <input type="number" className="form-control" placeholder="Phone" /><br />
                            <input type="email" className="form-control" placeholder="Email Address" /><br />
                            <textarea name="text" id="" className="form-control" cols="30" rows="10"></textarea>
                            <button className="btn btn-custom-outline send-btn mt-4">Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <img className="contactUsImage w-100" src={contactUsImage} alt="" />
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default ContactUs;