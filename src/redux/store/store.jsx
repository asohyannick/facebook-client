import { configureStore } from "@reduxjs/toolkit";
import toursReducer from '../features/toursSlice/ToursSlice';
import cartReducer from '../features/cartSlice/CartSlice';
import moviesReducer from '../features/movieSlice/movieSlice';
import itemsReducer from '../features/homeSlice/homeSlice';
import foodReducer from '../features/foodSlice/foodSlice';
const store  = configureStore({
    reducer: {
        tours:toursReducer,
        cart:cartReducer,
        jobs:moviesReducer,
        items:itemsReducer,
        food:foodReducer
    }
});
export default store;

