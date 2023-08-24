import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const cart = 'https://course-api.com/react-useReducer-cart-project';
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', 
async(thunkAPI) => {
    try{
        const response = await axios.get(cart);
        console.log(response);
        return response.data
    } catch(error) {
        return thunkAPI.rejectedWithValue('Something went wrong');
    }
})
const initialState = {
    cart:[],
    isLoading:false,
    amount:0,
    total:5,
    price:0,
};
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cart = [];
        },
        removeOne:(state,action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter((card) => card.id !== itemId);
        },
        increase:(state,action) => {
          const cartItem = state.cart.find(
            (item) => item.id === action.payload);
            cartItem.amount = cartItem.amount + 1; 
        },
        decrease:(state, action) => {
            const cartItem = state.cart.find((item) => item.id === action.payload);
            cartItem.amount = cartItem.amount - 1;
        },
        addToCart:(state,action) => {
            const itemCart = state.cart.find(
            (item) => item.id === action.payload);
            if(itemCart) {
                itemCart.amount++;
            } else {
                state.cart.push({...action.payload, amount: 1});
            }
        },
        addMoreItemsToAdd:(state) => {
            state.total  = state.total + 2
        },
        costOfShopping:(state, action) => {
            const cartItems = state.cart.find((item) => item.id === action.payload);
            cartItems.price = cartItems.price * 2;
        }

    },
    extraReducers(builder) {
        builder
        .addCase(fetchCartItems.pending, (state) => {
            state.isLoading = true;
            console.log('We are still fetching the data from the api');
        })
        .addCase(fetchCartItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cart = action.payload;
            console.log('we have successfully fetch the data from the api');
        })
        .addCase(fetchCartItems.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const selectAllCart = ((state) => state.cart.cart);
export const selectLoadingState = ((state) => state.cart.isLoading);
export const selectAllAmount = ((state) => state.cart.amount);
export const selectAllTotal = ((state) => state.cart.total);
export const {
    clearCart, 
    removeOne, 
    increase, 
    decrease, 
    addToCart,
    addMoreItemsToAdd,
    costOfShopping
} = cartSlice.actions;
export default cartSlice.reducer;
