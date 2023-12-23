import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';
const orderInfoSlice = createSlice({
  name: 'order-slice',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const index = state.findIndex(
        (item) =>
          item?.title === action.payload.title ||
          item?.title === action.payload.orderInfo?.title
      );

      const obj =
        action.payload.orderInfo || action.payload;

      if (index !== -1 || !obj?.title) {
        state[index].amount += Number(obj.amount);
        state[index].totalPriceByItem +=
          obj.amount * obj.price;
      } else {
        state.push({
          title: obj.title,
          amount: Number(obj.amount),
          price: obj.price,
          imgUrl: obj.imgUrl,
          totalPriceByItem: obj.amount * obj.price,
        });
      }
    },
    minus(state, action) {
      const index = state.findIndex(
        (item) => item?.title === action.payload
      );

      state[index].amount--;
    },
  },
});

const cartAmountSlice = createSlice({
  name: 'cart-amount-slice',
  initialState: { amount: 0 },
  reducers: {
    increment(state, action) {
      state.amount += action.payload;
    },
    decrement(state, action) {
      if (state.amount > 0) state.amount -= action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    order: orderInfoSlice.reducer,
    cartAmount: cartAmountSlice.reducer,
  },
});

export const orderActions = orderInfoSlice.actions;
export const cartAmountActions = cartAmountSlice.actions;
export default store;
