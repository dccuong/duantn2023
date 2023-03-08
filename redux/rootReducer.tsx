import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import blogCateReducer from "./blogCateSlice";
import siderReducer from "./sliderSlice";
import voucheReducer from "./voucheSlice";
import prdReducer from "./prdSlice";
import prdColorReducer from "./prdColorSlice";
import prdAmountReducer from "./prdAmountSlice";
import prdSizeReducer from "./prdSizeSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  blog: blogReducer,
  blogCate: blogCateReducer,
  slider: siderReducer,
  vouche: voucheReducer,
  prd : prdReducer,
  prdColor: prdColorReducer,
  prdAmount: prdAmountReducer,
  prdSize: prdSizeReducer
});

export default rootReducer;
