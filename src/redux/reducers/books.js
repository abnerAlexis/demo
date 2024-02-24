import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "books",
   initialState: {
    list: [],
    filter: ""
   },
   reducers: {
    setBooks: (state, action) => {
        state.list = action.payload;
    },
    setFilter: (state, action) => {
        state.filter = action.payload;
    }
   }
});

export const { setBooks, setFilter } = bookSlice.actions;
export default bookSlice.reducer;