import { configureStore } from "@reduxjs/toolkit";
import shop from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    shop,
  },
});

export default store;
