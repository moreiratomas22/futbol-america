import "./style.css"
import video from "../../assets/videos/contact-video.mp4"
import Button from "../../components/Button"

const Contact = () => {
    return (
        <>
            <main className="contactMain">
                <div className="contactContent">
                    <h2><span className="yellowColor">YOUR ADVENTURE</span> IS JUST A STEP AWAY</h2>
                    <h3>Contact us and live the experience.</h3>
                    <form className="contactForm">
                        <input className="contact-textInput" type="text" name="fullName" id="fullName" placeholder="Full Name" />
                        <input className="contact-textInput" type="email" name="email" id="email" placeholder="Email Adress" />
                        <textarea className="contact-textAreaInput" name="textArea" id="textArea" placeholder="Message"></textarea>
                        <div className="contact-checkboxContainer">
                            <input type="checkbox" name="" id="" />
                            <p>By submitting this form you agree to send your informationto Futbol America . We will use it
                                to support our commercial activity and send your newsletters according to our pricavy policy.</p>
                        </div>
                        <Button   title="Submit" white={false}/>
                    </form>
                </div>
            </main>
            <div className="contact-videoContainer">
                <video autoPlay muted loop id="contactVideo">
                    <source src={video} />
                </video>
            </div>
        </>
    )
}

export default Contact