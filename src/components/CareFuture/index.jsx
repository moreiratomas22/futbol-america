import "./style.css"
import background from "../../assets/images/careFuture.png"
import Button from "../Button"
import handShake from "../../assets/icons/Hand Shake Icon.png"
import smartBrain from "../../assets/icons/Smart Brain Icon.png"
import userSatisfaction from "../../assets/icons/User Satisfaction Icon.png"

const CareFuture = () => {

    return (
        <section >
            <div className="careFuture-frontPage">
                <img className="careFuture-bg" src={background} alt="" />
                <div className="careFuture-container">
                    <div className="careFuture-content">
                        <h2 className="careFuture-title"><span>WE CARE</span> ABOUT YOUR FUTURE</h2>
                        <p className="careFuture-text">Immerse yourself in the excitement of soccer and the vibrant tapestry of South American culture like never before.</p>
                        <Button title="Find Out More" white={false} />
                    </div>
                </div>
            </div>
            <div className="careFuture-items">
                <ul>
                    <li>
                        <img src={smartBrain} alt="" />
                        <p>Founded by passionate soccer enthusiasts from Argentina and Brazil, we bring a wealth of knowledge and experience to every trip.</p>
                    </li>
                    <li>
                        <img src={userSatisfaction} alt="" />
                        <p>Your satisfaction is our priority. We go above and beyond to ensure a seamless and unforgettable experience for your team.</p>
                    </li>
                    <li>
                        <img src={handShake} alt="" />
                        <p>With a focus on transparency and authenticity, we aim to build trust with our customers, providing them with peace of mind every step of the way.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CareFuture