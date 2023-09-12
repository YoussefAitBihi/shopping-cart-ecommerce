const CarouselIndicators = ({
  indicators,
  currentSlide,
  activateIndicator,
  style,
}) => {
  return (
    <ul className="carousel-indicators" style={{ ...style }}>
      {indicators.map((indicator, currentKey) => {
        const translateValue = currentKey * 100 - currentSlide * 100;
        return (
          <li
            className="carousel-indicators__item"
            key={currentKey}
            onClick={activateIndicator.bind(null, currentKey)}
          >
            <img
              src={indicator}
              alt={`Indicator ${currentKey + 1}`}
              className={`carousel-indicators__thumbnail ${
                translateValue === 0
                  ? "carousel-indicators__thumbnail--active"
                  : undefined
              }`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CarouselIndicators;
