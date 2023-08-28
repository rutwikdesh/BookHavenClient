import { getBooksService, getBooksByTitleService } from "./bookService";
import { setBooks, setIsError, setIsFulfilled, setIsPending } from "..";

const getBooksAction = async (dispatch) => {
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

const getBooksByTitleAction = async (dispatch, title) => {
  try {
    if (title !== "") {
      const books = await getBooksByTitleService(title);
      dispatch(
        setBooks({
          books: books.data,
        })
      );
    } else {
      getBooksAction(dispatch);
    }
  } catch (error) {
    console.log(error);
  }
};

export { getBooksAction, getBooksByTitleAction };
