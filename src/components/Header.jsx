import React from 'react'
import '../assets/styles/main.css'

function Header(){
    return(
        <header className="header">
                <div className="header__container">
                        <img className="header__logo" src="../assets/img/Logo.png" alt="" />
                        <a href="#registerPopUp" className="registerBigButton">
                            معرفی سخنران
                        </a>
                </div>
                    <div className="header__details">
                    
                </div>
        </header>
    )
}

export default Header;