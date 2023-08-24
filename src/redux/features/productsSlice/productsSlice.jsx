import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const products = 'https://course-api.com/react-store-single-product?id=rec1Ntk7siEEW9ha1';
export const fetchAllProducts = createAsyncThunk('shopItems/fetchProducts', 
async(thunkAPI) => {
    try{
        const response = await axios.get(products);
        console.log(response);
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue('Something went wrong');
    }
})
const initialState = {
    products:[],
    isLoading:false,
    error:null,
    status:'idle',
};

export const productsSlice = createSlice({
    name:'shopItems',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true;
            console.log('we are still loading the API');
        }).addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            console.log('we have successfully fetch the API.');
        }).addCase(fetchAllProducts.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const selectAllProducts = ((state) => state.products.products);
export const selectAllLoading = ((state) => state.products.isLoading);
export default productsSlice.reducer;