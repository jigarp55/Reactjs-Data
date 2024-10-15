import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: {},
};

const account = createSlice({
  name: "account",
  initialState,
  reducers: {
    AccountRequest: (state, action) => {
      state.isLoading = true;
    },

    AccountSuc: (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    },

    AccountError: (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    },
  },
});

export const { AccountRequest, AccountSuc, AccountError } =
account.actions;

export default account.reducer;