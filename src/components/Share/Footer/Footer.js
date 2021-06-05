import { faBehance, faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerLogo from '../../../img/logo-uiuxiwhite.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container ">
                <div class="row align-items-center justify-content-between">
    <div class="col-md-2 col-sm-12">
    <img className="img-fluid mb-5" src={footerLogo} alt="" />
    </div>
    <div class="col-md-4 col-sm-12 mb-5">
    <div className="d-flex align-items-center justify-content-center">
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
    </div>
    <div class="col-md-4 col-sm-12">
    <p className="text-light footer-note">© 2021. All rights reserved by uiuxit.com</p>
    </div>
  </div>

            </div>
        </div>

    );
};

export default Footer;