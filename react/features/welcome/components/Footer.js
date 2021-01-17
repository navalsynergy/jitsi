import React, { Component } from 'react';
import '../../../../css/footer/footer.scss';
import faceBookLogo from '../../../../images/facebook.jpg';
import twitterLogo from '../../../../images/twitter.jpg';
import instagramLogo from '../../../../images/instagram.jpg';
import durchereLogo from '../../../../images/durchere.png';
import {Link } from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <div className="public-footer">
                <hr className="hrTag"></hr>
                <div className="footer">
                    <div className="footer-container">
                        <div className="inline-flex">
                            <div className="vertical-line-public-footer">
                                <Link title="durchere" to="/">
                                    <img alt="durchere logo" src={durchereLogo} className="durchere-logo-footer" />
                                </Link>
                            </div>
                            <div className="footer-brand">DURCHERE
                            </div>
                            <div className="footer-motto">Be You For You
                            </div>
                            <div className="social-links">
                                <ul>
                                    <li>
                                        <a title="Join us on Facebook" href="/">
                                            <img alt="Facbook logo" src={faceBookLogo} width="27" height="27" />
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Join us on Twitter" href="https://twitter.com/durchere/">
                                            <img alt="Twitter logo" src={twitterLogo} width="27" height="27" />
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Join us on Instagram" href="https://www.instagram.com/durchere/">
                                            <img alt="Instagram logo" src={instagramLogo} width="27" height="27" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="social-links-767 inline-flex">
                            <ul>
                                <li>
                                    <a title="Join us on Facebook" href="/">
                                        <img alt="Facbook logo" src={faceBookLogo} width="27" height="27" />
                                    </a>
                                </li>
                                <li>
                                    <a title="Join us on Twitter" href="https://twitter.com/durchere/">
                                        <img alt="Twitter logo" src={twitterLogo} width="27" height="27" />
                                    </a>
                                </li>
                                <li>
                                    <a title="Join us on Instagram" href="https://www.instagram.com/durchere/">
                                        <img alt="Instagram logo" src={instagramLogo} width="27" height="27" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="float-section inline-block">
                            <nav className="" role="navigation" aria-label="Explore the site.">
                                <Link className="footer-link" to="/Partners">Partners</Link>
                                {/*<Link className="footer-link" to="/PublicBooks">Books</Link>*/}
                                <Link className="footer-link" to="/AboutUs">About</Link>
                                <Link className="footer-link" to="/Careers">Careers</Link>
                                <Link className="footer-link" to="/ContactUs">Contact</Link>
                                {
                                    this.props.isPublicPath &&
                                    <Link className="footer-link" to="/PublicBooks">Books</Link>
                                }
                            </nav>
                            <aside className="footer-copy-right" role="complementary" aria-label="The Fine Print.">
                                <span className="copy-right-text">© 2020 Durchere LLC.&nbsp;
                                        <Link className="legal-link" to="#">Legal.</Link>
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
