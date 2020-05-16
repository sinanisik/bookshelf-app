import React, { Component } from "react";
import { connect } from "react-redux";
import { Books, FilterSortBar } from "../../components";
import { getBooks } from "../../state/ducks/books/actions";
import { Container } from "reactstrap";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    if (this.props.loading) {
      return <h1>LOADING...</h1>;
    }

    const allBooks = this.props.books.map((book) => {
      return <div>{book.title}</div>;
    });

    return (
      <div>
        <FilterSortBar />
        <Container>
          <div>
            <Books items={this.props.books} />
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.data,
    loading: state.books.loading,
  };
};

const mapDispatchToProps = {
  getBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
