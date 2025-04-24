"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from './cart.slice';
import AddressReducer from './address.slice'

const rootReducer = combineReducers({
    //add all your reducers here
    cart: cartReducer,
    address: AddressReducer,
},);

export const store = configureStore({
    reducer: rootReducer,
});