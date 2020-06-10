import React from "react";
import {Link} from 'react-router-dom'
function Navbar() {
  return (

    <nav className="navbar">
                <div className="navbar__container">

                    <div className="navbar__menu">
                        <ul className="navbar__menu_list">
                            <li className="navbar__menu_list_item"><a href="#"
                                                                      className="navbar__menu_list_item_link">Home</a>
                            </li>
                            <li className="navbar__menu_list_item"><a href="#speakers" className="navbar__menu_list_item_link">The
                                Speakers</a>
                            </li>
                            <li className="navbar__menu_list_item"><a href="#team" className="navbar__menu_list_item_link">Our
                                Team</a>
                            </li>
                            <li className="navbar__menu_list_item"><Link to="/sponsors"
                                                                      className="navbar__menu_list_item_link">Sponsors</Link>
                            </li>
                        </ul>
                    </div>
                    <nav role="navigation">
                        <div id="menuToggle1">
                            <input type="checkbox"/>
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu1">
                                <a href="#">
                                    <li>Home</li>
                                </a>
                                <a href="#speakers">
                                    <li>The Speakers</li>
                                </a>
                                <a href="#team">
                                    <li>Our Team</li>
                                </a>
                                <Link to="/sponsors">
                                    <li>Sponsors</li>
                                </Link>
                            </ul>
                        </div>
                    </nav>
                  
                </div>
            </nav>
    
  );
}

export default Navbar;
