import { Link } from "react-router-dom";
import SneakerPrice from "./SneakerPrice";

const SneakerItem = ({ item }) => {
  const discountedPrice = `${item.price - (item.price * item.discount) / 100}`;

  return (
    <article className="sneaker-item">
      <figure className="sneaker-item__thumbnail-box">
        <Link to={item.id}>
          <img
            src={item.thumbnail}
            alt="Image Product"
            className="sneaker-item__thumbnail"
            loading="lazy"
          />
        </Link>
      </figure>
      <div className="sneaker-item__details flow">
        <div className="flow-small">
          <p className="sneaker-item__category">sneaker</p>
          <h2 className="sneaker-item__title">
            <Link to={item.id}>{item.title}</Link>
          </h2>
        </div>
        <p className="sneaker-item__description">{item.description}</p>
        <SneakerPrice
          originalPrice={item.price}
          discount={item.discount}
          discountedPrice={discountedPrice}
        />
        <Link to={item.id} className="primary-button">
          Show more
        </Link>
      </div>
    </article>
  );
};

export default SneakerItem;
