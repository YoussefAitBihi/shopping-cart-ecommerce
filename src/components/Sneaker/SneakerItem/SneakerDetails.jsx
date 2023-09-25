import SneakerItemForm from "./SneakerItemForm";
import SneakerPrice from "./SneakerPrice";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const SneakerDetails = ({ sneaker }) => {
  const cartContext = useContext(CartContext);
  
  const onAddItemToCart = (amount) => {
    const item = {
      id: sneaker.id,
      title: sneaker.title,
      price: sneaker.price,
      thumbnail: sneaker.thumbnail,
      amount,
    };

    cartContext.addItem(item);
  };

  return (
    <div className="sneaker-details flow">
      <header className="sneaker-details__header flow-small">
        <h2 className="sneaker-details__subtitle">Sneaker company</h2>
        <h1 className="sneaker-details__title">{sneaker.title}</h1>
      </header>
      <p className="sneaker-details__description">{sneaker.description}</p>
      <SneakerPrice price={sneaker.price} discount={sneaker.discount} />
      <SneakerItemForm onAddItemToCart={onAddItemToCart} />
    </div>
  );
};

export default SneakerDetails;
