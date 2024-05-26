import { useEffect, useRef, useState } from "react"

import "./style.css"
import useIntersectionObserver from "../../customHook/useIntersectionObserver"

const AutoGallery = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [transition, setTransition] = useState(false)
    const elementRef = useRef(null)
    const isVisible = useIntersectionObserver(elementRef, { threshold: 0.6 });

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setTransition(true);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => {
                        const newIndex = (prevIndex + 1) % images.length;
                        return newIndex;
                    });
                    setTransition(false);
                }, 500);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    return (
        <div ref={elementRef} className={`autoGallery ${transition ? "autoGallery-transition" : ""}`}>
            <img className="autoGallery-img autoGallery-currentImg" src={images[currentIndex]} alt="" />
            <img className="autoGallery-img autoGallery-nextImg" src={images[(currentIndex + 1) % images.length]} alt="" />
        </div>
    )
}

export default AutoGallery