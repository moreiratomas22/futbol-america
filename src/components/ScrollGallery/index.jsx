import { useEffect, useRef, useState } from "react"

import "./style.css"

const image1 = "https://i.blogs.es/a19bfc/testing/1366_2000.jpg"
const image2 = "https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/testing-trends-world-quality-report.jpg?itok=vUyONZsj"
const image3 = "https://www.mtp.es/wp-content/uploads/2019/03/testing-1200x900.jpg"
const image4 = "https://t3.ftcdn.net/jpg/03/13/42/46/360_F_313424630_Uja1TnjdFhdz0bdbFnhMRuBTSIw25TWQ.jpg"
const image5 = "https://cdn.bap-software.net/2023/10/softwaretesting1.jpg"
const image6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HHN-cN8zYS8n5c8BT-i5XA-vyZSxmz0B3DrpRfvdaw&s"

const images = [image1, image2, image3, image4, image5, image6]

const ScrollGallery = () => {

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
        if (scrollPorcentage >= 99.89) {
            cloneImages()
        }

    }

    const cloneImages = () => {
        setImagesState((prevImages) => {
            const newImages = [...prevImages, ...prevImages]
            imagesLengthRef.current = newImages.length
            return newImages
        })
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