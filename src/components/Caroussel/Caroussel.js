import React, {useState} from "react";
import "./Caroussel.css";
import ButtonCaroussel from "./ButtonCaroussel";

export default function Caroussel(props) {

    const images = props.pictures

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== images.length) {
            setSlideIndex(slideIndex + 1)
        } else if(slideIndex === images.length) {
            setSlideIndex(1)
        }
    }

    const previousSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1) {
            setSlideIndex(images.length)
        }
    }

    if(images.length > 1) {
        return (
            <div id="caroussel">
                {images.map((image, index) => {
                    return (
                        <div 
                        key={image}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            <img src={image} 
                            alt={image}
                            />
                        </div>
                    )
                })}
                <div id="buttons">
                    <ButtonCaroussel moveSlide={nextSlide} direction={"next"} />
                    <ButtonCaroussel moveSlide={previousSlide} direction={"previous"} />
                </div>
            </div>
        )
    } else {
        return (
            <div id="caroussel" className="slide active-anim">
                <img src={images}
                alt={images}
                />
            </div>
        )
    }
}