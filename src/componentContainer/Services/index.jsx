import { BgGallery } from "../../components"
import "./style.css"
import argentinaImg from "../../assets/images/bgGallery/argentina.png"
import brazilImg from "../../assets/images/bgGallery/brazil.png"
import AccordionContainer from "../AccordionContainer"
import AutoGalleryContainer from "../AutoGalleryContainer"

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

    return (
        <main>
            <BgGallery info={imagesAndInfo} />
            <AccordionContainer />
            <AutoGalleryContainer />
        </main>
    )
}

export default Services