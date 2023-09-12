const CarouselSlides = ({ slides, currentSlide }) => {
  return (
    <ul className="carousel-slides">
      {slides.map((slide, currentIndex) => {
        const translateValue = currentIndex * 100 - currentSlide * 100;
        return (
          <li className="carousel-slides__item" key={currentIndex}>
            <figure
              className="carousel-slides__slide"
              tabIndex={translateValue === 0 ? "0" : "-1"}
              style={{
                translate: `${translateValue}%`,
              }}
            >
              <img
                src={slide}
                alt={`Image product ${currentIndex}`}
                className="carousel-slides__image"
              />
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default CarouselSlides;
