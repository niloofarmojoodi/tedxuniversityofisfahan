import React from 'react';
import '../assets/styles/main.css'
import logo from '../assets/img/logo_black.png'
import {Link} from 'react-router-dom'

function StickyNavbar() {
    return (
        <nav className="stickyNavbar hidden">
            <div className="navbar__container">
                <div className="stickyNavbar__brand">
                    <img src={logo} alt=""/>
                </div>
                <div className="stickyNavbar__menu">
                    <ul className="stickyNavbar__menu_list">
                        <li className="stickyNavbar__menu_list_item"><a href="#"
                                                                        className="stickyNavbar__menu_list_item_link">Home</a>
                        </li>
                        <li className="stickyNavbar__menu_list_item"><a href="#speakers"
                                                                        className="stickyNavbar__menu_list_item_link">The
                            Speakers</a></li>
                        <li className="stickyNavbar__menu_list_item"><a href="#team"
                                                                        className="stickyNavbar__menu_list_item_link">Our
                            Team</a></li>
                        <li className="stickyNavbar__menu_list_item"><a href="#"
                                                                        className="stickyNavbar__menu_list_item_link"><Link to="/sponsors" className="navbar__menu_list_item_link">
                                                                        Sponsors
                                                                      </Link></a>
                        </li>
                    </ul>
                </div>

                <div className="stickyNavbar__buttons">
                    <a href="#registerPopUp" className="navbar__register">
                        Register
                    </a>
                    <a href="#" className="navbar__lang">
                        FA
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default StickyNavbar;
