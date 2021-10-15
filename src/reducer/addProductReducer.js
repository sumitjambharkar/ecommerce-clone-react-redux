export const initialState = { basket: [] };

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, qty: +1 }],
      };
    case "REMOVE_TO_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product in basket ${action.payload.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default addProductReducer;
