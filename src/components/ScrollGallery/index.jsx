import { useEffect, useRef, useState } from "react"

import "./style.css"

const ScrollGallery = ({images}) => {

    const galleryContainerRef = useRef(null)
    const [imagesState, setImagesState] = useState(images)
    const imagesLengthRef = useRef(images.length)

    const handleScroll = () => {
        const scrollTop = galleryContainerRef.current.scrollTop
        const scrollHeight = galleryContainerRef.current.scrollHeight
        const clientHeight = galleryContainerRef.current.clientHeight
        const scrollPorcentage = (scrollTop / (scrollHeight - clientHeight) * 100)
        if ((scrollPorcentage >= 54.5) && (imagesLengthRef.current > images.length)) {
            eliminateImages()
            galleryContainerRef.current.scrollTop = 0
            imagesLengthRef.current = images.length
        }

    }

    const eliminateImages = () => {
        setImagesState((prevImages) => {
            const newImages = prevImages.slice(0, images.length)
            return newImages
        })
    }

    const scrollToPosition = (position, duration) => {
        const container = galleryContainerRef.current;
        const start = container.scrollTop;
        const distance = position - start;
        const startTime = performance.now();

        const scroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const scrollProgress = elapsedTime / duration;
            container.scrollTop = start + distance * scrollProgress;

            if (elapsedTime < duration) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };

    useEffect(() => {
        setTimeout(() => {
            scrollToPosition(1320, 4000)
        }, 1500)
    }, [])

    useEffect(() => {
        const galleryContainer = galleryContainerRef.current
        galleryContainer.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", () => {
            window.location.reload();
        })
        return () => {
            galleryContainer.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll])

    return (
        <div id="loop-scroll-gallery">
            <div className="scroll-gallery-wrapper" ref={galleryContainerRef}>
                {imagesState.map((image, index) => {
                    return (
                        <div key={index} className="scroll-gallery-image-container">
                            <img src={image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ScrollGallery