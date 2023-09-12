import useCarousel from "../../../hooks/useCarousel";
import ImageProduct1 from "../../../assets/image-product-1.jpg";
import ImageProduct2 from "../../../assets/image-product-2.jpg";
import ImageProduct3 from "../../../assets/image-product-3.jpg";
import ImageProduct4 from "../../../assets/image-product-4.jpg";

import ImageProductTh1 from "../../../assets/image-product-1-thumbnail.jpg";
import ImageProductTh2 from "../../../assets/image-product-2-thumbnail.jpg";
import ImageProductTh3 from "../../../assets/image-product-3-thumbnail.jpg";
import ImageProductTh4 from "../../../assets/image-product-4-thumbnail.jpg";
import CarouselButtonLeft from "../../Carousel/CarouselButtonLeft";
import CarouselButtonRight from "../../Carousel/CarouselButtonRight";
import CarouselIndicators from "../../Carousel/CarouselIndicators";
import CarouselSlides from "../../Carousel/CarouselSlides";
import Modal from "../../Carousel/CarouselModal";

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
    <>
      <Modal
        onClickPrev={prevSlide}
        onClickNext={nextSlide}
        slides={slides}
        currentSlide={currentSlide}
        indicators={indicators}
        activateIndicator={activateIndicator}
      />
      <div className="sneaker-carousel">
        <CarouselButtonLeft onClickPrev={prevSlide} />
        <CarouselButtonRight onClickNext={nextSlide} />
        <CarouselSlides slides={slides} currentSlide={currentSlide} />
        <CarouselIndicators
          indicators={indicators}
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
