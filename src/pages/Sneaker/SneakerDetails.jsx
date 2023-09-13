import SneakerCarousel from "../../components/Sneaker/SneakerItem/SneakerCarousel";
import SneakerDetails from "../../components/Sneaker/SneakerItem/SneakerDetails";

// Load Images (carousel)
// Load sneaker details

const SneakerDetailsPage = () => {
  // const fetchSneakerDetails = async() => {
  //   fetch("https://shopping-cart-ecommerce-default-rtdb.firebaseio.com/")
  // };

  return (
    <article className="article-sneaker flow">
      <SneakerCarousel />
      <SneakerDetails />
    </article>
  );
};

export default SneakerDetailsPage;
