import { Accordion } from "../../components"
import collegePathImg from "../../assets/images/accordion/College Path.png"
import careerMentorshipImg from "../../assets/images/accordion/Career Mentorship.png"
import internationalTournamentsImg from "../../assets/images/accordion/International Tournaments.png"
import professionalToursImg from "../../assets/images/accordion/Professional Tours.png"
import reduceImg from "../../assets/images/accordion/Reduce.png"
import residentialProgramsImg from "../../assets/images/accordion/Residential Programs.png"
import coachesImg from "../../assets/images/accordion/Coaches.png"
import teamToursImg from "../../assets/images/accordion/TEAM TOURS.png"
import fansToursImg from "../../assets/images/accordion/FANS TOURS.png"
import futbolSeniorImg from "../../assets/images/accordion/FUTBOL SENIOR.png"
import sportsScholarshipImg from "../../assets/images/accordion/SPORTS SCHOLARSHIP.png"


const AccordionContainer = () => {

    const items = [
        {
            img: collegePathImg,
            sideTitle: "COLLEGE PATH",
            title: "College Path Training Program",
            text: "Prepare for collegiate soccer opportunities with our specialized training programs. We provide comprehensive support to aspiring players, helping them navigate the competitive collegiate environment and the intricacies of college recruitment.",
        },
        {
            img: careerMentorshipImg,
            sideTitle: "career mentorship",
            title: "Career Mentorship",
            text: "Navigate the intricate pathways of a soccer career with our personalized career mentorship program. Drawing on our profound expertise and extensive network within the soccer industry, we guide players and their families in making informed decisions and achieving their goals in the sport.",
        },
        {
            img: internationalTournamentsImg,
            sideTitle: "INTERNATIONAL TOURNAMENTS",
            title: "International Tournaments",
            text: "Compete on an international stage with our elite youth and college-level tournaments worldwide. We handle all logistics, allowing athletes to focus on their performance and showcase their talents to a global audience."
        },
        {
            img: professionalToursImg,
            sideTitle: "PROFESSIONAL TOURS & PRESEASON",
            title: "Professional Tours & Preseason",
            text: "Experience unparalleled support and comfort on our professional tours and preseasons. From meticulous planning to flawless execution, we ensure that teams can focus solely on their performance, with every aspect tailored to their unique needs."
        },
        {
            img: reduceImg,
            sideTitle: "REDUCE/REUSE/RECYCLE PROGRAM",
            title: "Reduce, Reuse, Recycle Program",
            text: "Join us in promoting sustainability within the soccer community. Through our recycling and donation initiatives, we facilitate the reuse of gently used products, contributing to a more sustainable future for the sport and the planet."
        },
        {
            img: residentialProgramsImg,
            sideTitle: "Residential Programs",
            title: "Residential Programs",
            text: "Unlock your full potential with our residential programs hosted in partnership with renowned clubs and organizations. Our programs are tailored to provide players with the optimal environment, resources, and coaching necessary to thrive and excel in their soccer journey."
        },
        {
            img: coachesImg,
            sideTitle: "coaches/clinics/internship",
            title: "Coaches International Clinics & Internship Placements",
            text: "Enhance your coaching skills and expand your network with our international clinics and internship placements. Gain invaluable insights and experiences at esteemed South American clubs, contributing to your professional growth and development."
        },
        {
            img: teamToursImg,
            sideTitle: "TEAM TOURS",
            title: "Team Tours",
            text: "Embark on a journey of camaraderie and competition with our meticulously crafted sports tours. Designed to blend athletic prowess with cultural immersion, our team tours in Brazil and Argentina offer a unique platform for teams to showcase their skills on a global stage while forging bonds that last a lifetime."
        },
        {
            img: fansToursImg,
            sideTitle: "FANS TOURS",
            title: "Fans Tours",
            text: "Immerse yourself in the heartlands of Argentine and Brazilian soccer with our fans tours. Experience the electrifying atmosphere of live matches while enjoying unparalleled comfort and unique experiences that create memories to last a lifetime."
        },
        {
            img: futbolSeniorImg,
            sideTitle: "FUTBOL SENIOR",
            title: "Futbol Senior",
            text: "For senior soccer enthusiasts, we offer tailored activities, programs, and tours designed to keep the love for the game alive, providing opportunities for continued engagement and enjoyment."
        },
        {
            img: sportsScholarshipImg,
            sideTitle: "SPORTS SCHOLARSHIP",
            title: "Sports Scholarship ",
            text: "Stay tuned for our upcoming sports scholarship program, reflecting our commitment to fostering talent and supporting athletes' aspirations."
        },
    ]

    return (
        <Accordion items={items} />
    )
}

export default AccordionContainer