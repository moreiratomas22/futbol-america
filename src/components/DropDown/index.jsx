import { useState } from "react"
import "./style.css"

const DropDown = () => {
    const [language, setLanguage] = useState("ENG")
    const [showDropDown, setShowDropDown] = useState(false)

    const toggleDropdown = () => {
        setShowDropDown(!showDropDown);
    };

    const handleClick = (lan) => {
        if (lan === "ESP") {
            setLanguage("ESP")
        } else {
            setLanguage("ENG")
        }
        setShowDropDown(false)
    }
    
    return (
        <div className="dropDown">
            <button onClick={toggleDropdown} className="dropDown-button">
                {language}
            </button>
            { (
                <div className={`dropDown-hiddenContent ${showDropDown ? "dropDown-showContent" : ""}`}>
                    <ul>
                        <li onClick={()=>handleClick("ESP")}>ESP</li>
                        <li onClick={()=>handleClick("ENG")}>ENG</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropDown