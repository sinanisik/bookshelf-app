import styled from "styled-components";
import { Card, CardText } from "reactstrap";

export const StyledBookCard = styled(Card)`
  height: 500px;
  border-radius: 8px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  .card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 250px;
  }
`;

export const StyledCardText = styled(CardText)`
  strong {
    color: rgb(255, 7, 110);
  }
`;
