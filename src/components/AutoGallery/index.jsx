import { useEffect, useState } from "react"
import "./style.css"

const AutoGallery = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [transition, setTransition] = useState(false)

    useEffect(() => {
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
    }, []);

    return (
        <div className={`autoGallery ${transition ? "autoGallery-transition" : ""}`}>
            <img className="autoGallery-img autoGallery-currentImg" src={images[currentIndex]} alt="" />
            <img className="autoGallery-img autoGallery-nextImg" src={images[(currentIndex + 1) % images.length]} alt="" />
        </div>
    )
}

export default AutoGallery