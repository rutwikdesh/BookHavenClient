import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const BookListItem = ({ book }) => {
  return (
    <Box mb={2}>
      <Paper elevation={2} className="p-[10px] flex w-[80%] cursor-pointer">
        <Box className="w-[18%] h-[130px] bg-gray-300 mr-2">{book.title}</Box>
        <Box className="w-[82%]">
          <Typography variant="h5">{book.title}</Typography>
          {book.description.length > 150 ? (
            <Typography>{book.description.substring(0, 150)}...</Typography>
          ) : (
            <Typography>{book.description}</Typography>
          )}
          <Typography>{book.releaseYear}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default BookListItem;
