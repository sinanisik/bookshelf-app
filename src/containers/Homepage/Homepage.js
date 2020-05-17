import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Books, FilterSortBar, BookList } from "../../components";
import { getBooks } from "../../state/ducks/books/actions";
import { Container } from "reactstrap";
import { filteredBooksSelector } from "../../state/ducks/books";

const Homepage = (props) => {
  useEffect(() => {
    props.getBooks();
  }, []);

  if (props.loading) {
    return <h1>BOOKS ARE LOADING...</h1>;
  }

  // FILTERED (or SORTED) books coming from selectFilteredBooks in the reducer
  let filteredBooks = props.filteredBooks;

  let books = "";
  if (filteredBooks.length < 1) {
    books = <h2>NO BOOKS HERE</h2>;
  } else {
    books = <Books items={filteredBooks} view={props.view} />;
  }

  // Read Books Route
  if (props.componentProps.isReadBooks) {
    let readBooks = filteredBooks.filter((book) => {
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
  return {
    books: state.books.data,
    loading: state.books.loading,
    view: state.books.view,
    filteredBooks: filteredBooksSelector(state.books),
  };
};

const mapDispatchToProps = {
  getBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
