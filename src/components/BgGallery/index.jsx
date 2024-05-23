import { useState } from "react"
import "./style.css"

const BgGallery = ({ info }) => {

    const [items, setItems] = useState(info)

    const handleClick = () => {
        setItems(prev => {
            const newItems = [...prev]
            newItems.push(newItems[0])
            newItems.splice(0,1)
            return newItems
        })
    }

    return (
        <div className="bgGallety-container">
            <div className="bgGallety-bgContainer">
                {items.map((item, index) => {
                    return <img key={index} src={item.img} alt="" />
                })}
            </div>
            <div className="bgGallety-contentContainer">
                <div className="bgGallety-content">
                    {items.map((item, index) => {
                        return <div className="bgGallety-info" key={index}>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                    })}
                </div>
                <div className="bgGallety-imgButtonsContainer">
                    <div className="bgGallety-imgButton1">
                        <img src={items[0].img} alt="" />
                    </div>
                    <div className="bgGallety-imgButton2">
                        <img onClick={handleClick} src={items[1].img} alt="" />
                    </div>
                    <div className="bgGallety-imgButton3">
                        <img onClick={handleClick} src={items[0].img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgGallery