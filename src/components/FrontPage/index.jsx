import "./style.css"
import videoFrontPage from "../../assets/videos/home-frontPage.mp4"
import Button from "../Button"

const FrontPage = () => {

    return (
        <div className="home-frontPage">
            <video autoPlay muted loop id="fontPageVideo">
                <source src={videoFrontPage} />
            </video>
            <div className="home-frontPage-container">
                <div className="home-frontPage-content">
                    <h1 className="home-frontPage-title">DIVE INTO OUR WORLD</h1>
                    <p className="home-frontPage-text">Your gateway to unforgettable soccer experiences in Argentina and Brazil.</p>
                    <div className="home-frontPage-buttonContainer">
                        <Button title="Our Packages" white={true} />
                        <Button title="Join Us" white={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage