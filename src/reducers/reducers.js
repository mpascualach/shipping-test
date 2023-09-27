import { combineReducers } from "@reduxjs/toolkit";
import shipmentSlice from "./shipmentSlice";

const rootReducer = combineReducers({
  shipments: shipmentSlice,
});

export default rootReducer;
