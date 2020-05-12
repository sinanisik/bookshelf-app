import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Books, FilterSortBar } from "../../components";
import { getBooks } from "../../state/ducks/books/actions";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    if (this.props.loading) {
      return <h3>LOADING...</h3>;
    }
    console.log(this.props.filter);
    return (
      <div>
        <FilterSortBar />
        <Container>
          <Books items={this.props.books} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.data,
    loading: state.books.loading,
    filter: state.books.filter,
  };
};

const mapDispatchToPorps = {
  getBooks,
};

export default connect(mapStateToProps, mapDispatchToPorps)(Homepage);
