import { useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "./cartReducer";

const defaultCartState = {
  items: [],
  cartIsOpen: false,
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const showCartHandler = () => {
    dispatchCartAction({ type: "SHOW_CART" });
  };

  const hideCartHandler = () => {
    dispatchCartAction({ type: "HIDE_CART" });
  };

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    cartIsOpen: cartState.cartIsOpen,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
