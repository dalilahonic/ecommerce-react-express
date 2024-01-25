import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';
const orderInfoSlice = createSlice({
  name: 'order-slice',
  initialState: {
    items: [],
    totalPrice: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      const index = state.items.findIndex(
        (item) =>
          item?.title === action.payload.title ||
          item?.title === action.payload.orderInfo?.title
      );

      const obj =
        action.payload.orderInfo || action.payload;

      if (index !== -1) {
        state.items[index].amount += Number(obj.amount);
        state.items[index].totalPriceByItem =
          state.items[index].amount *
          state.items[index].price;
      } else {
        state.items.push({
          title: obj.title,
          amount: Number(obj.amount),
          price: obj.price,
          imgUrl: obj.imgUrl,
          totalPriceByItem: obj.amount * obj.price,
        });
      }

      state.totalPrice = state.items.reduce((acc, obj) => {
        return (acc += Number(obj.totalPriceByItem));
      }, 0);
    },

    minus(state, action) {
      const index = state.items.findIndex(
        (item) => item?.title === action.payload
      );

      state.items[index].amount--;

      state.items[index].totalPriceByItem =
        state.items[index].amount *
        state.items[index].price;

      state.totalPrice = state.items.reduce((acc, obj) => {
        return (acc += Number(obj.totalPriceByItem));
      }, 0);
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
