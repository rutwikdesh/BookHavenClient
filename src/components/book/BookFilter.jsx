import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { getBooksByTitleAction } from "../../state/book/bookAction";
import { useDispatch } from "react-redux";

const BookFilter = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  return (
    <Box className="w-[20%] h-[500px]">
      <Paper className="w-full h-full">
        <Typography>Search Books</Typography>
        <Box>
          <TextField
            placeholder="Enter Book Title"
            id="book-title"
            label="Book Title"
            variant="outlined"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </Box>
        <Button
          onClick={() => getBooksByTitleAction(dispatch, searchText)}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </Paper>
    </Box>
  );
};

export default BookFilter;
