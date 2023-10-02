import CloseIcon from "./CloseIcon";

const CarouselButtonClose = ({ onClose }) => {
  return (
    <button className="carousel-button-close" onClick={onClose}>
      <span className="sr-only">Click to close the Carousel Modal</span>
      <CloseIcon className="carousel-button-close__icon" />
    </button>
  );
};

export default CarouselButtonClose;
