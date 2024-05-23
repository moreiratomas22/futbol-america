import { useState } from "react"

import "./style.css"

const TeamGallery = ({ team }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [horizontalAnimation, setHorizontalAnimation] = useState("")
    const [verticalAnimation, setVerticalAnimation] = useState("")



    const handleClickPrev = () => {
        if (currentIndex <= 0) return
        setVerticalAnimation("slideInUp")
        setHorizontalAnimation("slideInLeft")
        setCurrentIndex(prev => {
            return prev - 1
        })
    }
    const handleClickNext = () => {
        if (currentIndex >= team.length - 1) return
        setVerticalAnimation("slideInDown")
        setHorizontalAnimation("slideInRight")
        setCurrentIndex(prev => {
            return prev + 1
        })
    }

    return (
        <div className="teamGallery-container">
            <div className="teamGallery-imageContainer">
                <img src={team[currentIndex].img} alt="" className={horizontalAnimation} onAnimationEnd={() => setHorizontalAnimation("")} />
            </div>
            <div className="teamGallery-content">
                <h3 className={`teamGallery-name ${verticalAnimation}`} onAnimationEnd={() => setVerticalAnimation("")}>{team[currentIndex].name}</h3>
                <p className={`teamGallery-desc ${verticalAnimation}`} onAnimationEnd={() => setVerticalAnimation("")}>{team[currentIndex].desc}</p>
                <div className="teamGallery-buttons">
                    {currentIndex > 0 && <p onClick={handleClickPrev}>←</p>}
                    {currentIndex < team.length - 1 && <p onClick={handleClickNext}>→</p>}
                </div>
            </div>
        </div>
    )
}

export default TeamGallery