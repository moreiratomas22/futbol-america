import { Checkpoints, TeamGallery } from "../../components"
import AboutFrontPage from "../AboutFrontPage"
import "./style.css"
import juzonImg from "../../assets/team/aldo_juzon.png"
import cearleyImg from "../../assets/team/campbell_mc_cearley .png"
import neveleffImg from "../../assets/team/jeronimo_neveleff.png"
import shewmakerImg from "../../assets/team/juliana_shewmaker.png"
import sabinImg from "../../assets/team/marc_sabin.png"
import sousaImg from "../../assets/team/willer_sousa.png"


const About = () => {

    const team = [
        {
            img: neveleffImg,
            name: "Jeronimo Neveleff",
            desc: "After more then 10 years assisitng Soccer Tours at Futbol America, First Team Tour Operator in Southamerica, founded in 1998, Jeronimo became CEO in 2019. Argentinian native, holding a Physical Education and Marketing degree. He is also a certified licenced Coach. Involved at details on all levels of the process from professional to amatheur teams, continues the company tradition to deliver the ¨Experience of their lives¨ to all participants. Fluent in Spanish, English and Portuguese."
        },
        {
            img: cearleyImg,
            name: "Campbell Mc Cearley",
            desc: "Campbell grew up playing Club and high school soccer in St Louis, MO. and Mississippi. His formal education is in Business Administration and Psychology with a Sports Psychology focus from the University of Mississippi (Ole Miss). He started his experience with Futbol America as a client traveling to Buenos Aires and La Plata on separate trips.  He currently resides in Madison, Mississippi. Campbell brings a unique “clients” perspective to the Futbol America team and enables the program to create a unique foreign experience while keeping American cultural nuances in mind to ensure the best possible experience."
        },
        {
            img: juzonImg,
            name: "Aldo Juzon",
            desc: "Joined in 2019, Aldo arrived at Futbol America with one mission: improved the unbeatable. Prepare to be prepared. Graduated in Business Administration and Marketing, he became the heart of the company. Seriousness, quality, and precision.These are the words for his  hard work and commitment. His department responsability is to make participants receive the expected and beyond. Along with the rest of the team, create memories that will be taken for a lifetime."
        },
        {
            img: shewmakerImg,
            name: "Juliana Shewmaker",
            desc: "Based in the Tampa Bay area with over 32 years of experience in the business of travel, Juliana Shewmaker is the sole owner of Tropical Travel Network LLC and  has helped thousands in the planning of business, leisure ,missionary as well as sports travel. Juliana, as well as other employees at the office which is located in Pinellas Park (Florida) are fluent in English , Portuguese and Spanish languages. Working with Futbol America since 2016 more than 100 groups and families were always satisfied with the process and care delivered by Juliana and her special care looking for best available options and secure ways to travel."
        },
        {
            img: sabinImg,
            name: "Marc Sabin",
            desc: "Based in Cincinnati, Marc has the responsibility of the US office. He played at the University of Kentucky and holds a USSF “A” license, USSF National Youth License and a NSCAA DIRECTOR OF COACHING Diploma. He has an extensive 25 plus year coaching career at the  USSDA, ECNL, USYSA,  US club NPL and Collegiate level. This and having personally lead 5 teams internationally, gives him the perfect vision to propose and interact with Coaches and Club Directors. Marc also facilitates scheduling an International Team Tour and advising young players on International Residential programs. Futbol America is proud to work with Marc as US Representative since 2023."
        },
        {
            img: sousaImg,
            name: "Willer Sousa",
            desc: "With a degree in Production Engineering and Logistics from the Estacio de Sá University in Rio de Janeiro, Willer has spent more than 28 years dedicated to soccer. As a player, his carrer for clubs in Brazil and Europe gave him a wide vision of the impact of well organize clubs can provide for athetes. After retirement  he has participate and organized pre-season and logistics for soccer clubs, professional games and scouting consultancy. Proud of providing opportunities to players and top team experiences, he works in creative ways to deliver the best of the best on the southamerican soccer culture and willing to colaborate with young players pathway when is needed. Since 2007, he has been responsible for Futbol América's operations in Brazil and Argentina."
        }
    ]

    return (
        <main>
            <AboutFrontPage />
            <Checkpoints />
            <TeamGallery team={team} />
        </main>
    )
}

export default About