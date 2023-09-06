import SneakerCarousel from "../../components/Sneaker/SneakerItem/SneakerCarousel";
import SneakerDetails from "../../components/Sneaker/SneakerItem/SneakerDetails";

const SneakerDetailsPage = () => {
  return (
    <article className="article-sneaker flow">
      <SneakerCarousel />
      <SneakerDetails />
    </article>
  );
};

export default SneakerDetailsPage;
