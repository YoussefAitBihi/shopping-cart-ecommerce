// export default cartReducer;

const cartReducer = (state, action) => {
  let updatedItems = [...state.items];

  switch (action.type) {
    case "SHOW_CART": {
      return {
        ...state,
        cartIsOpen: true,
      };
    }

    case "HIDE_CART": {
      return {
        ...state,
        cartIsOpen: false,
      };
    }

    case "ADD_ITEM": {
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

    case "REMOVE_ITEM": {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    default: {
      throw new Error(`Unknown action ${action.type}`);
    }
  }

  // return defaultCartState;
};

export default cartReducer;
