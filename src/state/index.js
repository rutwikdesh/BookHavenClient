import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Wall",
      description: "Temp Desc",
      releaseYear: 2020,
    },
    {
      id: 2,
      title: "The Great Wall gg",
      description: "Temp Desc",
      releaseYear: 2020,
    },
  ],
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload.books;
    },
  },
});

export const { setBooks } = stateSlice.actions;
export default stateSlice.reducer;
