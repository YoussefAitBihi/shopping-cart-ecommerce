import { createPortal } from "react-dom";
import SneakerCarousel from "../../components/Sneaker/SneakerItem/SneakerCarousel";
import SneakerDetails from "../../components/Sneaker/SneakerItem/SneakerDetails";
import BackButton from "../../components/UI/BackButton";

const SneakerDetailsPage = () => {
  return (
    <>
      {createPortal(<BackButton />, document.getElementById("back"))}
      <article className="article-sneaker flow">
        <SneakerCarousel />
        <SneakerDetails />
      </article>
    </>
  );
};

export default SneakerDetailsPage;
