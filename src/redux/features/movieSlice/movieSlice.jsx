import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//const  url = 'https://api.data.gov.sg/v1/environment/air-temperature';
//const api = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
///const punkAPI = 'https://api.punkapi.com/v2/beers';
const storeProducts = 'https://course-api.com/react-store-products';
export const fetchDrinks = createAsyncThunk(
    'movies/fetchMovies', async(thunkAPI) => {
    try {
        const response = await axios.get(storeProducts);
        console.log(response.data);
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue('Something went wrong.');
    }
});

const initialState = {
    jobs:[],
    isLoading:false,
};

export const movieSlice = createSlice({
    name:'jobs',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchDrinks.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchDrinks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movies = action.payload;
        })
        .addCase(fetchDrinks.rejected, (state) => {
            state.isLoading = false;
        });
    }
});
export const selectAllLoading = ((state) => state.jobs.isLoading);
export const selectAllDrinks = ((state) => state.jobs.jobs);
export default movieSlice.reducer;