"use client"
import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', serializedState);
    }
  } catch {
    // ignore write errors
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState(),
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item._id === action.payload._id);
      if (itemExists) {
        itemExists.Quantity++;
      } else {
        state.push({ ...action.payload, Quantity: 1 });
      }
      saveState(state);
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload);
      item.Quantity++;
      saveState(state);
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload);
      if (item.Quantity === 1) {
        const index = state.findIndex((item) => item._id === action.payload);
        state.splice(index, 1);
      } else {
        item.Quantity--;
      }
      saveState(state);
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item._id === action.payload);
      state.splice(index, 1);
      saveState(state);
    },
    clearCart: (state) => {
      state = [];
      localStorage.removeItem('cart'); // Remove 'cart' item from localStorage
      saveState(state);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions;
