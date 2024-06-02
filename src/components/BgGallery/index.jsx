import { useState } from "react"
import "./style.css"
import Button from "../Button"

const BgGallery = ({ info }) => {

    const [items, setItems] = useState(info)
    const [animation, setAnimation] = useState(false)

    const handleClick = () => {
        setAnimation(true)
        setTimeout(() => {
            setItems(prev => {
                setAnimation(false)
                const newItems = [...prev]
                newItems.push(newItems[0])
                newItems.splice(0, 1)
                return newItems
            })
        }, 200)
    }

    return (
        <div className="bgGallery-container">
            <div className="bgGallery-bgContainer">
                {items.map((item, index) => {
                    return <img className={animation ? "bgGallery-bgImg-off" : ""} key={index} src={item.img} alt="" />
                })}
            </div>
            <div className="bgGallery-contentContainer">
                <div className="bgGallery-contentAndButton">
                    <div className="bgGallery-content">
                        {items.map((item, index) => {
                            return (
                                <div className={`bgGallery-info ${animation ? "bgGallery-info-animation-up bgGallery-transition " : ""}`} key={index}>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <Button className="bgGallery-button-JoinUs" toLink={"/contact"} title="Join Us" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="bgGallery-imgButtonsContainer">
                    <div className={`${animation ? "bgGallery-imgButton0 bgGallery-transition" : "bgGallery-imgButton1"}`}>
                        <img src={items[0].img} alt="" />
                    </div>
                    <div className={`${animation ? "bgGallery-imgButton1 bgGallery-transition" : "bgGallery-imgButton2"}`}>
                        <img onClick={handleClick} src={items[1].img} alt="" />
                    </div>
                    <div className={`${animation ? "bgGallery-imgButton2 bgGallery-transition" : "bgGallery-imgButton3"}`}>
                        <img onClick={handleClick} src={items[0].img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgGallery