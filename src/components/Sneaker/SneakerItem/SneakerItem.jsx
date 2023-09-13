import { Link } from "react-router-dom";
import SneakerPrice from "./SneakerPrice";

const SneakerItem = ({ item }) => {
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
        <header className="sneaker-item__header flow-small">
          <h3 className="sneaker-item__subtitle">sneaker</h3>
          <h2 className="sneaker-item__title">
            <Link to={item.id}>{item.title}</Link>
          </h2>
        </header>
        <p className="sneaker-item__description">{item.description}</p>
        <SneakerPrice />
        <Link to={item.id} className="primary-button">
          Show more
        </Link>
      </div>
    </article>
  );
};

export default SneakerItem;
