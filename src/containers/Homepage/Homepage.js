import React from "react";
import { connect } from "react-redux";
import { Books, FilterSortBar, BookList } from "../../components";
import { getBooks } from "../../state/ducks/books/actions";
import { Container } from "reactstrap";
import { selectFilteredBooks } from "../../state/ducks/books/reducers";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    if (this.props.loading) {
      return <h1>BOOKS ARE LOADING...</h1>;
    }

    let filteredBooks = [];
    filteredBooks = this.props.filteredBooks;

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
    if (this.props.searchTerm) {
      if (this.props.searchType === "title") {
        filteredBooks = filteredBooks.filter((book) => {
          return (
            book.title
              .toLowerCase()
              .indexOf(this.props.searchTerm.toLowerCase()) > -1
          );
        });
      } else {
        filteredBooks = filteredBooks.filter((book) => {
          return (
            book.author
              .toLowerCase()
              .indexOf(this.props.searchTerm.toLowerCase()) > -1
          );
        });
      }
    }

    // Sorting
    let sortedBooks = [];
    if (this.props.sortTerm) {
      sortedBooks = [...filteredBooks].sort((book1, book2) => {
        if (this.props.sortTerm === "ratingD") {
          return parseInt(book2["rating"]) - parseInt(book1["rating"]);
        } else if (this.props.sortTerm === "ratingA") {
          return parseInt(book1["rating"]) - parseInt(book2["rating"]);
        } else if (this.props.sortTerm === "alphabetical") {
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
      books = <Books items={sortedBooks} view={this.props.view} />;
    }

    // Read Books Route
    if (this.props.componentProps.isReadBooks) {
      let readBooks = sortedBooks.filter((book) => {
        return book.status === "Read";
      });
      books = <Books items={readBooks} view={this.props.view} />;
    }

    return (
      <div>
        <FilterSortBar />
        <Container>
          <div className="books-holder">{books}</div>
        </Container>
      </div>
    );
  }
}

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
