import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartTrashIcon from "./CartTrashIcon";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const totalAmount = `$${(props.price * props.amount).toFixed(2)}`;

  const removeItemHandler = () => {
    cartContext.removeItem(props.id);
  };

  return (
    <li className="cart-item">
      <div className="cart-item__image">
        <img src={props.thumbnail} alt="Image Product Thumbnail" />
      </div>
      <div className="cart-item__middle">
        <h3 className="cart-item__title">{props.title}</h3>
        <div className="cart-item__details">
          <p className="cart-item__price">
            <span className="sr-only">{`The price of ${props.title} is :`}</span>
            <span>{price}</span>
          </p>
          <p className="cart-item__amount">
            <span className="sr-only">{`The amount of ${props.title} is :`}</span>
            <span>x {props.amount}</span>
          </p>
          <p className="cart-item__total">
            <span className="sr-only">{`The total amount of ${props.title} is :`}</span>
            <strong>{totalAmount}</strong>
          </p>
        </div>
      </div>
      <button className="cart-item__action" onClick={removeItemHandler}>
        <span className="sr-only">To delete click here</span>
        <CartTrashIcon className="cart-item__trash" />
      </button>
    </li>
  );
};

export default CartItem;
