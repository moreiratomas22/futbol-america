import { useEffect, useRef, useState } from "react";

import "./style.css"
import userImg from "../../assets/icons/timelapse/User.png";
import clockImg from "../../assets/icons/timelapse/clock.png"
import calendarImg from "../../assets/icons/timelapse/calendar.png"
import trophyImg from "../../assets/icons/timelapse/trophy.png"
import planeImg from "../../assets/icons/timelapse/plane.png"
import gold_userImg from "../../assets/icons/timelapse/yellow/Gold User.png";
import gold_clockImg from "../../assets/icons/timelapse/yellow/Gold Clock.png"
import gold_calendarImg from "../../assets/icons/timelapse/yellow/Gold Calendar.png"
import gold_trophyImg from "../../assets/icons/timelapse/yellow/Gold Trophy.png"
import gold_planeImg from "../../assets/icons/timelapse/yellow/Gold Plane.png"

import useIntersectionObserver from "../../customHook/useIntersectionObserver";


const Timelapse = () => {
    const elementRef = useRef(null);
    const isVisible = useIntersectionObserver(elementRef, { threshold: 1 });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const [isGold, setIsGold] = useState([])


    useEffect(() => {
        const cards = document.querySelectorAll(".timelapse-card")
        setIsGold(prev => {
            return new Array(cards.length).fill(false)
        })
    }, [])

    useEffect(() => {
        if (windowWidth >= 800) {
            if (isVisible) {
                const line = document.querySelector(".timelapse-line")
                const cards = document.querySelectorAll(".timelapse-card")
                const titles = document.querySelectorAll(".timelapse-card h3")
                setTimeout(() => {
                    line.classList.add("timelapse-line-animation")
                    cards.forEach((_, i) => {
                        setTimeout(() => {
                            titles[i].classList.add("yellowTitle")
                            setIsGold((prev) => {
                                const newIsGold = [...prev];
                                newIsGold[i] = true;
                                return newIsGold;
                            });
                        }, i * 1000); // Incremental delay for each card
                    });
                }, 2000)
            }
        } else {
            const cards = document.querySelectorAll(".timelapse-card")
            setIsGold(prev => {
                return new Array(cards.length).fill(true)
            })
        }
        
    }, [isVisible, windowWidth]);

    return (
        <section ref={elementRef} className="timelapse-container">
            <div className="timelapse-line"></div>
            <div className="timelapse-card">
                <div className="timelapse-card-imgContainer">
                    {isGold[0] ? (
                        <img src={gold_userImg} alt="" />
                    ) : (
                        <img src={userImg} alt="" />
                    )}
                </div>
                <h3>Corporate Travel</h3>
                <p>Simplifying business travel so you can focus on your goals.</p>
            </div>
            <div className="timelapse-card">
                <div className="timelapse-card-imgContainer">
                    {isGold[1] ? (
                        <img src={gold_clockImg} alt="" />
                    ) : (
                        <img src={clockImg} alt="" />
                    )}
                </div>
                <h3>Crew Logistics</h3>
                <p>Ensuring seamless coordination for timely arrivals and departures.</p>
            </div>
            <div className="timelapse-card">
                <div className="timelapse-card-imgContainer">
                    {isGold[2] ? (
                        <img src={gold_calendarImg} alt="" />
                    ) : (
                        <img src={calendarImg} alt="" />
                    )}
                </div>
                <h3>Events</h3>
                <p>From conception to execution, we bring professionalism and cost-efficiency to your events.</p>
            </div>
            <div className="timelapse-card">
                <div className="timelapse-card-imgContainer">
                    {isGold[3] ? (
                        <img src={gold_trophyImg} alt="" />
                    ) : (
                        <img src={trophyImg} alt="" />
                    )}
                </div>
                <h3>Sports Logistics </h3>
                <p>Taking care of all travel logistics, allowing you to focus on the game.</p>
            </div>
            <div className="timelapse-card">
                <div className="timelapse-card-imgContainer">
                    {isGold[4] ? (
                        <img src={gold_planeImg} alt="" />
                    ) : (
                        <img src={planeImg} alt="" />
                    )}
                </div>
                <h3>Travel Agencies</h3>
                <p>Offering swift solutions for agencies of all sizes, without limitations.</p>
            </div>
        </section>
    )
}

export default Timelapse