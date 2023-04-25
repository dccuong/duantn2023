import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../models/cart";
import { RootState } from "./store";

type CartState = {
  carts: Cart[];
  totalPrice: number;
};

const initialState: CartState = {
  carts: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, { payload }) {
      const exitsProduct = state.carts.find((item) => {
        return (
          item.productId === payload.productId && item.size == payload.size
        );
      });

      if (exitsProduct) {
        exitsProduct.quantity += payload.quantity;
      } else {
        state.carts = [...state.carts, payload];
      }

      state.totalPrice = state.carts.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },

    increaseQnt(state, { payload }) {
      const exitsProduct = state.carts.find(
        (item) => item.size 
          == payload.prdSize &&
          item.productId == payload.productId
      );

      exitsProduct!.quantity++;

      // update total price
      state.totalPrice = state.carts.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },

    decreaseQnt(state, { payload }) {
      const exitsProduct = state.carts.find(
        (item) => item.size 
          == payload.prdSize &&
          item.productId == payload.productId
      );

      if (exitsProduct?.quantity! <= 1) {
        state.carts = state.carts.filter((item) => {
          return (
            item.productId &&
            item.size &&
            (item.size !== payload.prdSize ||
              item.productId !== payload.productId)
          );
        });
      } else {
        exitsProduct!.quantity--;
      }

      // update total price
      state.totalPrice = state.carts.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },

    removeCart(state, { payload }) {
      console.log(payload, "sssssss");
      state.carts = state.carts.filter((item) => {
        return (
          item.productId &&
          item.size &&
          (item.size !== payload.prdSize ||
            item.productId !== payload.productId)
        );
      });
      // update total price
      state.totalPrice = state.carts.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },

    finishOrder(state) {
      (state.carts = []), (state.totalPrice = 0);
    },
  },
});

export const selectCarts = (state: RootState) => state.cart.carts;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const { addCart, increaseQnt, decreaseQnt, removeCart, finishOrder } =
  cartSlice.actions;
export default cartSlice.reducer;
