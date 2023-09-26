import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import cartReducer from "./cartReducer";

export const SHOW_CART = "SHOW_CART";

const defaultCartState = {
  items: [],
  cartIsOpen: false,
  cartIsAnimated: false,
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const openCartHandler = () => {
    dispatchCartAction({ type: "OPEN_CART" });
  };

  const closeCartHandler = () => {
    dispatchCartAction({ type: "CLOSE_CART" });
  };

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const countItems = cartState.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    if (countItems === 0) return;

    dispatchCartAction({ type: "CART_ANIMATION" });

    const updateCartBtnId = setTimeout(() => {
      dispatchCartAction({ type: "CART_ANIMATION" });
    }, 250);

    return () => {
      clearTimeout(updateCartBtnId);
    };
  }, [countItems]);

  const cartContext = {
    items: cartState.items,
    cartIsOpen: cartState.cartIsOpen,
    cartIsAnimated: cartState.cartIsAnimated,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    openCart: openCartHandler,
    closeCart: closeCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
