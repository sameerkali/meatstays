"use client"

import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    name: '',
    address: '',
    landmark: '',
    pincode: '',
    email: '',
    mobile: ''
};

// Check if localStorage is available (browser environment)
if (typeof window !== 'undefined') {
    const storedAddress = JSON.parse(localStorage.getItem('address'));
    if (storedAddress) {
        initialState = storedAddress;
    }
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddress: (state, action) => {
            const newState = { ...state, ...action.payload };
            if (typeof window !== 'undefined') {
                localStorage.setItem('address', JSON.stringify(newState));
            }
            return newState;
        },
        clearAddress: () => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('address');
            }
            return initialState;
        }
    }
});

export const { setAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
