import { faBehance, faFacebook, faFacebookF, faLinkedin, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerLogo from '../../../img/logo-uiuxiwhite.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container ">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="col-md-2"><img className="w-50" src={footerLogo} alt="" /></div>

                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <a
                            class="btn-social-footer"
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon className="icon-footer" icon={faFacebookF}/>
                    </a>
                    <a
                            class="btn-social-footer"
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon className="icon-footer" icon={faTwitter}/>
                    </a>
                    <a
                            class="btn-social-footer"
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon className="icon-footer" icon={faYoutube}/>
                    </a>
                    <a
                            class="btn-social-footer"
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon className="icon-footer" icon={faLinkedin}/>
                    </a>
                    <a
                            class="btn-social-footer"
                            href="#!"
                            role="button"
                        ><FontAwesomeIcon className="icon-footer" icon={faBehance}/>
                    </a>

                   

                    </div>
                    <div className="col-md-4">
                        <p className="text-light footer-note">© 2021. All rights reserved by uiuxit.com</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;