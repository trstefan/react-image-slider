import React, { useState } from "react";
import { data } from "./data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const ImagineSlider = (images) => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrentPicture(currentPicture === length - 1 ? 0 : currentPicture + 1);
  };
  console.log(currentPicture);
  const previousSlide = () => {
    setCurrentPicture(currentPicture === 0 ? length - 1 : currentPicture - 1);
  };

  return (
    <div className="slider-container">
      <FaArrowLeft className="arrow-left" onClick={previousSlide}></FaArrowLeft>
      <FaArrowRight className="arrow-right" onClick={nextSlide}></FaArrowRight>
      {data.map((slide, index) => {
        return (
          <div
            className={index === currentPicture ? "slide active" : "slide"}
            key={index}
          >
            {index === currentPicture && (
              <img
                src={slide.image}
                key={index}
                alt={slide.alt}
                className="image"
              ></img>
            )}
          </div>
        );
      })}
    </div>
  );
};
