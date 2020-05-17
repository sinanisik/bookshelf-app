export const filteredBooksSelector = (state) => {
  let filteredBooks = [];

  // Category filter
  if (state.filter) {
    filteredBooks = state.data.filter((book) => {
      return book.category === state.filter;
    });
  } else {
    filteredBooks = state.data;
  }

  // Search term filter
  if (state.searchTerm) {
    if (state.searchType === "title") {
      filteredBooks = filteredBooks.filter((book) => {
        // Search by title
        return (
          book.title.toLowerCase().indexOf(state.searchTerm.toLowerCase()) > -1
        );
      });
    } else {
      filteredBooks = filteredBooks.filter((book) => {
        // Search by author
        return (
          book.author.toLowerCase().indexOf(state.searchTerm.toLowerCase()) > -1
        );
      });
    }
  }

  // Sorting
  let sortedBooks = [];
  if (state.sortTerm) {
    sortedBooks = [...filteredBooks].sort((book1, book2) => {
      if (state.sortTerm === "ratingD") {
        // Descending order
        return parseInt(book2["rating"]) - parseInt(book1["rating"]);
      } else if (state.sortTerm === "ratingA") {
        // Ascending order
        return parseInt(book1["rating"]) - parseInt(book2["rating"]);
      } else if (state.sortTerm === "alphabetical") {
        // Alphabetical
        return book1["title"].split(" ")[0] > book2["title"].split(" ")[0]
          ? 1
          : -1;
      }
    });
  } else {
    sortedBooks = filteredBooks;
  }

  return sortedBooks;
};
