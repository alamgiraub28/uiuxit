import { faBehance, faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerLogo from '../../../img/logo-uiuxiwhite.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-2 col-sm-12 gx-2 text-center p-0">
                        <img className="img-fluid" src={footerLogo} alt="" />
                    </div>
                    <div class="col-md-7 col-sm-12 gx-2 gy-4 text-center p-0 bg-danger">
                    <a
                                class="btn-social-footer"
                                href="#!"
                                role="button"
                            ><FontAwesomeIcon className="icon-footer" icon={faFacebookF} />
                            </a>
                            <a
                                class="btn-social-footer"
                                href="#!"
                                role="button"
                            ><FontAwesomeIcon className="icon-footer" icon={faTwitter} />
                            </a>
                            <a
                                class="btn-social-footer"
                                href="#!"
                                role="button"
                            ><FontAwesomeIcon className="icon-footer" icon={faYoutube} />
                            </a>
                            <a
                                class="btn-social-footer"
                                href="#!"
                                role="button"
                            ><FontAwesomeIcon className="icon-footer" icon={faLinkedin} />
                            </a>
                            <a
                                class="btn-social-footer"
                                href="#!"
                                role="button"
                            ><FontAwesomeIcon className="icon-footer" icon={faBehance} />
                            </a>
                    </div>
                    <div class="col-md-3 col-sm-12 gx-2 gy-4 bg-info text-center p-0">
                        <small className="text-light">© 2021. All rights reserved, uiuxit.com</small>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Footer;