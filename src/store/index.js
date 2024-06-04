import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice";
const store = configureStore({ reducer: { ui: uiReducer, cart: cartReducer } });
export default store;
