import React from 'react';

import { ScrollGallery } from "../../components"
import "./style.css"
import peachVideo from "../../assets/videos/peachVideo.mp4"
import useScroll from '../../customHook/useScroll';
import imageLeft_1 from "../../assets/home_leftGallery/image1.png"
import imageLeft_2 from "../../assets/home_leftGallery/image2.png"
import imageLeft_3 from "../../assets/home_leftGallery/image3.png"
import imageLeft_4 from "../../assets/home_leftGallery/image4.png"
import imageLeft_5 from "../../assets/home_leftGallery/image5.png"
import imageLeft_6 from "../../assets/home_leftGallery/image6.png"
import imageLeft_7 from "../../assets/home_leftGallery/image7.png"
import imageRight_1 from "../../assets/home_rightGallery/image1.png"
import imageRight_2 from "../../assets/home_rightGallery/image2.png"
import imageRight_3 from "../../assets/home_rightGallery/image3.png"
import imageRight_4 from "../../assets/home_rightGallery/image4.png"
import imageRight_5 from "../../assets/home_rightGallery/image5.png"
import imageRight_6 from "../../assets/home_rightGallery/image6.png"
import imageRight_7 from "../../assets/home_rightGallery/image7.png"




const DoubleScrollGallery = () => {

    const { isAtTop: isGalleryAtTop, elementRef: galleriesRef } = useScroll();
    const { isAtTop: isVideoAtTop, elementRef: videoRef } = useScroll();
    const { isAtTop: isFinalAtTop, elementRef: finalRef } = useScroll();

    const imagesLeft = [
        imageLeft_1,
        imageLeft_2,
        imageLeft_3,
        imageLeft_4,
        imageLeft_5,
        imageLeft_6,
        imageLeft_7]

    const imagesRight = [
        imageRight_1,
        imageRight_2,
        imageRight_3,
        imageRight_4,
        imageRight_5,
        imageRight_6,
        imageRight_7
    ]

    return (
        <section className="doubleScrollGallery">
            <div className={`doubleScrollGallery-textContainer ${isGalleryAtTop ? "doubleScrollGallery-opacity0" : "doubleScrollGallery-opacity1"}`}>
                <p className="doubleScrollGallery-text">At <span>Futbol</span> America, we are dedicated to providing university soccer teams with comprehensive and unforgettable experiences in Argentina and Brazil.</p>
            </div>
            <div ref={galleriesRef} className={`doubleScrollGallery-galleryContainer ${isGalleryAtTop && !isVideoAtTop ? "doubleScrollGallery-opacity1" : "doubleScrollGallery-opacity0"}`}>
                {isGalleryAtTop && (
                    <>
                        <h2 className='doubleScrollGallery-titleTablet'>CHOOSE YOUR DESTINATION</h2>
                        <div className='doubleScrollGallery-galleryWrapper'>
                            <ScrollGallery images={imagesLeft} />
                            <h3>Brazil</h3>
                        </div>
                        <div className='doubleScrollGallery-galleriesTextContainer'>
                            <h2>CHOOSE YOUR DESTINATION</h2>
                            <ul>
                                <li>← BRAZIL</li>
                                <li>ARGENTINA →</li>
                            </ul>
                        </div>
                        <div className='doubleScrollGallery-galleryWrapper'>
                            <ScrollGallery images={imagesRight} inverted={true} />
                            <h3>Argentina</h3>
                        </div>

                    </>
                )}
            </div>
            <div ref={videoRef} className={`doubleScrollGallery-videoContainer ${isVideoAtTop ? "doubleScrollGallery-opacity1" : "doubleScrollGallery-opacity0"}`}>
                <video autoPlay muted loop id="home-finalVideo" className={`${isFinalAtTop ? "doubleScrollGallery-scale" : ""}`}>
                    <source src={peachVideo} />
                </video>
            </div>
            {<div ref={finalRef} className='doubleScrollGallery-finalDiv'>

            </div>}
        </section>
    )
}

export default DoubleScrollGallery