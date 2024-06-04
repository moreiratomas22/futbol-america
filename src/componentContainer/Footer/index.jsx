import { Link, useLocation } from "react-router-dom"
import "./style.css"
import instagram from "../../assets/icons/Instagram.png"
import linkedin from "../../assets/icons/LinkedIn.png"
import twitterX from "../../assets/icons/TwitterX.png"
import facebook from "../../assets/icons/Facebook.png"

const Footer = () => {

    const location = useLocation()
    const getInfo = () => {
        switch (location.pathname) {
            case "/":
                return { title: "Home", toLink: "/" }
            case "/services":
                return { title: "Contact Us", toLink: "/contact" }
            case "/about":
                return { title: "Check Our Services", toLink: "/services" }
            case "/contact":
                return { title: "Home", toLink: "/" }
            default:
                return { title: "Home", toLink: "/" };
        }
    }

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    const info = getInfo()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contactInfo">
                    <p>futbolamerica@mail.com</p>
                    <p>+54 9 2235 96 59 40</p>
                    <p>+54 9 9907 9023</p>
                </div>
                <Link to={info.toLink} onClick={handleLinkClick} className="footer-title-link"><h4 className="footer-title">{info.title}</h4></Link>
                <div className="footer-smIcons">
                    <img src={linkedin} alt="LinkedIn" />
                    <img src={twitterX} alt="Twitter - X" />
                    <img src={instagram} alt="Instagram" />
                    <img src={facebook} alt="Facebook" />
                </div>
            </div>
            <div className="footer-copyright">
                <p>@Copyright. All rights recerved</p>
            </div>
        </footer>
    )
}

export default Footer