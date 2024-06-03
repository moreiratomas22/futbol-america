import { BgGallery, InfiniteGallery, Schedules, Testimony } from "../../components"
import "./style.css"
import argentinaImg from "../../assets/images/bgGallery/argentina.png"
import brazilImg from "../../assets/images/bgGallery/brazil.png"
import AccordionContainer from "../AccordionContainer"
import AutoGalleryContainer from "../AutoGalleryContainer"
import HotelSectionContainer from "../HotelSectionContainer"
import shermanImg from "../../assets/testimonies/sherman.jpg"
import pittman from "../../assets/testimonies/pittman.jpg"

const Services = () => {

    const imagesAndInfo = [
        {
            title: "BRAZIL",
            desc: "Dive into the electric soccer atmosphere of Rio, where the rhythm of the game pulses through the city. Train under the tropical sun, perfecting your skills against the backdrop of sandy beaches and lush landscapes. Explore legendary stadiums, where soccer history comes alive with every step. Indulge in the diverse flavors of Brazilian cuisine, tasting local dishes that ignite your passion for the game. Engage in friendly matches against local teams, experiencing the thrill of competition in Rio's dynamic atmosphere. Prepare for a soccer journey like no other in this iconic city.",
            img: brazilImg,
        },
        {
            title: "ARGENTINA",
            desc: "Experience the dynamic soccer culture of La Plata, where every moment on the pitch is infused with passion and dedication. Train with top-tier clubs in cutting-edge facilities, refining your skills under expert guidance. Immerse yourself in the rich history of iconic stadiums, where soccer legends have left their mark. Indulge in the savory flavors of Argentine cuisine, sampling local delicacies that fuel your soccer adventures. Engage in friendly matches against local teams, immersing yourself in the competitive spirit of La Plata. Get ready for an unforgettable soccer experience in this vibrant city.",
            img: argentinaImg
        }
    ]

    const testimony1 = {
        title: '"Unforgettable Experience!"',
        stars: 5,
        desc: '"Visiting Argentina with Futbol America tours was an experience of a lifetime. I got to play the beautiful sport in a different way. I experienced  a completely new culture and lifestyle. Getting to train with world class players was really something special. Touring throughout La plata and visiting in Buenos Aires was something I’ll never forget. It was really amazing to visit stadiums such as BOCA and Estudiantes. The highlight of the trip was the opportunity to watch the Copa Argentina semifinal between Defensa y Justicia and San Lorenzo. It let me understand how passionate the fans are about the game they love. The trip was truly a wonderful experience and would certainly recommend futbol America tours."',
        img: shermanImg,
        name: "Sam Sherman",
        job: ""
    }

    const testimony2 = {
        title: '"Dream Come True!"',
        stars: 5,
        desc: '"If you' + "'" + 're a soccer enthusiast looking to immerse yourself in the rich tapestry of Argentine soccer culture while exploring the beautiful sights of the country, then Futbol America' + "'" + 's tour is an absolute must! From the moment we landed, the tour was flawlessly organized, with each day packed full of activities that catered to both the passionate soccer fan and the avid traveler. Watching games in some of Argentina' + "'" + 's most storied stadiums, we felt the pulsating energy of the crowds and the raw passion for the beautiful game. But Futbol America' + "'" + 's experience goes far beyond just watching soccer; they arranged for us to play friendly matches with local teams, providing a rare and thrilling chance to truly engage with the sport at a grassroots level. The camaraderie and sportsmanship displayed were heartwarming, creating memories that will last a lifetime. In addition to the soccer-filled agenda, Futbol America did a phenomenal job of integrating cultural experiences. We explored vibrant Buenos Aires. Each activity was thoughtfully chosen to ensure we got a holistic view of Argentina’s diverse and rich cultural heritage. The tour guides provided by Futbol America were exceptional—knowledgeable, friendly, and always willing to go the extra mile to make our experience special. Their insights into the history of soccer in Argentina enriched our understanding and appreciation of each match and soccer event we attended. Overall, Futbol America offered an unforgettable journey that perfectly balanced soccer, sightseeing, and cultural immersion. Whether you' + "'" + 're a die-hard soccer fan or just someone keen to explore Argentina through the lens of its favorite sport, this tour delivers a unique and exhilarating experience. We came as strangers but left as part of a community, united by our shared passions and unforgettable experiences. Hats off to Futbol America for arranging such a spectacular adventure and truly a trip of a lifetime!"',
        img: pittman,
        name: "Ella Pittman",
        job: ""
    }

    return (
        <main>
            <BgGallery info={imagesAndInfo} />
            <AccordionContainer />
            <AutoGalleryContainer />
            <InfiniteGallery hasTitle={false} />
            <HotelSectionContainer />
            <Schedules />
            <section className="services-testimoniesSection">
                <h2>Hear their <span>Stories</span></h2>
                <div className="services-testimoniesContainer">
                    <Testimony content={testimony1} />
                    <Testimony content={testimony2} />
                </div>
            </section>
        </main>
    )
}

export default Services