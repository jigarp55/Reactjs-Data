import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading:false,
    data: null,
    erorr: {}

}

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    UserRequest : (state,action)=>{

        state.isLoading = true;

        return state;
    },

    UserSuc  : (state,action)=>{
        state.isLoading = false;
        state.data = action.payload
       

    },

    UserError : (state,action)=>{
        state.isLoading = false;
        state.data = action.payload
        return state;
    }

  }
});

export const {UserRequest,UserSuc,UserError} = userslice.actions

export default userslice.reducer