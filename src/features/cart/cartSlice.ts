import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface CartType {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface StateType {
  cart: CartType[];
}

const initialState: StateType = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: 'Mediterranian',
    //   quantity: 2,
    //   price: 16,
    //   totalPrice: 32
    // }
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaceItemQuantity(state, action) {
      const item: CartType | undefined = state.cart.find(
        (item: CartType) => item.pizzaId === action.payload
      );

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaceItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0)
          cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    }
  }
});

export const {
  addItem,
  deleteItem,
  increaceItemQuantity,
  decreaceItemQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCartQuantityById = (id: number) => (state: RootState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
