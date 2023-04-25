import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import prdCateReducer from "./prdCateSlice";
import siderReducer from "./sliderSlice";
import voucheReducer from "./voucheSlice";
import productReducer from "./productSlice";

import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice"
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  blog: blogReducer,
  prdCate: prdCateReducer,
  slider: siderReducer,
  vouche: voucheReducer,
  product: productReducer,
  order: orderReducer,
  cart: cartReducer,
});

export default rootReducer;
