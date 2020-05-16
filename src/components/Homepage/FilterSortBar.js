import React from "react";
import {
  Nav,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { StyledNavbarText } from "./FilterSortBarStyles";
import { categories } from "../../constants/constants";

const FilterSortBar = (props) => {
  return (
    <div>
      <Container fluid className="bg-white" style={{ padding: "15px" }}>
        <Row>
          <Col xs={6}>
            <Nav className="bg-white">
              <StyledNavbarText>
                <strong>Categories:</strong>
              </StyledNavbarText>
              {categories.map((category) => {
                return <StyledNavbarText>{category}</StyledNavbarText>;
              })}
            </Nav>
          </Col>
          <Col xs={6}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Search by name</InputGroupText>
              </InputGroupAddon>
              <Input
                onChange={(e) => {
                  //e.target.value
                  props.search(e.target.value);
                }}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FilterSortBar;
