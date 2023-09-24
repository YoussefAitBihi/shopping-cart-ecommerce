import SneakerItemForm from "./SneakerItemForm";
import SneakerPrice from "./SneakerPrice";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const DUMMY_SNEAKER = {
  id: "product-0",
  title: "Fall limited edition sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 25,
  thumbnail:
    "https://www.instyle.com/thmb/P3o-yTJSKMcUasE8xHVRuX0Eje4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ins-primary-whitesneakers-jthompson-0981.jpg-6b683aa5e6e540a3b14409eac07d8a2b.jpg",
};

const SneakerDetails = () => {
  const cartContext = useContext(CartContext);

  const onAddItemToCart = (amount) => {
    const item = {
      id: DUMMY_SNEAKER.id,
      title: DUMMY_SNEAKER.title,
      price: DUMMY_SNEAKER.price,
      thumbnail: DUMMY_SNEAKER.thumbnail,
      amount,
    };

    cartContext.addItem(item);
  };

  return (
    <div className="sneaker-details flow">
      <header className="sneaker-details__header flow-small">
        <h2 className="sneaker-details__subtitle">Sneaker company</h2>
        <h1 className="sneaker-details__title">
          Fall limited edition sneakers
        </h1>
      </header>
      <p className="sneaker-details__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <SneakerPrice />
      <SneakerItemForm onAddItemToCart={onAddItemToCart} />
    </div>
  );
};

export default SneakerDetails;
