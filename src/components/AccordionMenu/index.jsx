import { useState } from "react"
import "./style.css"

const AccordionItem = ({ title, content, isOpen, onClick }) => (
    <div>
        <div className={`accordionMenu-titleContainer ${isOpen ? "accordionMenu-titleContainer-selected" : ""}`} onClick={onClick}>
            <h3>{title}</h3>
        </div>
        {isOpen && (
            <div className="accordionMenu-textContainer">
                <p>{content}</p>
            </div>
        )}
    </div>
);

const AccordionMenu = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.sideTitle}
                    content={item.text}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
}

export default AccordionMenu