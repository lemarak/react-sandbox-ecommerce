const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADDITEM":
      const indexItemAdd = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );
      if (indexItemAdd !== -1) {
        const updateQuantity = {
          ...state.cart[indexItemAdd],
          quantity: state.cart[indexItemAdd].quantity + action.payload.quantity,
        };
        const cartUpdated = [...state.cart];
        cartUpdated.splice(indexItemAdd, 1, updateQuantity);
        return {
          cart: cartUpdated,
        };
      } else {
        const cartUpdated = [...state.cart];
        cartUpdated.push(action.payload);
        return {
          cart: cartUpdated,
        };
      }

    case "UPDATEITEM":
      return {};
  }
};

export default cartReducer;
