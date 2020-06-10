import React from 'react'
import '../assets/styles/main.css'
import { ReactComponent as Instagram } from '../assets/img/instagram.svg'
import { ReactComponent as Telegram } from '../assets/img/telegram.svg'

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container">
                        <ul className="footer__socials">
                    
                            <li className="footer__socials_item">
                                <a href="https://t.me/tedx_universityofisfahan"><Telegram width="65px"
                                                 style={{marginRight: "1rem"}}/></a>
                            </li>
                            <li className="footer__socials_item">
                                <a href="https://instagram.com/tedx_universityofisfahan?igshid=10c0bb32ue44c"><Instagram width="65px"/></a>
                            </li>
                        </ul>
                        <p className="footer__copyright">
                            This independent TEDx event is operated under license from TED. | Copyright &copy; 2019
                            TEDxUniversityOfIsfahan | All Rights Reserved.| This website is created by <a
                            href="https://www.linkedin.com/in/niloofar-mojoodi-27b953176/" className="web-creators" >Niloofar Mojoodi
                            </a> <a href="https://www.linkedin.com/in/farid-shokri/" className="web-creators" >Farid
                            Shokri</a> <a href="https://www.linkedin.com/in/mmoallemi99/" className="web-creators" >Mohammad
                            Moallemi</a>
                        </p>
                    </div>
                </footer>

            </>
        )
    }
}
export default Footer;