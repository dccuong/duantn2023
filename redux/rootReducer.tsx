import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import prdCateReducer from "./prdCateSlice";
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
 prdCate: prdCateReducer,
  slider: siderReducer,
  vouche: voucheReducer,
  prd : prdReducer,
  prdColor: prdColorReducer,
  prdAmount: prdAmountReducer,
  prdSize: prdSizeReducer
});

export default rootReducer;
