import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  costs: 0,
  categoryArr: [{id:1, count:0}],
};

const totalCostSlice = createSlice({
  name: "cost",
  initialState,
  reducers: {
    addCost: (state, action) => {
      state.costs += action.payload;
    },
    removeCost: (state, action) => {
      state.costs -= action.payload;
    },
    addCount: (state, action) => {

      const item = state.categoryArr.find(cat => cat.id === action.payload);
      if (item) {
        item.count += 1; // If found, increment count
      } else {
        state.categoryArr.push({ id: action.payload, count: 1 }); // If not found, add new item
      }
    },
    removeCount: (state, action) => {
      console.log("action payload:", action.payload);
      const item = state.categoryArr.find(cat => cat.id === action.payload);
      if (item) {
        if (item.count > 1) {
          item.count -= 1; // ✅ Decrease count if greater than 1
        } else {
          item.count = 0; // ✅ Instead of removing, set count to 0
        }
      }
    }
  }
});

export const { addCost, removeCost, addCount, removeCount } = totalCostSlice.actions;

export default totalCostSlice.reducer;
