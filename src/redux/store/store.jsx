import { configureStore } from "@reduxjs/toolkit";
import toursReducer from '../features/toursSlice/ToursSlice';
import cartReducer from '../features/cartSlice/CartSlice';
import moviesReducer from '../features/movieSlice/movieSlice';
const store  = configureStore({
    reducer: {
        tours:toursReducer,
        cart:cartReducer,
        jobs:moviesReducer
    }
});
export default store;

