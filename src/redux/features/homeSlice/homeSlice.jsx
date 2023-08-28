import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'
export const fetchGoods = createAsyncThunk('goods/fetchGoods', async(thunkAPI) => {
    try{
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue(`Something went wrong ${error.message}`);
    }
})
const initialState = {
    people:[],
    isLoading:false,
    price:0,
    amount:0
};
export const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchGoods.pending, (state) => {
            state.isLoading = true;
            console.log(`We are still loading the api from the server...`);
        })
        .addCase(fetchGoods.fulfilled, (state, action) => {
            state.isLoading = false;
            state.goods = action.payload;
            //console.log(action);
            console.log(`We have successfully fetch the api from the server.`);
        })
        .addCase(fetchGoods.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const selectHomeIsLoading = ((state) => state.items.isLoading);
export const  selectPeopleArr = ((state) => state.items.people)
export default homeSlice.reducer;