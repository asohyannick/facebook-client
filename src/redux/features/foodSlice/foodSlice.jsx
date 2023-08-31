import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://course-api.com/react-store-products';
export const fetchFood = createAsyncThunk('food/fetchFood', async(thunkAPI) => {
    try{
        const resp = await axios.get(url);
        console.log(resp.data);
        return resp.data
    }catch(error){
        return thunkAPI.rejectWithValue(`Something went wrong ${error.message}`);
    }
});

const initialState = {
    food:[],
    isLoading:false
};

export const foodSlice = createSlice({
    name:'food',
    initialState,
    reducers:{
        clearAll:(state) => {
            state.food = [];
        },
        removeOne:(state, action) => {
            const itemId = action.payload;
            state.food = state.food.filter((item) => item.id !== itemId);
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchFood.pending, (state) => {
            state.isLoading = true;
            console.log('we are still fetching the api');
        })
        .addCase(fetchFood.fulfilled, (state, action) => {
            state.food = action.payload;
            state.isLoading = false;
            console.log('We are done fetching the api');
        })
        .addCase(fetchFood.rejected, (state) => {
            state.isLoading = false;
        })
    }
});
export const selectFoodLoading = ((state) => state.food.isLoading);
export const selectFoodShop = ((state) => state.food.food);
export const {removeOne} = foodSlice.actions;
export default foodSlice.reducer;