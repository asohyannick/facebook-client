import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const tours = 'https://course-api.com/react-tours-project';
export const fetchTours = createAsyncThunk('tours/fetchTours', async (thunkAPI) => {
    try{
        const response = await axios.get(tours);
        // console.log(response);
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue('Something went wrong');
    }
})
const initialState = {
  tours:[],
  isLoading:false,
  status:'idle', // pending || succeeded || rejected.
  error:null,
};


export const toursSlice = createSlice({
    name:'tours',
    initialState,
    reducers:{
        removeOneTour:(state, action) => {
            const tourId = action.payload;
            state.tours.filter(
            (tour) => tour.id !== tourId);
        },
        clearTours:(state) => {
            state.tours = [];
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchTours.pending, (state) => {
            state.isLoading = true;
            //console.log('it is still pending');
        }).addCase(fetchTours.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tours = action.payload;
            //console.log('successful');
        }).addCase(fetchTours.rejected, (state) => {
            state.isLoading = false;
            //console.log(action);
        })
    }
});

export const {clearTours, removeOneTour} =  toursSlice.actions;

export const selectAllTours = ((state) => state.tours.tours)
export const selectAllLoading = ((state) => state.tours.isLoading)

export default toursSlice.reducer;