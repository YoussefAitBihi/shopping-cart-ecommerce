import { useState } from "react";
import CartModal from "./CartModal";
import CartIcon from "../../assets/icon-cart.svg";

const Cart = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCloseCartHandler = () => {
    setCartIsOpen((prevCartState) => !prevCartState);
  };

  return (
    <div className="cart">
      <button
        className="cart__button"
        aria-label={`${!cartIsOpen ? "Open" : "Close"} the cart modal`}
        aria-expanded={cartIsOpen}
        aria-controls="card-modal"
        onClick={openCloseCartHandler}
      >
        <img
          src={CartIcon}
          alt="Cart Icon"
          className="cart__icon"
          aria-hidden="true"
        />
        <span className="sr-only">Cart Menu</span>
      </button>
      <CartModal />
    </div>
  );
};

export default Cart;
