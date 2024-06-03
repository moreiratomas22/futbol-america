import { useEffect, useRef, useState } from "react"

import "./style.css"

const Accordion = ({ items }) => {

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [someOtherExpanded, setSomeOtherExpanded] = useState(false);
    const [widthAcc, setWidthAcc] = useState(0)
    const itemRefs = useRef([]);
    const accordionRef = useRef(null)

    const handleClick = (index) => {
        console.log(widthAcc)
        setExpandedIndex((prev) => {
            if (prev === index) {
                setSomeOtherExpanded(false)
                return null
            }
            setSomeOtherExpanded(true)
            return index
        })

    }

    useEffect(()=>{
        setWidthAcc(accordionRef.current.offsetWidth)
    },[])

    const calcPosition = (index) => {
        const place = widthAcc/2
        return place - ((11-index) * 80 )
    }


    return (
        <section className="accordion-container">
            <div className="accordion-text">
                <h2>Unleash Your <span>Potential</span></h2>
                <p>Step into a world where soccer transcends boundaries and becomes a transformative journey of discovery and achievement. We're more than just a destination – we're your gateway to a realm where passion meets purpose, where players, coaches, and fans alike unite in the pursuit of greatness. With a steadfast commitment to excellence and innovation, we're here to empower you to unleash your full potential on and off the field. Our holistic approach to soccer development goes beyond the game itself, encompassing personalized mentorship, immersive experiences, and sustainable practices that shape the future of the sport.</p>
            </div>
            <div className="accordion-contentContainer">
            <div ref={accordionRef} className={`accordion-content ${someOtherExpanded ? "accordion-content-move" : ""}`}>
                {items.map((item, index) => {
                    return (
                        <div key={index} ref={el => itemRefs.current[index] = el} className={`accordion-item ${expandedIndex === index ? "accordion-item-expand" : ""} ${(expandedIndex !== index && someOtherExpanded) ? "accordion-item-disappear" : ""}`} style={{ zIndex: index, left: `${calcPosition(index)}px` }}>
                            <div className="accordion-item-sideTitle">
                                <div className="accordion-item-expandButtonContainer" onClick={() => handleClick(index)}>
                                    <div className={`accordion-item-expandButton-verticalLine ${expandedIndex === index ? "accordion-item-expandButton-verticalLineisExpanded" : ""}`}></div>
                                    <div className="accordion-item-expandButtonHotizontalLine"></div>
                                </div>
                                <h4>{item.sideTitle}</h4>
                            </div>
                            <div className="accordion-item-imgContainer">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="accordion-item-textContainer">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </section>
    )
}

export default Accordion