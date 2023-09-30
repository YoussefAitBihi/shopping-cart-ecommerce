import { cartActions } from "../../../store/cart-slice";
import SneakerItemForm from "./SneakerItemForm";
import SneakerPrice from "./SneakerPrice";
import { useDispatch } from "react-redux";

const SneakerDetails = ({ sneaker }) => {
  const dispatch = useDispatch();

  const discountedPrice = `${
    sneaker.price - (sneaker.price * sneaker.discount) / 100
  }`;

  const onAddItemToCart = (amount) => {
    const item = {
      id: sneaker.id,
      title: sneaker.title,
      price: +discountedPrice,
      thumbnail: sneaker.thumbnail,
      amount,
    };

    dispatch(cartActions.addItemToCart(item));
  };

  return (
    <div className="sneaker-details flow">
      <header className="sneaker-details__header flow-small">
        <h2 className="sneaker-details__subtitle">Sneaker company</h2>
        <h1 className="sneaker-details__title">{sneaker.title}</h1>
      </header>
      <p className="sneaker-details__description">{sneaker.description}</p>
      <SneakerPrice
        originalPrice={sneaker.price}
        discountedPrice={discountedPrice}
        discount={sneaker.discount}
      />
      <SneakerItemForm onAddItem={onAddItemToCart} />
    </div>
  );
};

export default SneakerDetails;
