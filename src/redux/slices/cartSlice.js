import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  carts: JSON.parse(localStorage.getItem("carts")) ?? [],
  product: {},
};

const cartSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    selectProduct: (state, { payload }) => {
      state.product = { ...payload };
    },
    deselectProduct: (state) => {
      state.product = {};
    },
    buyProduct: (state, { payload }) => {
      const index = state.carts.findIndex((item) => item.maSP === payload.maSP);

      if (index !== -1) {
        state.carts[index].quantity++;
      } else {
        state.carts = [...state.carts, { ...payload, quantity: 1 }];
      }
      toast.info(`Thêm ${payload.tenSP} SL: ${1}`, { position: "top-left" });

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    increase: (state, { payload }) => {
      const index = state.carts.findIndex((item) => item.maSP === payload);

      if (index !== -1) {
        state.carts[index].quantity++;

        toast.success(`Tăng SL`, { position: "top-left" });

        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
    decrease: (state, { payload }) => {
      const index = state.carts.findIndex((item) => item.maSP === payload);

      if (index !== -1) {
        state.carts[index].quantity--;
        toast.success(`Giảm SL`, { position: "top-left" });

        if (state.carts[index].quantity === 0) {
          state.carts.splice(index, 1);
          toast.error(`Xóa SP`, { position: "top-left" });

          localStorage.setItem("carts", JSON.stringify(state.carts));
        }
      }
    },
    remove: (state, { payload }) => {
      const index = state.carts.findIndex((item) => item.maSP === payload);

      if (index !== -1) {
        state.carts.splice(index, 1);

        toast.info(`Xóa`, { position: "top-left" });

        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
  },
});

export default cartSlice.reducer;

export const { selectProduct, deselectProduct, buyProduct, increase, decrease, remove } = cartSlice.actions;
