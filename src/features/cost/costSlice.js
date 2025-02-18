import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  costs: 0,
  categoryArr: [{id:1, count:0}],
  productArr: [],
};

const totalCostSlice = createSlice({
  name: "cost",
  initialState,
  reducers: {
    //for totalCost
    addCost: (state, action) => {
      state.costs += Number(action.payload);
    },
    //for totalCost
    removeCost: (state, action) => {
      state.costs -= Number(action.payload);
    },
    //for count of each unique item
    addCount: (state, action) => {
      const item = state.categoryArr.find(cat => cat.id === action.payload);
      if (item) {
        item.count += 1;
      } else {
        state.categoryArr.push({ id: action.payload, count: 1 });
      }
    },
    //for count of each unique item
    removeCount: (state, action) => {
      // console.log("action payload:", action.payload);
      const item = state.categoryArr.find(cat => cat.id === action.payload);
      if (item) {
        if (item.count > 1) {
          item.count -= 1; 
        } else {
          item.count = 0;
        }
      }
    },
    //to show details
    addProduct: (state, action) => {
      // console.log("action payload:,", action.payload);
      const itemToFind = action.payload.id;
      // console.log("itemToFind:", itemToFind);
      const item = state.productArr.find(prod => prod.id === itemToFind);
      // console.log("item:", item);

      if (item) {
        item.count += 1; 
      } else {
        state.productArr.push({ id: action.payload.id, name: action.payload.name, count: 1, imgUrl: action.payload.imgUrl, capacity: action.payload.capacity, price: action.payload.price }); // If not found, add new item
      }
    },
    //to show details
    removeProduct: (state, action) => {
      const item = state.productArr.find(prod => prod.id === action.payload);
      if (item) {
        if (item.count > 1) {
          item.count -= 1;
        } else {
          state.productArr = state.productArr.filter(prod => prod.id !== action.payload);
        }
      }
    },
    //to completely delete item
    deleteProduct: (state, action) => {
      // const item = state.productArr.find(prod => prod.id === action.payload);
      state.productArr = state.productArr.filter(prod => prod.id !== action.payload);
      state.categoryArr = state.categoryArr.filter(cat => cat.id !== action.payload);
      state.costs = 0;
    }
  }
});

export const { addCost, removeCost, addCount, removeCount, addProduct, removeProduct, deleteProduct } = totalCostSlice.actions;

export default totalCostSlice.reducer;