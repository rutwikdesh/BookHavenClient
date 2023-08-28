import React from "react";
import { Box } from "@mui/material";
import BookListItem from "./BookListItem";
import { useSelector } from "react-redux";

const BookList = ({ books }) => {
  const { isPending, isFulfilled, isErrored } = useSelector(
    (state) => state.promise
  );
  return (
    <Box className="ml-4">
      {isPending && <div>Loading...</div>}
      {isFulfilled &&
        books.map((book) => <BookListItem book={book} key={book.id} />)}
      {isErrored && (
        <div>Error Loading books, please check your connection</div>
      )}
      {isErrored}
    </Box>
  );
};

export default BookList;
