import { useState, useEffect, useCallback } from "react";

const useCarousel = (slidesLength) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevCurrentSlide) => ++prevCurrentSlide);

    if (currentSlide === slidesLength - 1) setCurrentSlide(0);
  }, [currentSlide, slidesLength]);

  const prevSlide = () => {
    setCurrentSlide((prevCurrentSlide) => --prevCurrentSlide);

    if (currentSlide === 0) setCurrentSlide(slidesLength - 1);
  };

  const activateIndicator = (curSlide) => {
    setCurrentSlide(curSlide);
  };

  // Automatic Slide
  // useEffect(() => {
  //   const identifier = setInterval(() => {
  //     nextSlide();
  //   }, 5000);

  //   return () => {
  //     clearInterval(identifier);
  //   };
  // }, [nextSlide]);

  return [nextSlide, prevSlide, activateIndicator, currentSlide];
};

export default useCarousel;
