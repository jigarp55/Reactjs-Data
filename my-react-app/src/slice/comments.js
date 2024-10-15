import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading : false,
    data: [],
    error: {}
}

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {

        CommentsRequest : (state,action)=>
        {
            state.isLoading = false;
    
        },
        CommentsSuc : (state,action)=>{
            state.data = action.payload;
            state.isLoading = false;
        },
        CommentsFail : (state,action)=>{
    
            state.error = action.payload;
            state.isLoading = false;
        }


  }
});

export const {CommentsRequest,CommentsSuc,CommentsFail} = comments.actions

export default comments.reducer