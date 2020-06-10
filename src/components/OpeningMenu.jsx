import React from 'react';
import '../assets/styles/main.css';
import {Link} from 'react-router-dom'
function OpeningMenu() {
    return (
        <>
            <div className="openingMenu">
                <ul className="openingMenu__list">
                    <a className="openingMenu__close">&times;</a>
                    <li className="openingMenu__item">
                        <a className="openingMenu__link" href="#" >Home</a>
                    </li>
                    <li className="openingMenu__item">
                        <a className="openingMenu__link" href="#speakers" >The Speakers</a>
                    </li>
                    <li className="openingMenu__item">
                        <a className="openingMenu__link" href="team" >Our Team</a>
                    </li>
                    <li className="openingMenu__item">
                        <a className="openingMenu__link" ><Link className="openingMenu__link" to="/sponsers">Sponsors</Link></a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default OpeningMenu;
