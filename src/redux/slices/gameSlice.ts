import { createSlice } from '@reduxjs/toolkit';
import { VideoGame } from '../../types/videoGamesTypes';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for cart and videogame

interface CartState {
  cart: VideoGame[];
}

const initialState: CartState = {
  cart: [],
};

// Define the slice

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<VideoGame>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<VideoGame>) => {
      state.cart = state.cart.filter((game) => game.id !== action.payload.id);
    },
  },
});

// Export the actions

export const selectCart = (state: RootState) => state.cart.cart;

export const { addToCart, removeFromCart } = cartSlice.actions;

// Export the reducer

export default cartSlice.reducer;
