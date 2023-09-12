import PreviousIcon from "./PreviousIcon";

const CarouselButtonLeft = (props) => {
  return (
    <button
      className="carousel-button carousel-button--prev"
      onClick={props.onClickPrev}
      style={props.style}
    >
      <PreviousIcon className="carousel-button__icon" />
      <span className="sr-only">Click here to get the previous Slide</span>
    </button>
  );
};

export default CarouselButtonLeft;
