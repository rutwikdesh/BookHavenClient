import React from "react";
import { Alert, AlertTitle, Box } from "@mui/material";
import BookListItem from "./BookListItem";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

const BookList = ({ books }) => {
  const { isPending, isFulfilled, isErrored } = useSelector(
    (state) => state.promise
  );
  return (
    <Box className="ml-4 mr-5">
      {isPending && (
        <Skeleton
          variant="rect"
          animation="pulse"
          width="100%"
          height="130px"
        />
      )}
      {isFulfilled &&
        books.map((book) => <BookListItem book={book} key={book.id} />)}
      {isErrored && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error Loading books, please <strong>check your connection</strong>
        </Alert>
      )}
      {isErrored}
    </Box>
  );
};

export default BookList;
