import NextIcon from "./NextIcon";

const CarouselButtonRight = (props) => {
  return (
    <button
      className="carousel-button carousel-button--next"
      onClick={props.onClickNext}
      style={props.style}
    >
      <NextIcon className="carousel-button__icon" />
      <span className="sr-only">Click to get the next slide</span>
    </button>
  );
};

export default CarouselButtonRight;
