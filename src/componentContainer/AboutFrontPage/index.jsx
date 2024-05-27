import "./style.css"
import frontImg from "../../assets/images/aboutUs.png"


const AboutFrontPage = () => {

    return (
        <section className="about-frontPage-container">
            <img src={frontImg} alt="" />
            <div className='about-frontPage-content'>
                <h1 className='about-frontPage-title'>DISCOVER OUR <span>STORY</span></h1>
                <div className='about-frontPage-leftTextContainer'>
                    <p className='about-frontPage-text'>Our vision is to lead sports tourism in South America, guided by ethics, transparency, and social responsibility.</p>
                    <p className='about-frontPage-text'>Futbol America has strived to achieve success, working hand in hand with the best first division professional clubs in Brazil and Argentina, their national teams and amateur clubs. This gives us the flexibility to organize football activities for all levels and ages. We are equally aware of the increasing standards of our clients. Therefore, we will customize our program to meet the needs of each client. We coordinate all the games, fields, food, transportation, lodging and tourism. We recognize that only by providing consistently high-quality performance and service experience can we exceed these expectations and maintain long-term relationships based on trust. </p>
                </div>
                <div className='about-frontPage-rightTextContainer'>
                    <p className='about-frontPage-text'>Since <span>1998</span>, Futbol America Tours has been a leader in sports tourism, dedicated to providing exceptional logistics services and travel organization for athletes, managers, and teams connected to the world of sports. Our commitment to excellence is evident in every aspect of our highly specialized services, tailored to meet the unique needs and specifications of each sport.</p>
                </div>
            </div>

        </section>
    )
}

export default AboutFrontPage