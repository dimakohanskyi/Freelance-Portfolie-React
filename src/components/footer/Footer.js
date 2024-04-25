import  instagram from "./../../img/icons/instagram.svg";
import  twitter from "./../../img/icons/twitter.svg";
import  gitHub from "./../../img/icons/gitHub.svg";
import  linkedIn from "./../../img/icons/linkedIn.svg";
import './style.css'

const Footer = () => {

    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.instagram.com/dimmebliv.kremenets/?utm_source=ig_web_button_share_sheet&igshid=YzAwZjE1ZTI0Zg%3D%3D"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://twitter.com/DKohanskyi"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/dimakohanskyi"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/dima-kohanskyi2001/"><img src={linkedIn} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2024 fullstack-dev.com</p>
                </div>
            </div>
        </div>
      </footer>
    )
}

export default Footer;