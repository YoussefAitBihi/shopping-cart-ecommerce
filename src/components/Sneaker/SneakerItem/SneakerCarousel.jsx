import useCarousel from "../../../hooks/useCarousel";
import PreviousIcon from "../../../assets/icon-previous.svg";
import NextIcon from "../../../assets/icon-next.svg";
import ImageProduct1 from "../../../assets/image-product-1.jpg";
import ImageProduct2 from "../../../assets/image-product-2.jpg";
import ImageProduct3 from "../../../assets/image-product-3.jpg";
import ImageProduct4 from "../../../assets/image-product-4.jpg";

import ImageProductTh1 from "../../../assets/image-product-1-thumbnail.jpg";
import ImageProductTh2 from "../../../assets/image-product-2-thumbnail.jpg";
import ImageProductTh3 from "../../../assets/image-product-3-thumbnail.jpg";
import ImageProductTh4 from "../../../assets/image-product-4-thumbnail.jpg";

// Create an array contains all figures
// Loop over that object, take all figure side by side

const slides = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4];
const indicators = [
  ImageProductTh1,
  ImageProductTh2,
  ImageProductTh3,
  ImageProductTh4,
];

const SneakerCarousel = () => {
  const [nextSlide, prevSlide, activateIndicator, currentSlide] = useCarousel(
    slides.length
  );

  return (
    <div className="sneaker-carousel">
      <button
        className="sneaker-carousel__button sneaker-carousel__button--prev"
        onClick={prevSlide}
      >
        <img
          src={PreviousIcon}
          alt="Previous Button Icon"
          className="sneaker-carousel__icon"
          aria-hidden="true"
        />
        <span className="sr-only">Click here to get the previous Slide</span>
      </button>
      <button
        className="sneaker-carousel__button sneaker-carousel__button--next"
        onClick={nextSlide}
      >
        <img
          src={NextIcon}
          alt="Previous Button Icon"
          className="sneaker-carousel__icon"
          aria-hidden="true"
        />
        <span className="sr-only">Click here to get the next slide</span>
      </button>
      <div className="sneaker-carousel__slides">
        {slides.map((slide, currentIndex) => {
          const translateValue = currentIndex * 100 - currentSlide * 100;
          return (
            <figure
              className="sneaker-carousel__slide"
              key={currentIndex}
              tabIndex={translateValue === 0 ? "0" : "-1"}
              style={{
                translate: `${translateValue}%`,
              }}
            >
              <img
                src={slide}
                alt={`Image product ${currentIndex}`}
                className="sneaker-carousel__image"
              />
            </figure>
          );
        })}
      </div>
      <div className="sneaker-carousel__indicators">
        {indicators.map((indicator, currentKey) => {
          const translateValue = currentKey * 100 - currentSlide * 100;
          return (
            <div
              className="sneaker-carousel__indicator"
              key={currentKey}
              onClick={activateIndicator.bind(null, currentKey)}
            >
              <img
                src={indicator}
                alt={`Indicator ${currentKey + 1}`}
                className={`sneaker-carousel__thumbnail ${
                  translateValue === 0
                    ? "sneaker-carousel__thumbnail--active"
                    : undefined
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SneakerCarousel;

// DONE: Create the indicators
// DONE: On click on the indicator, slide to the target img
// DONE: On Double Click, show the Carousel Modal
