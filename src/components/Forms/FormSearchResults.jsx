import { Link } from "react-router-dom";
import ProductThumbnail from "../../assets/image-product-1-thumbnail.jpg";
import Spinner from "../UI/Spinner";

const FormSearchResults = ({ searchedSneakers }) => {
  let searchedSneakersContent;

  if (searchedSneakers.isLoading) {
    searchedSneakersContent = <Spinner />;
  }

  if (
    !searchedSneakers.isLoading &&
    searchedSneakers.searchedSneakers.length > 0
  ) {
    searchedSneakersContent = searchedSneakers.searchedSneakers.map(
      (sneaker) => {
        return (
          <li className="search-results__result" key={sneaker.id}>
            <Link
              to={`sneakers/${sneaker.id}`}
              className="search-results__thumbnail"
            >
              <img src={sneaker.thumbnail} alt={sneaker.title} className="" />
            </Link>
            <div className="search-results__details">
              <h2 className="search-results__heading">
                <Link to={`sneakers/${sneaker.id}`}>{sneaker.title}</Link>
              </h2>
              <p className="search-results__description">
                {sneaker.description}
              </p>
            </div>
            <p className="search-results__price">{`$${sneaker.price.toFixed(
              2
            )}`}</p>
          </li>
        );
      }
    );
  }

  return (
    <ul className="search-results" role="list">
      {searchedSneakersContent}
    </ul>
  );
};

export default FormSearchResults;
