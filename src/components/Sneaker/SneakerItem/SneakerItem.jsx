import { Link } from "react-router-dom";
import SneakerImage from "../../../assets/image-product-1.jpg";
import SneakerPrice from "./SneakerPrice";

const SneakerItem = () => {
  return (
    <article className="sneaker-item">
      <figure className="sneaker-item__thumbnail-box">
        <Link to="sneaker">
          <img
            src={SneakerImage}
            alt="Image Product"
            className="sneaker-item__thumbnail"
          />
        </Link>
      </figure>
      <div className="sneaker-item__details flow">
        <header className="sneaker-item__header flow-small">
          <h3 className="sneaker-item__subtitle">sneaker</h3>
          <h2 className="sneaker-item__title">
            <Link to="sneaker">Fall Limited Edition Sneakers</Link>
          </h2>
        </header>
        <p className="sneaker-item__description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <SneakerPrice />
        <Link to="sneaker" className="primary-button">
          Show more
        </Link>
      </div>
    </article>
  );
};

export default SneakerItem;
