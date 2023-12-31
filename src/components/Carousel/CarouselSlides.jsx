import { useDispatch } from "react-redux";
import { carouselActions } from "../../store/carousel-modal-slice";

const CarouselSlides = ({ slides, currentSlide }) => {
  const dispatch = useDispatch();

  const showCarouselModal = () => {
    dispatch(carouselActions.showModal());
  };

  return (
    <ul className="carousel-slides" onClick={showCarouselModal}>
      {slides.map((slide, currentIndex) => {
        const translateValue = currentIndex * 100 - currentSlide * 100;
        return (
          <li className="carousel-slides__item" key={currentIndex}>
            <figure
              className="carousel-slides__slide"
              id={`carousel-slide-${currentIndex}`}
              tabIndex={translateValue === 0 ? "0" : "-1"}
              style={{
                translate: `${translateValue}%`,
              }}
            >
              <img
                src={slide.image}
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
