import getBooksService from "./bookService";
import { setBooks, setIsError, setIsFulfilled, setIsPending } from "..";

const getBookAction = async (dispatch) => {
  try {
    dispatch(setIsPending());
    const books = await getBooksService();

    dispatch(
      setBooks({
        books: books.data,
      })
    );
    dispatch(setIsFulfilled());
  } catch (error) {
    dispatch(setIsError());
    console.log(error.message);
  }
};

export default getBookAction;
