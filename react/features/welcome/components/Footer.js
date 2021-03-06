import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="public-footer">
                <hr className="hrTag"></hr>
                <div className="footer">
                    <div className="footer-container">
                        <div className="inline-flex">
                            <div className="vertical-line-public-footer">
                                <img alt="durchere logo" src="images/durchere.png" className="durchere-logo-footer" />
                            </div>
                            <div className="footer-brand">DURCHERE
                            </div>
                            <div className="footer-motto">Be You For You
                            </div>
                            <div className="social-links">
                                <ul>
                                    <li>
                                        <a title="Join us on Facebook" target="_blank" href="https://www.facebook.com/Durchere-102317981861823">
                                            <img alt="Facbook logo" src="images/facebook.jpg" width="27" height="27" />
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Join us on Twitter" target="_blank" href="https://twitter.com/durchere/">
                                            <img alt="Twitter logo" src="images/instagram.jpg" width="27" height="27" />
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Join us on Instagram" target="_blank" href="https://www.instagram.com/durchere/">
                                            <img alt="Instagram logo" src="images/twitter.jpg" width="27" height="27" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="social-links-767 inline-flex">
                            <ul>
                                <li>
                                    <a title="Join us on Facebook" target="_blank" href="https://www.facebook.com/Durchere-102317981861823">
                                        <img alt="Facbook logo" src="images/facebook.jpg" width="27" height="27" />
                                    </a>
                                </li>
                                <li>
                                    <a title="Join us on Twitter" target="_blank" href="https://twitter.com/durchere/">
                                        <img alt="Twitter logo" src="images/twitter.jpg" width="27" height="27" />
                                    </a>
                                </li>
                                <li>
                                    <a title="Join us on Instagram" target="_blank" href="https://www.instagram.com/durchere/">
                                        <img alt="Instagram logo" src="images/instagram.jpg" width="27" height="27" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="float-section inline-block">
                            <aside className="footer-copy-right" aria-label="The Fine Print.">
                                <span className="copy-right-text">???? 2021 Durchere INC.,&nbsp;
                                        <a className="legal-link" to="#">Legal.</a>
                                </span>
                            </aside>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;