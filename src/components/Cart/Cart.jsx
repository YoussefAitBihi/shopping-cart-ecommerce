import { useState } from "react";
import CartModal from "./CartModal";
import CartIcon from "./CartIcon";

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
        <CartIcon className="cart__icon" />
        <span className="sr-only">Cart Menu</span>
      </button>
      <CartModal />
    </div>
  );
};

export default Cart;

// Project goal: V1

// 1. Sneaker page: contains all sneakers
// 2. Sneaker details: contains the details of a sneaker
// 3. A cart: contains the order (redux, react-router)
// 4. Deploy it

// 3.1 Create the design of sneaker card
// 3.2 Add several sneakers on the DB
// 3.3 Fetch all sneakers
// 3.4 Do an order

// Project goal: V2

// 1. Add an authentication/register
// 2. Let's the user to add/edit/delete his sneaker
// 3. Add a pagination

// Program

// E-commerce Project + Redux + React-Router-DOM // 08:30 - 12:00
// NextJS // 12:30 - 13:45

// E-commerce Project + Redux + React-Router-DOM // 16:00 - 19:00
// Git/RWD // 1h

// Portfolio: E-commerce, Design system,
