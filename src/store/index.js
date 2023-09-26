import { createStore } from "redux";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const OPEN_CART = "OPEN_CART";
export const CLOSE_CART = "CLOSE_CART";
export const CART_ANIMATION = "CART_ANIMATION";
export const CART_COUNT = "CART_COUNT";

const defaultCartState = {
  items: [],
  cartIsOpen: false,
  cartIsAnimated: false,
  countItems: 0,
};

const cartReducer = (state = defaultCartState, action) => {
  let updatedItems = [...state.items];

  switch (action.type) {
    case OPEN_CART: {
      return {
        ...state,
        cartIsOpen: true,
      };
    }

    case CLOSE_CART: {
      return {
        ...state,
        cartIsOpen: false,
      };
    }

    case ADD_ITEM: {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });

      if (existingCartItemIndex !== -1) {
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push(action.item);
      }

      return {
        ...state,
        items: updatedItems,
      };
    }

    case REMOVE_ITEM: {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    case CART_COUNT: {
      const countItems = state.items.reduce((acc, item) => {
        return acc + item.amount;
      }, 0);

      return {
        ...state,
        countItems: countItems,
      };
    }

    case "CART_ANIMATION": {
      return {
        ...state,
        cartIsAnimated: !state.cartIsAnimated,
      };
    }

    default: {
      return defaultCartState;
    }
  }
};

const store = createStore(cartReducer);

export default store;
