import { createContext } from "react";

const CartContext = createContext({
  items: [],
  cartIsOpen: false,
  cartIsAnimated: false,
  addItem: (item) => {},
  removeItem: (id) => {},
  openCart: () => {},
  closeCart: () => {},
});

export default CartContext;
