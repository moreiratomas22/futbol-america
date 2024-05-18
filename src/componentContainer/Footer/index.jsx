import "./style.css"
import instagram from "../../assets/icons/Instagram.png"
import linkedin from "../../assets/icons/LinkedIn.png"
import twitterX from "../../assets/icons/TwitterX.png"
import facebook from "../../assets/icons/Facebook.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contactInfo">
                    <p>futbolamerica@mail.com</p>
                    <p>+54 9 2235 96 59 40</p>
                    <p>+54 9 9907 9023</p>
                </div>
                <h4 className="footer-title">Home</h4>
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