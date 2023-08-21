import { configureStore } from "@reduxjs/toolkit";
import toursReducer from '../features/toursSlice/ToursSlice';
const store  = configureStore({
    reducer: {
        tours:toursReducer
    }
});
export default store;

