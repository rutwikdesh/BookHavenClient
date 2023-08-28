import axios from "axios";
import baseurl from "../../config";

const getBooksService = () =>
  axios.get(`${baseurl}/api/v1/books`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

const getBooksByTitleService = (title) =>
  axios.get(`${baseurl}/api/v1/books/${title}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

export { getBooksService, getBooksByTitleService };
