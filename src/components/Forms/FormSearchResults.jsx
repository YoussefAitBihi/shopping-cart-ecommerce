import { Link } from "react-router-dom";
import Spinner from "../UI/Spinner";

const FormSearchResults = ({ formSearchState, onClick }) => {
  let searchedSneakersContent;

  if (formSearchState.isLoading) {
    searchedSneakersContent = <Spinner />;
  }

  if (
    !formSearchState.isLoading &&
    formSearchState.searchedSneakers.length > 0
  ) {
    searchedSneakersContent = formSearchState.searchedSneakers.map(
      (sneaker) => {
        const discountedPrice = `$${(
          sneaker.price -
          (sneaker.price * sneaker.discount) / 100
        ).toFixed(2)}`;
        return (
          <li className="search-results__result" key={sneaker.id}>
            <Link
              to={`sneakers/${sneaker.id}`}
              className="search-results__thumbnail"
            >
              <img
                src={sneaker.thumbnail}
                alt={sneaker.title}
                className=""
                onClick={() => {
                  console.log("Clicked");
                }}
              />
            </Link>
            <div className="search-results__details">
              <h2 className="search-results__heading">
                <Link to={`sneakers/${sneaker.id}`}>{sneaker.title}</Link>
              </h2>
              <p className="search-results__description">
                {sneaker.description}
              </p>
            </div>
            <div>
              <p className="search-results__price">
                <span className="sr-only">The new price: </span>
                <strong>{discountedPrice}</strong>
              </p>
              <p className="search-results__price">
                <span className="sr-only">The original price: </span>
                <s>{`$${sneaker.price.toFixed(2)}`}</s>
              </p>
            </div>
          </li>
        );
      }
    );
  }

  if (formSearchState.fallbackMessage) {
    searchedSneakersContent = (
      <p className="search-results__fallback">
        {formSearchState.fallbackMessage}
      </p>
    );
  }

  return (
    <ul className="search-results" role="list" onClick={onClick}>
      {searchedSneakersContent}
    </ul>
  );
};

export default FormSearchResults;
