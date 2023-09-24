import { createContext } from "react";

const CartContext = createContext({
  items: [],
  cartIsOpen: false,
  openCloseCart: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  showCart: () => {},
  hideCart: () => {},
});

export default CartContext;
