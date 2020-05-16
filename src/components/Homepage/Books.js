import React from "react";
import Book from "./Book";
import { Row, Col } from "reactstrap";

const Books = (props) => {
  return (
    <Row>
      {props.items.map((item) => {
        return (
          <Col cs={3}>
            <Book {...item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Books;
