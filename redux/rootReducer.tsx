import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import prdCateReducer from "./prdCateSlice";
import siderReducer from "./sliderSlice";
import voucheReducer from "./voucheSlice";
import productReducer from "./productSlice";
import prdColorReducer from "./prdColorSlice";
import prdAmountReducer from "./prdAmountSlice";
import prdSizeReducer from "./prdSizeSlice";
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
  prdColor: prdColorReducer,
  prdAmount: prdAmountReducer,
  order: orderReducer,
  prdSize: prdSizeReducer,
  cart: cartReducer,
});

export default rootReducer;
