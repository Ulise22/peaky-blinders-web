import React from "react";
import { Link } from "react-scroll/modules";
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__space"></div>

            <div className="footer__social">
                <div className="footer__social__container">
                    <a href="/" className="footer__social__link">
                        <i className="fab fa-facebook fa-2x" />
                    </a>
                    <a href="/" className="footer__social__link">
                        <i className="fab fa-twitter fa-2x" />
                    </a>
                    <a href="/" className="footer__social__link">
                        <i className="fab fa-instagram fa-2x" />
                    </a>
                    <a href="/" className="footer__social__link">
                        <i className="fab fa-tiktok fa-2x" />
                    </a>
                    <a href="/" className="footer__social__link">
                        <i className="fab fa-tumblr fa-2x" />
                    </a>
                </div>
            </div>

            <div className="footer__media">
                <div className="footer__media__list">
                    <a href="/" className="footer__media__list__link">Help</a>
                    <a href="/" className="footer__media__list__link">Terms y Conditions</a>
                    <a href="/" className="footer__media__list__link">Conditions</a>
                    <a href="/" className="footer__media__list__link">Privacity</a>
                    <a href="/" className="footer__media__list__link">News</a>
                    <a href="/" className="footer__media__list__link">Publicity</a>
                </div>
                <div>
                    <a className="footer__media__btn"><Link activeClass="active" to="home" spy={true} duration={500} > Go Back </Link></a>
                </div>
            </div>

            <div className="footer__copy">
                <h3 className="footer__copy__text">© All rights reserved. PeakyBlinders-TributePage 2022</h3>
            </div>
        </div>
    )
}

export default Footer;