import { BgGallery, InfiniteGallery, Schedules, Testimony } from "../../components"
import "./style.css"
import argentinaImg from "../../assets/images/bgGallery/argentina.png"
import brazilImg from "../../assets/images/bgGallery/brazil.png"
import AccordionContainer from "../AccordionContainer"
import AutoGalleryContainer from "../AutoGalleryContainer"
import HotelSectionContainer from "../HotelSectionContainer"
import emilyRodriguezImg from "../../assets/testimonies/emilyRodriguez.png"
import carlosGomezImg from "../../assets/testimonies/carlosGomez.png"
import michaelSmithImg from "../../assets/testimonies/michaelSmith.png"

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
        desc: '"Our university soccer team had the most incredible time with Futbol America. From the moment we arrived in Argentina, everything was taken care of seamlessly. The training sessions with top division clubs were invaluable, and the cultural experiences were unforgettable. Highly recommend!"',
        img: emilyRodriguezImg,
        name: "Emily Rodriguez",
        job: "Coach, University of California Soccer Team"
    }

    const testimony2 = {
        title: '"Dream Come True!"',
        stars: 5,
        desc: '"Traveling to Brazil with Futbol America was a dream come true for our team. The opportunity to train with Brazilian clubs was beyond anything we could have imagined. The staff was friendly, knowledgeable, and truly went above and beyond to make our trip unforgettable. Can' + "'" + 't wait to do it again!"',
        img: carlosGomezImg,
        name: "Carlos Gomez",
        job: "Player, Florida State University Soccer Team"
    }

    const testimony3 = {
        title: '"Exceptional Service!"',
        stars: 5,
        desc: '"The attention to detail in planning our trip was evident, and every aspect exceeded our expectations. The training sessions were challenging yet rewarding, and the cultural immersion was an added bonus. Highly recommend for any university!!!"',
        img: michaelSmithImg,
        name: "Michael Smith",
        job: "Head Coach, Stanford University Soccer Team"
    }

    return (
        <main>
            <BgGallery info={imagesAndInfo} />
            <AccordionContainer />
            <AutoGalleryContainer />
            <InfiniteGallery />
            <HotelSectionContainer />
            <Schedules />
            <div className="services-testimoniesContainer">
                <Testimony content={testimony1}/>
                <Testimony content={testimony2}/>
                <Testimony content={testimony3}/>
            </div>
        </main>
    )
}

export default Services