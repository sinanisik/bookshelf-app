import * as Actions from "./types";

const initialState = {
  data: [],
  loading: false,
  filter: "",
  searchTerm: "",
  searchType: "",
  sortTerm: "",
  view: "",
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_BOOK:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case Actions.SET_BOOKS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case Actions.LOAD_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case Actions.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case Actions.UPDATE_BOOK:
      return {
        ...state,
        data: state.data.map((book) => {
          if (book.id === action.payload.id) {
            return action.payload;
          } else {
            return book;
          }
        }),
      };
    case Actions.SEARCH_BOOKS:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        searchType: action.payload.searchType,
      };
    case Actions.SORT_BOOKS:
      return {
        ...state,
        sortTerm: action.payload,
      };
    case Actions.SET_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};

export const selectFilteredBooks = (state) => {
  let filteredBooks = [];
  if (state.filter) {
    filteredBooks = state.data.filter((book) => {
      return book.category === state.filter;
    });
  } else {
    return state.data;
  }
  return filteredBooks;
};

export default booksReducer;
