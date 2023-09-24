import { useContext } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";

const CartModal = (props) => {
  const cartContext = useContext(CartContext);

  let cartContent = <p className="cart-modal__fallback">Your cart is empty</p>;

  cartContent =
    cartContext.items.length > 0
      ? cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
            amount={item.amount}
          />
        ))
      : cartContent;

  return (
    <div className="cart-modal" id="cart-modal">
      <div className="cart-modal__head separator">
        <h4 className="cart-modal__title">Cart</h4>
      </div>
      <div className="cart-modal__body">
        <ul className="cart-modal__items">{cartContent}</ul>
        <div className="cart-modal__checkout">
          <PrimaryButton>Checkout</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
