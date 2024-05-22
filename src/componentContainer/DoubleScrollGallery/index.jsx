import React, { useEffect, useState } from 'react';

import { ScrollGallery } from "../../components"
import "./style.css"
import videoFrontPage from "../../assets/videos/home-frontPage.mp4"
import useScroll from '../../customHook/useScroll';


const DoubleScrollGallery = () => {

    const { isAtTop: isGalleryAtTop, elementRef: galleriesRef } = useScroll();
    const { isAtTop: isVideoAtTop, elementRef: videoRef } = useScroll();
    const { isAtTop: isFinalAtTop, elementRef: finalRef } = useScroll();

    return (
        <section className="doubleScrollGallery">
            <div className={`doubleScrollGallery-textContainer ${isGalleryAtTop ? "doubleScrollGallery-opacity0" : "doubleScrollGallery-opacity1"}`}>
                <p className="doubleScrollGallery-text">At <span>Futbol</span> America, we are dedicated to providing university soccer teams with comprehensive and unforgettable experiences in Argentina and Brazil.</p>
            </div>
            <div ref={galleriesRef} className={`doubleScrollGallery-galleryContainer ${isGalleryAtTop && !isVideoAtTop ? "doubleScrollGallery-opacity1" : "doubleScrollGallery-opacity0"}`}>
                <ScrollGallery />
                <div className='doubleScrollGallery-galleriesTextContainer'>
                    <h2>CHOOSE YOUR DESTINATION</h2>
                    <ul>
                        <li>← BRAZIL</li>
                        <li>ARGENTINA →</li>
                    </ul>
                </div>
                <ScrollGallery />
            </div>
            <div ref={videoRef} className={`doubleScrollGallery-videoContainer ${isVideoAtTop ? "doubleScrollGallery-opacity1" : "doubleScrollGallery-opacity0"}`}>
                <video autoPlay muted loop id="home-finalVideo" className={`${isFinalAtTop ? "doubleScrollGallery-scale" : ""}`}>
                    <source src={videoFrontPage} />
                </video>
            </div>
{            <div ref={finalRef} className='doubleScrollGallery-finalDiv'>

            </div>}
        </section>
    )
}

export default DoubleScrollGallery