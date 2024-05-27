import { useEffect, useRef, useState } from "react"

import "./style.css"
import useIntersectionObserver from "../../customHook/useIntersectionObserver"

const ScrollGallery = ({ images, inverted = false }) => {

    const galleryContainerRef = useRef(null)
    const galleryRef = useRef(null)
    const isVisible = useIntersectionObserver(galleryRef, { threshold: 1 })
    const [animationStarted, setAnimationStarted] = useState(false)

    const scrollToFinal = (duration) => {
        const container = galleryContainerRef.current;
        const start = inverted ? container.scrollHeight : 0;
        const final = inverted ? 0 : container.scrollHeight;
        const startTime = performance.now();

        const scroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const scrollProgress = elapsedTime / duration;
            container.scrollTop = start + (final - start) * scrollProgress;

            if (elapsedTime < duration) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };

    useEffect(() => {
        if (!animationStarted) {
            if (inverted) {
                galleryContainerRef.current.scrollTop = galleryContainerRef.current.scrollHeight;
                setAnimationStarted(true)
                setTimeout(() => {
                    scrollToFinal(9000)
                }, 0)
            } else {
                setAnimationStarted(true)
                setTimeout(() => {
                    scrollToFinal(9000)
                }, 1500)
            }
        }
    }, [isVisible])

    return (
        <div ref={galleryRef} id="loop-scroll-gallery">
            <div className={`scroll-gallery-wrapper ${animationStarted && !inverted ? "scroll-gallery-wrapper-animation" : ""} ${animationStarted && inverted ? "scroll-gallery-wrapper-animation-inverted" : ""}`} ref={galleryContainerRef}>
                {images.map((image, index) => {
                    return (
                        <div key={index} className="scroll-gallery-image-container">
                            <img src={image} alt="" loading="lazy" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ScrollGallery