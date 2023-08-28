import { Box, Paper, Avatar, Typography } from "@mui/material";
import React from "react";

const BookListItem = ({ book }) => {
  return (
    <Box mb={2}>
      <Paper elevation={2} className="p-[10px] flex w-[80%] cursor-pointer">
        <Box className="w-[120px] h-[130px] bg-gray-300 mr-2">{book.title}</Box>
        <Box>
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="h6">{book.description}</Typography>
          <Typography variant="h6">{book.releaseYear}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default BookListItem;
