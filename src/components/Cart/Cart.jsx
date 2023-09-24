import { useState, useContext, useEffect } from "react";
import CartModal from "./CartModal";
import CartIcon from "./CartIcon";
import CartContext from "../../store/CartContext";

const Cart = () => {
  const [cartBtnClasses, setCartBtnClasses] = useState("cart__button");

  const cartContext = useContext(CartContext);

  const countItems = cartContext.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const showCartHandler = () => {
    console.log("Show cart");
    cartContext.showCart();
  };

  const hideCartHandler = () => {
    console.log("Hide cart");
    cartContext.hideCart();
  };

  useEffect(() => {
    if (countItems === 0) return;

    const updateCartBtnId = setTimeout(() => {
      setCartBtnClasses("cart__button cart__button--animate");
    }, 50);

    return () => {
      clearTimeout(updateCartBtnId);
      setCartBtnClasses("cart__button");
    };
  }, [countItems]);

  return (
    <div
      className="cart"
      onMouseEnter={showCartHandler}
      onMouseLeave={hideCartHandler}
    >
      <button
        className={cartBtnClasses}
        aria-label={`Click to ${
          !cartContext.cartIsOpen ? "Open" : "Close"
        } the cart modal`}
        aria-expanded={cartContext.cartIsOpen}
        aria-controls="card-modal"
      >
        <CartIcon className="cart__icon" />
        <span className="sr-only">Cart Menu</span>
        {countItems > 0 && (
          <div className="cart__count">
            <span className="sr-only">Number of cart items</span>
            <span className="cart__count-value">{countItems}</span>
          </div>
        )}
      </button>
      <CartModal />
    </div>
  );
};

export default Cart;

// Project V1:

// DONE: Manage (-/+) buttons
// DONE: Take the amount of items
// DONE: Add the item to the cart
// DONE: Update the existing cart item (Update the amount)
// DONE: Update the Number of cart items
// DONE: Delete the item from the cart
// DONE: Open/Close Cart
// DONE: Style the Amount Input
// DONE: Resize the Cart Modal
// DONE: Animate Cart Icon when it updated
// DONE: Add a back button
// DONE: On hover show the cart
// DONE: When click on the navigation overlay close the navigation
// TODO: Add 10 products with carousel
// TODO: Fetch product details
// TODO: Fetch these products
// TODO: Deal with Form Search
// TODO: Deal with Carousel Modal
// TODO: Change the variables name
// TODO: Deploy the Project

// Project V2: User can easily add/shop a product

// TODO: Add an authentication system
// TODO: Add a register system
// TODO: Authenticated user can add/modify/delete his product
// TODO: Add a cart page (When user can easily add/remove one or more items)
// TODO: Add more category
// TODO: Add Checkout so that user can buy a product

// Shopping cart E-commerce
// React Fundamentals

// NextJS
// Git

// Shopping cart E-commerce: Learn Supabase => 08:30 - 11:30
// React Fundamentals: ContextApi           => 12:00 - 13:45

// NextJS: Getting Started:                 => 03:30 - 06:30
// Git: Practice Git                        => 07:00 - 07:30
