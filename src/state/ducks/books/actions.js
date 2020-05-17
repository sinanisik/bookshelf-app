import * as Actions from "./types";
import axios from "axios";
import { apiHost } from "../../../constants/constants";

export const addBook = (values, history) => {
  return (dispatch) => {
    axios
      .post(`${apiHost}/books`, values)
      .then((result) => {
        dispatch({ type: Actions.ADD_BOOK, payload: result.data });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getBooks = () => {
  return (dispatch) => {
    dispatch({ type: Actions.LOAD_BOOKS });
    axios
      .get(`${apiHost}/books`)
      .then((result) => {
        dispatch({ type: Actions.SET_BOOKS, payload: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setFilter = (filter) => {
  return (dispatch) => {
    dispatch({ type: Actions.SET_FILTER, payload: filter });
  };
};

export const searchBooks = (searchValues) => {
  return (dispatch) => {
    dispatch({ type: Actions.SEARCH_BOOKS, payload: searchValues });
  };
};

export const sortBooks = (sortTerm) => {
  return (dispatch) => {
    dispatch({ type: Actions.SORT_BOOKS, payload: sortTerm });
  };
};

export const updateBook = (id, values, history) => {
  return (dispatch) => {
    axios
      .put(`${apiHost}/books/${id}`, {
        ...values,
      })
      .then((result) => {
        dispatch({
          type: Actions.UPDATE_BOOK,
          payload: result.data,
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setViewOption = (view) => {
  return {
    type: Actions.SET_VIEW,
    payload: view,
  };
};

export const removeBook = (id, history) => {
  return (dispatch) => {
    axios.delete(`${apiHost}/books/${id}`).then(() => {
      dispatch({
        type: Actions.REMOVE_BOOK,
        payload: id,
      });
      history.push("/");
    });
  };
};
