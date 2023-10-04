
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";
import languageSlice from './slices/language.js'


const store = configureStore({
  reducer: {
    cart: cartSlice,
    language:languageSlice,
  }
});

export default store;