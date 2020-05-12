import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardLink,
} from "reactstrap";

import { StyledBookCard } from "./BookStyles";

const Book = (props) => {
  const { imageUrl, rating, title } = props;
  return (
    <StyledBookCard>
      <CardImg top width="100%" src={imageUrl} alt={title} />
      <CardBody>
        <CardText>
          <strong>{`${rating} / 5`}</strong>
        </CardText>
        <CardTitle>{title}</CardTitle>
        <CardLink>Edit Book</CardLink>
      </CardBody>
    </StyledBookCard>
  );
};

export default Book;
