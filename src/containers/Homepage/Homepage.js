import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Books, FilterSortBar, BookList } from "../../components";
import { getBooks } from "../../state/ducks/books/actions";
import { Container } from "reactstrap";
import { selectFilteredBooks } from "../../state/ducks/books/reducers";

const Homepage = (props) => {
  useEffect(() => {
    props.getBooks();
  }, []);

  if (props.loading) {
    return <h1>BOOKS ARE LOADING...</h1>;
  }

  let filteredBooks = [];
  filteredBooks = props.filteredBooks;

  // Categorye gore filter
  // const allBooks = this.props.books;
  // if (this.props.filter) {
  //   filteredBooks = allBooks.filter((book) => {
  //     return book.category === this.props.filter;
  //   });
  // } else {
  //   filteredBooks = allBooks;
  // }

  /// Searchterm filter
  if (props.searchTerm) {
    if (props.searchType === "title") {
      filteredBooks = filteredBooks.filter((book) => {
        return (
          book.title.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1
        );
      });
    } else {
      filteredBooks = filteredBooks.filter((book) => {
        return (
          book.author.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1
        );
      });
    }
  }

  // Sorting
  let sortedBooks = [];
  if (props.sortTerm) {
    sortedBooks = [...filteredBooks].sort((book1, book2) => {
      if (props.sortTerm === "ratingD") {
        return parseInt(book2["rating"]) - parseInt(book1["rating"]);
      } else if (props.sortTerm === "ratingA") {
        return parseInt(book1["rating"]) - parseInt(book2["rating"]);
      } else if (props.sortTerm === "alphabetical") {
        return book1["title"].split(" ")[0] > book2["title"].split(" ")[0]
          ? 1
          : -1;
      }
    });
  } else {
    sortedBooks = filteredBooks;
  }

  let books = "";
  if (sortedBooks.length < 1) {
    books = <h2>NO BOOKS HERE</h2>;
  } else {
    books = <Books items={sortedBooks} view={props.view} />;
  }

  // Read Books Route
  if (props.componentProps.isReadBooks) {
    let readBooks = sortedBooks.filter((book) => {
      return book.status === "Read";
    });
    books = <Books items={readBooks} view={props.view} />;
  }

  return (
    <div>
      <FilterSortBar />
      <Container>
        <div className="books-holder">{books}</div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.books);
  return {
    books: state.books.data,
    loading: state.books.loading,
    filter: state.books.filter,
    searchTerm: state.books.searchTerm,
    searchType: state.books.searchType,
    sortTerm: state.books.sortTerm,
    view: state.books.view,
    filteredBooks: selectFilteredBooks(state.books),
  };
};

const mapDispatchToProps = {
  getBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
