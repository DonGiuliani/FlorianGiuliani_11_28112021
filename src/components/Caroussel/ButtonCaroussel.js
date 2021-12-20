import React from "react";
import "./Caroussel.css";
import rightArrow from "../../images/rightArrow.svg"
import leftArrow from "../../images/leftArrow.svg"

export default function ButtonCaroussel({direction, moveSlide}) {
    return (
            <button 
            className={direction === "next" ? "btn-slide next" : "btn-slide previous"}
            onClick={moveSlide}
            >
                <img src={direction === "next" ? rightArrow : leftArrow}
                alt={direction === "next" ? rightArrow : leftArrow}/>
            </button>
    )
}