import React from "react";
import { Nav, NavItem, NavbarText } from "reactstrap";
import { categories } from "../../constants";
import { StyledNavbarText } from "./FilterSortBarStyles";
import { connect } from "react-redux";
import { setFilter } from "../../state/ducks/books/actions";

const FilterSortBar = (props) => {
  return (
    <div>
      <Nav className="bg-white">
        <NavbarText>
          <strong>Categories:</strong>
        </NavbarText>
        <StyledNavbarText
          active={!props.activeFilter}
          onClick={() => {
            props.setFilter("");
          }}
        >
          All
        </StyledNavbarText>
        {categories.map((category) => {
          return (
            <StyledNavbarText
              active={props.activeFilter === category}
              onClick={() => {
                props.setFilter(category);
              }}
            >
              {category}
            </StyledNavbarText>
          );
        })}
      </Nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeFilter: state.books.filter,
  };
};
const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSortBar);
