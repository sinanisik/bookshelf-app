import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { StyledBookCard, StyledCardText } from "./BookStyles";
import { Link } from "react-router-dom";

const Book = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  const { imageUrl, rating, title, id, review } = props;
  return (
    <StyledBookCard>
      <CardImg top width="100%" src={imageUrl} alt={title} />
      <CardBody>
        <StyledCardText>
          <strong>{`${rating} / 5`}</strong>
        </StyledCardText>
        <CardText>{title}</CardText>
        <Button id={`popover${id}`} type="button">
          Review
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target={`popover${id}`}
          toggle={toggle}
        >
          <PopoverBody>
            {review ? review : "No review for this book"}
          </PopoverBody>
        </Popover>
        <br />
        <CardLink>Details</CardLink>
        <CardLink>
          <Link to={`/edit-book/${id}`}>Edit Book</Link>
        </CardLink>
        <br />
        {props.link && (
          <CardLink>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Learn More!
            </a>
          </CardLink>
        )}
      </CardBody>
    </StyledBookCard>
  );
};

export default Book;
