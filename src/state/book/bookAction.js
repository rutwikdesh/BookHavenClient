import getBooksService from "./bookService";
import { setBooks } from "..";

const getBookAction = async (dispatch) => {
  try {
    const books = await getBooksService();

    dispatch(
      setBooks({
        books: books.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export default getBookAction;
