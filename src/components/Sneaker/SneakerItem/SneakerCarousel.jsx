import useCarousel from "../../../hooks/useCarousel";
import CarouselButtonLeft from "../../Carousel/CarouselButtonLeft";
import CarouselButtonRight from "../../Carousel/CarouselButtonRight";
import CarouselIndicators from "../../Carousel/CarouselIndicators";
import CarouselSlides from "../../Carousel/CarouselSlides";
import Modal from "../../Carousel/CarouselModal";
import { useSelector } from "react-redux";
// Create an array contains all figures
// Loop over that object, take all figure side by side

const SneakerCarousel = ({ carousel }) => {
  const [nextSlide, prevSlide, activateIndicator, currentSlide] = useCarousel(
    carousel.length
  );

  const carouselModalState = useSelector((state) => state.carouselModal);

  return (
    <>
      {carouselModalState.carouselModalIsVisible && (
        <Modal
          onClickPrev={prevSlide}
          onClickNext={nextSlide}
          slides={carousel}
          currentSlide={currentSlide}
          indicators={carousel}
          activateIndicator={activateIndicator}
        />
      )}
      <div className="sneaker-carousel">
        <CarouselButtonLeft onClickPrev={prevSlide} />
        <CarouselButtonRight onClickNext={nextSlide} />
        <CarouselSlides slides={carousel} currentSlide={currentSlide} />
        <CarouselIndicators
          indicators={carousel}
          currentSlide={currentSlide}
          activateIndicator={activateIndicator}
        />
      </div>
    </>
  );
};

export default SneakerCarousel;

// DONE: Create the indicators
// DONE: On click on the indicator, slide to the target img
// DONE: On Double Click, show the Carousel Modal
