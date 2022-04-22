import React, { useState } from "react";
import logo from './../images/logo.png'
import './Navbar.css';
import { Link } from "react-scroll/modules";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => setActive(!active);

    return(
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} /> Peaky Blinders
            </div>

            <div className="navbar__menu" onClick={handleClick}>
                <i className={active ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'} />
            </div>

            <ul className={active ? "navbar__list active" : "navbar__list"}>
                    <li className="navbar__list-item" >
                        <a href="/" className="navbar__list-links">
                            <Link activeClass="active" to="home" spy={true} duration={500} onClick={handleClick}> Home </Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="/" className="navbar__list-links">
                        <Link activeClass="active" to="character" spy={true} duration={500} onClick={handleClick}> Character </Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="/" className="navbar__list-links">
                        <Link activeClass="active" to="seasons" spy={true} duration={500} onClick={handleClick}> Seasons </Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="/" className="navbar__list-links">
                        <Link activeClass="active" to="news" spy={true} duration={500} onClick={handleClick}> News </Link>
                        </a>
                    </li>
               </ul>
        </div>
    )
}

export default Navbar;