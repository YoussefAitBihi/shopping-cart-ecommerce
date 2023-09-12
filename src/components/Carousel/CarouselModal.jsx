import { createPortal } from "react-dom";
import CarouselSlides from "./CarouselSlides";
import CarouselIndicators from "./CarouselIndicators";
import CarouselButtonLeft from "./CarouselButtonLeft";
import CarouselButtonRight from "./CarouselButtonRight";
import CarouselButtonClose from "./CarouselButtonClose";

const CarouselBackdrop = () => {
  return <div className="carousel-backdrop" />;
};

const CarouselModal = ({ params }) => {
  return (
    <>
      <div className="carousel-modal-box">
        <CarouselButtonClose />
        <CarouselButtonLeft
          onClickPrev={params.onClickPrev}
          style={{ display: "grid" }}
        />
        <CarouselButtonRight
          onClickNext={params.onClickNext}
          style={{ display: "grid" }}
        />
        <div className="carousel-modal">
          <CarouselSlides
            slides={params.slides}
            currentSlide={params.currentSlide}
          />
          <CarouselIndicators
            indicators={params.indicators}
            currentSlide={params.currentSlide}
            activateIndicator={params.activateIndicator}
            style={ {scale: "0.9"} }
          />
        </div>
      </div>
    </>
  );
};

const portalElement = document.getElementById("carousel-modal");
const Modal = (props) => {
  return (
    <>
      {createPortal(<CarouselBackdrop />, portalElement)}
      {createPortal(<CarouselModal params={props} />, portalElement)}
    </>
  );
};

export default Modal;

// TODO: Create a CAROUSEL MODAL
// TODO: Manage the sneaker details page
