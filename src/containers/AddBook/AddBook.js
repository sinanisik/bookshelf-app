import React, { useState, useEffect } from "react";
import { AddBookForm } from "../../components";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { apiHost } from "../../constants/constants";

const AddBook = (props) => {
  const [book, setBook] = useState("");

  useEffect(() => {
    const id = props.routerProps.match.params.id;
    if (id) {
      axios.get(`${apiHost}/books/${id}`).then((result) => {
        setBook(result.data);
      });
    }
  }, []);

  const isEdit = props.componentProps.isEdit;
  const id = props.routerProps.match.params.id;
  return (
    <Container>
      <Row>
        <Col xs={12}>
          {isEdit ? <h3>Edit book</h3> : <h3>Add a new book</h3>}
        </Col>
        <Col xs={12}>
          <AddBookForm isEdit={isEdit} book={book} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddBook;
