import { useEffect, useState } from "react"

import "./style.css"
import AutoGallery from "../../components/AutoGallery"
import image1 from "../../assets/images/grandBrizo/image1.png"
import image2 from "../../assets/images/grandBrizo/image2.png"
import image3 from "../../assets/images/grandBrizo/image3.png"
import image4 from "../../assets/images/grandBrizo/image4.png"
import image5 from "../../assets/images/grandBrizo/image5.png"
import image6 from "../../assets/images/grandBrizo/image6.png"
import landPlaza1 from "../../assets/images/landPlaza/image1.png"
import landPlaza2 from "../../assets/images/landPlaza/image2.png"
import landPlaza3 from "../../assets/images/landPlaza/image3.png"
import landPlaza4 from "../../assets/images/landPlaza/image4.png"
import landPlaza5 from "../../assets/images/landPlaza/image5.png"
import customerIcon from "../../assets/icons/hotelItems/Customer.png"
import barbellIcon from "../../assets/icons/hotelItems/Barbell.png"
import bedIcon from "../../assets/icons/hotelItems/Bed.png"
import restaurantIcon from "../../assets/icons/hotelItems/Restaurant.png"
import spaFlowerIcon from "../../assets/icons/hotelItems/Spa Flower.png"
import swimmingIcon from "../../assets/icons/hotelItems/Swimming.png"
import wiFiIcon from "../../assets/icons/hotelItems/Wi-Fi.png"
import vanImg from "../../assets/images/van.png"

const HotelSectionContainer = () => {

    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {

    }, []);

    const imagesGrandBrizo = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ]

    const imagesLandPlaza = [
        landPlaza1,
        landPlaza2,
        landPlaza3,
        landPlaza4,
        landPlaza5
    ]

    const handleClick = () => {
        setIsSelected(prev => !prev)
    }

    return (
        <section className="hotelSectionContainer">
            <div className="hotelSection-hotelContainer">
                <div className="hotelSection-hotel-infoContainer">
                    <p>Rest assured, your comfort and satisfaction are our top priorities at Futbol America Tours. Each hotel is meticulously selected to offer convenience, luxury, and a delightful stay, paralleling your soccer journey. Peruse our hotel options below, knowing that every detail of your trip is expertly managed with us."</p>
                        <div className="hotelSection-phone-hotel-yellowBox"></div>
                    <div className="hotelSection-phone-hotelGalleryContainer">
                        <div className="hotelSection-phone-hotel-gallery">
                            <div className={`hotelSection-hotel1 ${isSelected ? "hotelSection-hotel1Up" : ""}`} >
                                <AutoGallery images={imagesGrandBrizo} />
                            </div>
                            <div className={`hotelSection-hotel2 ${isSelected ? "hotelSection-hotel2Up" : ""}`} >
                                <AutoGallery images={imagesLandPlaza} />
                            </div>
                        </div>
                    </div>
                    <div className="hotelSection-phone-buttonsContainer">
                        <h3 onClick={handleClick} className={`hotelSection-buttons-text ${!isSelected ? "hotelSection-buttons-textSelection" : ""}`}>Hotel Grand Brizo</h3>
                        <h3 onClick={handleClick} className={`hotelSection-buttons-text ${isSelected ? "hotelSection-buttons-textSelection" : ""}`}>Hotel Land Plaza</h3>
                    </div>
                    <div className="hotelSection-hotel-info-titleContainer">
                        <h2 className={`hotelSection-hotel1 ${isSelected ? "hotelSection-hotel1Up" : ""}`}>HOTEL GRAND BRIZO</h2>
                        <h2 className={`hotelSection-hotel2 ${isSelected ? "hotelSection-hotel2Up" : ""}`}>HOTEL LAND PLAZA</h2>
                    </div>
                    <ul>
                        <li><img src={customerIcon} alt="" />2 people</li>
                        <li><img src={bedIcon} alt="" />Queen bed</li>
                        <li><img src={restaurantIcon} alt="" />Restaurant</li>
                        <li><img src={wiFiIcon} alt="" />Wifi</li>
                        <li><img src={barbellIcon} alt="" />Gym</li>
                        <li><img src={swimmingIcon} alt="" />Pool</li>
                        <li className={`${isSelected ? "hotelSection-hotel1Right" : ""}`}><img src={spaFlowerIcon} alt="" />Spa & Wellness Center</li>
                    </ul>
                    <div className="hotelSection-buttonsContainer">
                        <h3 onClick={handleClick} className={`hotelSection-buttons-text ${!isSelected ? "hotelSection-buttons-textSelection" : ""}`}>Hotel Grand Brizo</h3>
                        <h3 onClick={handleClick} className={`hotelSection-buttons-text ${isSelected ? "hotelSection-buttons-textSelection" : ""}`}>Hotel Land Plaza</h3>
                    </div>
                </div>
                <div className="hotelSection-hotel-yellowBox">
                </div>
                <div className="hotelSection-hotel-gallery">
                    <div className={`hotelSection-hotel1 ${isSelected ? "hotelSection-hotel1Up" : ""}`} >
                        <AutoGallery images={imagesGrandBrizo} />
                    </div>
                    <div className={`hotelSection-hotel2 ${isSelected ? "hotelSection-hotel2Up" : ""}`} >
                        <AutoGallery images={imagesLandPlaza} />
                    </div>
                </div>
            </div>
            <div className="hotelSection-vanContainer">
                <div className="hotelSection-van-text">
                    <p>Our buses and vans come equipped with bathrooms, air conditioning, and DVD players for your comfort. We offer round-trip transfers between the airport and hotel, as well as transportation for friendly matches.</p>
                </div>
                <div className="hotelSection-van-yellowBoc">

                </div>
                <div className="hotelSection-van-imgContainer">
                    <img src={vanImg} alt="" />
                </div>
            </div>
        </section >
    )
}

export default HotelSectionContainer