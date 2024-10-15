import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading : false,
    data:null,
    error : {}
}

const weatherslice = createSlice({
  name: 'weather',
  initialState,
  reducers: {

    weatherRequest : (state,action) => {
       state.isLoading =true;
    },

    weatherSucess : (state,action) => {
        state.isLoading = false ; 
        state.data = action.payload;
    },

    weatherFail : (state,action) => {
        state.isLoading = true;
        state.error = action.payload;
    }
  }
});

export const { weatherRequest , weatherSucess , weatherFail } = weatherslice.actions

export default weatherslice.reducer