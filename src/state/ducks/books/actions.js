import * as Actions from "./types";
import axios from "axios";
import { apiHost } from "../../../constants";

const addBook = (values, history) => {
  return (dispatch) => {
    axios
      .post(`${apiHost}/books`, values)
      .then((result) => {
        dispatch({
          type: Actions.ADD_BOOK,
          payload: result.data,
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getBooks = () => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOAD_BOOKS,
    });
    axios.get(`${apiHost}/books`).then((result) => {
      dispatch({
        type: Actions.SET_BOOKS,
        payload: result.data,
      });
    });
  };
};

export const setFilter = (filter) => {
  return (dispatch) => {
    dispatch({
      type: Actions.SET_FILTER,
      payload: filter,
    });
  };
};

export { addBook, getBooks };
