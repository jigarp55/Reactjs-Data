import { createSlice } from '@reduxjs/toolkit';

const userSlicee = createSlice({
  name: 'user1',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUserRequest: (state) => {
      state.loading = true;
    },
    addUserSuccess: (state, action) => {
      state.users.push(action.payload);
      state.loading = false;
    },
    addUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Similarly, handle update, delete, and fetch users
  },
});

export const { addUserRequest, addUserSuccess, addUserFailure } = userSlicee.actions;
export default userSlicee.reducer;
