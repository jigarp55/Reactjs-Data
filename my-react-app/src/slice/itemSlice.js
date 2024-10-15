import { createSlice } from '@reduxjs/toolkit'
import itemList from '../ItemList';

const initialState = {
    items: [],
}

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state,action) =>{
        state.items.push(action.payload);
    },
    updateItem: (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Update existing item
        }
      },
      deleteItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
      setItems: (state, action) => {
        state.items = action.payload; // Set initial items (for reading)
      },
    },
  });
  
  export const { addItem, updateItem, deleteItem, setItems } = itemSlice.actions;
  export default itemSlice.reducer;