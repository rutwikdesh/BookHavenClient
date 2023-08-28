import React from "react";
import { Box } from "@mui/material";

const BookList = ({ books }) => {
  return (
    <Box>
      {books.map((book) => (
        <Box key={book.id}>{book.description}</Box>
      ))}
      {books}
    </Box>
  );
};

export default BookList;
