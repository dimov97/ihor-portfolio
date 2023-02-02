import React, {memo, useEffect, useState} from 'react';
import {Link} from "react-scroll";
// import {Link as LinkRouter} from "react-router-dom";
import './header.css';

export const Header = memo(({}) => {
    /*=============== Change Background Header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")


    useEffect(() => {
        window.location.href = activeNav
    }, [activeNav])

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="#" className="nav__logo">Ihor</a>

                <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}


                                    onClick={() => setActiveNav("#home")}
                                    className={activeNav === "#home" ? "nav__link" : "nav__link"}
                                >
                                    <i className="uil uil-estate nav__icon"></i> Home
                                </Link>
                        </li>


                        <li className="nav__item">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}

                                onClick={() => setActiveNav("#about")}
                                className={activeNav === "#about" ? "nav__link" : "nav__link"}
                            >
                                <i className="uil uil-user nav__icon"></i> About
                            </Link>
                        </li>


                        <li className="nav__item">
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}

                                onClick={() => setActiveNav("#skills")}
                                className={activeNav === "#skills" ? "nav__link " : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </Link>
                        </li>


                        <li className="nav__item">
                            <Link
                                to="qualification"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}

                                onClick={() => setActiveNav("#qualification")}
                                className={activeNav === "#qualification" ? "nav__link " : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Qualification
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}

                                onClick={() => setActiveNav("#portfolio")}
                                className={activeNav === "#portfolio" ? "nav__link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}

                                onClick={() => setActiveNav("#contact")}
                                className={activeNav === "#contact" ? "nav__link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </Link>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu((!Toggle))}></i>
                </div>


                <div className="nav__toggle" onClick={() => showMenu((!Toggle))}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
});
