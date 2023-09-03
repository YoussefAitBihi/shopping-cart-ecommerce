import PrimaryButton from "../UI/PrimaryButton";
import CartItem from "./CartItem";

const CartModal = () => {
  return (
    <div className="cart-modal" id="cart-modal">
      <div className="cart-modal__head separator">
        <h4 className="cart-modal__title">Cart</h4>
      </div>
      <div className="cart-modal__body">
        <ul className="cart-modal__items">
          <CartItem />
          <CartItem />
        </ul>
        <div className="cart-modal__checkout">
          <PrimaryButton>Checkout</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
