import { createSlice } from "@reduxjs/toolkit";
const initialState = { carts: []}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const itemInCart = state.carts.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          state.carts = state.carts.map(item => {
            if(item.id === action.payload.id){
                let tempQty = item.quantity + action.payload.quantity;
                let tempTotalPrice = tempQty * item.price;
                return {
                    ...item, quantity: tempQty,total: tempTotalPrice
                }
            } else {
                return item;
            }
        });
        
        } else {
          state.carts.push(action.payload);
        }
        
  },
  clear : (state, action) => {
    const tempCart = state.carts.filter(item => item.id !== action.payload.id);
    state.carts = tempCart;
  },


  increment : (state, action) => {
    const item = state.carts.find((item) => item.id === action.payload.id);
     if (item.stock > item.quantity) {
      item.quantity++;     
      }
    
  },


  decrement : (state, action) => {
    const item = state.carts.find((item) => item.id === action.payload.id);
    if (item.quantity === 1) {
      item.quantity = 1
    } else {
      item.quantity--;
    }
  }
  }
});

export const { addToCart, increment, decrement, clear} = cartSlice.actions;

export default cartSlice.reducer;
