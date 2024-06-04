import "./style.css"
import checkpointsImg from "../../assets/images/checkpoints.png"
import checkpointTopImg from "../../assets/images/checkpoints-top.png"
import checkpointsPhoneImg from "../../assets/images/checkpoints-phone.png"
import checkpointsPhoneTopImg from "../../assets/images/checkpoints-phone-top.png"

const Checkpoints = () => {

    return (
        <>
            <section className="checkpoints-container">
                <img className="checkpoints-imgTop" src={checkpointTopImg} alt="" />
                <img className="checkpoints-img" src={checkpointsImg} alt="" />
                <div className="cp-item cp-mission"></div>
                <div className="cp-item cp-dedication"></div>
                <div className="cp-item cp-excellence"></div>
                <div className="cp-item cp-vision"></div>
                <div className="cp-item cp-values"></div>
                <div className="cp-item cp-career"></div>
            </section>
            <section className="checkpoints-phone-container">
                    <img className="checkpoints-phone-imgTop" src={checkpointsPhoneTopImg} alt="" />
                    <img className="checkpoints-phone-img" src={checkpointsPhoneImg} alt="" />
                    <div className="cp-item-phone cp-phone-mission">
                        <h3>Mission</h3>
                        <p>Futbol America is dedicated to creating and developing solutions for sports tourism, ensuring that institutions and players receive comprehensive logistics services while upholding our commitment to socially responsible sporting events.</p>
                    </div>
                    <div className="cp-item-phone cp-phone-dedication">
                        <h3>Dedication</h3>
                        <p>We meticulously plan each trip, conducting inspection trips to optimize flight plans and minimize waiting times. Our priority is to create a seamless travel experience by providing check-in facilities at airports and hotels, ensuring athletes' comfort and well-being throughout their journey.</p>
                    </div>
                    <div className="cp-item-phone cp-phone-excellence">
                        <h3>Excellence</h3>
                        <p>Our team selects hotels that cater to athletes' needs, offering differentiated room service, quality meals, and convenient locations near training fields and stadiums. With specialized expertise in sports tourism, we are always available to address any issues and provide assistance during your trip.</p>
                    </div>
                    <div className="cp-item-phone cp-phone-vision">
                        <h3>Vision</h3>
                        <p>Our vision is to become a benchmark in sports tourism throughout South America, setting the standard for excellence in service and customer satisfaction.</p>
                    </div>
                    <div className="cp-item-phone cp-phone-values">
                        <h3>Values</h3>
                        <p>We are guided by principles of ethics, transparency, and socio-environmental responsibility in all aspects of our operations.</p>
                    </div>
                    <div className="cp-item-phone cp-phone-career">
                        <h3>Career Mentorship</h3>
                        <p>Based on our experience in the industry of soccer and our network composed by coaches, scouts, video analyst, we can always collaborate to propose the best pathways for your future in soccer. There are many angles to consider and help the player and his family to choose the right decision. Futbol America can be next to you in that specific moment of your life.</p>
                    </div>
            </section>
        </>
    )
}

export default Checkpoints