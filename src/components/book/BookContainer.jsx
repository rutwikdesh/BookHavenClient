import { Box } from "@mui/material";
import React from "react";
import BookFilter from "./BookFilter";

const BookContainer = () => {
  return (
    <Box className="flex justify-center">
      <BookFilter />
      <Box className="w-[80%]">Display all books</Box>
    </Box>
  );
};

export default BookContainer;
