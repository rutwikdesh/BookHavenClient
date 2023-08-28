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
  promise: {
    isPending: false,
    isFulfilled: false,
    isErrored: false,
  },
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload.books;
    },
    setIsPending: (state) => {
      state.promise = { isPending: true, isFulfilled: false, isErrored: false };
    },
    setIsError: (state) => {
      state.promise = { isPending: false, isFulfilled: false, isErrored: true };
    },
    setIsFulfilled: (state) => {
      state.promise = { isPending: false, isFulfilled: true, isErrored: false };
    },
  },
});

export const { setBooks, setIsPending, setIsError, setIsFulfilled } =
  stateSlice.actions;
export default stateSlice.reducer;
