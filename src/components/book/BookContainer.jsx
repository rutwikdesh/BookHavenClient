import { Box } from "@mui/material";
import React, { useEffect } from "react";
import BookFilter from "./BookFilter";
import getBookAction from "../../state/book/bookAction";
import { useDispatch, useSelector } from "react-redux";
import BookList from "./BookList";

const BookContainer = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getBookAction(dispatch);
  // }, [dispatch]);

  const books = useSelector((state) => state.books);

  return (
    <Box className="flex justify-center">
      <BookFilter />
      <Box className="w-[80%]">
        <BookList books={books} />
      </Box>
    </Box>
  );
};

export default BookContainer;
