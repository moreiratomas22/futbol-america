import "./style.css"
import video from "../../assets/videos/contact-video.mp4"

const Contact = () => {
    return (
        <main className="contactMain">
            <div>
                <h2><span>YOUR ADVENTURE</span> IS JUST A STEP AWAY</h2>
                <h3>Contact us and live the experience.</h3>
                <form className="contactForm">
                    <input type="text" name="fullName" id="fullName" placeholder="Full Name" />
                    <input type="email" name="email" id="email" placeholder="Email Adress" />
                    <textarea name="textArea" id="textArea">Message</textarea>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <p>By submitting this form you agree to send your informationto Futbol America . We will use it
                            to support our commercial activity and send your newsletters according to our pricavy policy.</p>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <video autoPlay muted loop id="contactVideo">
                <source src={video} />
            </video>
        </main>
    )
}

export default Contact