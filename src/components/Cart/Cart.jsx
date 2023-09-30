import { useEffect } from "react";
import CartModal from "./CartModal";
import CartIcon from "./CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartIsOpen, cartIsAnimated, quantity } = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    if (quantity === 0) return;

    dispatch(cartActions.animateCart());

    const updateCartBtnId = setTimeout(() => {
      dispatch(cartActions.animateCart());
    }, 250);

    return () => {
      clearTimeout(updateCartBtnId);
    };
  }, [quantity, dispatch]);

  const openCartHandler = () => {
    dispatch(cartActions.openCart());
  };

  const closeCartHandler = () => {
    dispatch(cartActions.closeCart());
  };

  const cartBtnClasses = `cart__button ${
    cartIsAnimated ? "cart__button--animate" : ""
  }`;

  const ariaLabel = !cartIsOpen
    ? "Put the mouse on the cart icon to open the cart modal"
    : "Put the mouse out of the cart icon to close the cart modal";

  return (
    <div
      className="cart"
      onMouseEnter={openCartHandler}
      onMouseLeave={closeCartHandler}
    >
      <button
        className={cartBtnClasses}
        aria-label={ariaLabel}
        aria-expanded={cartIsOpen}
        aria-controls="card-modal"
      >
        <CartIcon className="cart__icon" />
        <span className="sr-only">Cart Menu</span>
        {quantity > 0 && (
          <div className="cart__count">
            <p className="sr-only">Number of cart items</p>
            <p className="cart__count-value">{quantity}</p>
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
// DONE: Fetch product details
// DONE: Fetch these products
// DONE: Add 10 products with carousel
// DONE: Solve the design issues
// DONE: Switch to Redux
// TODO: Deal with Carousel Modal
// TODO: Deal with Form Search
// TODO: Change the variables name
// TODO: Deploy the Project

// Project V2: User can easily add/shop a product

// TODO: Add an authentication system
// TODO: Add a register system
// TODO: Authenticated user can add/modify/delete his product
// TODO: Add a cart page (When user can easily add/remove one or more items)
// TODO: Add more category
// TODO: Add Checkout so that user can buy a product

// Shopping cart E-commerce: Learn Supabase => 08:30 - 11:30
// React Fundamentals: ContextApi           => 12:00 - 13:45

// NextJS: Getting Started:                 => 03:30 - 06:30
// Git: Practice Git                        => 07:00 - 07:30

// Register System (Add a new user, Modify the profile (Modify Avatar, Password), Delete profile).
//
