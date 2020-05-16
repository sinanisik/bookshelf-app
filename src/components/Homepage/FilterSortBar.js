import React, { useState, useEffect } from "react";
import {
  Nav,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";

import { connect } from "react-redux";
import {
  StyledNavbarText,
  StyledInputGroup,
  StyledButtonDropdown,
  StyledContainer,
} from "./FilterSortBarStyles";
import { categories } from "../../constants/constants";
import {
  setFilter,
  searchBooks,
  sortBooks,
  setViewOption,
} from "../../state/ducks/books/actions";
import classes from "./FilterSortBarStyles.module.css";

const FilterSortBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const [dropdownOpen2, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen2);

  const views = {
    list: "fas fa-list fa-2x",
    grid: "fas fa-th-large fa-2x",
  };

  let [selectedView, setSelectedView] = useState(views["list"]);

  const [searchValues, setSearchValues] = useState({
    searchType: "title",
    searchTerm: "",
  });

  const [view, setView] = useState("list");

  useEffect(() => {
    props.search(searchValues);
  }, [searchValues]);

  useEffect(() => {
    props.setViewOption(view);
  }, [view]);

  // Show the opposite icon of the current view
  useEffect(() => {
    setView(selectedView === "fas fa-list fa-2x" ? "Grid" : "List");
  }, [selectedView]);

  return (
    <div>
      <Container fluid className="bg-white" style={{ padding: "15px" }}>
        <Row>
          <Col xs={6}>
            <Nav className="bg-white">
              <StyledNavbarText>
                <strong>Categories:</strong>
              </StyledNavbarText>
              <StyledNavbarText
                active={!props.activeFilter}
                onClick={() => {
                  props.changeFilter("");
                }}
              >
                All
              </StyledNavbarText>
              {categories.map((category) => {
                return (
                  <StyledNavbarText
                    active={props.activeFilter === category}
                    onClick={() => {
                      props.changeFilter(category);
                    }}
                  >
                    {category}
                  </StyledNavbarText>
                );
              })}
            </Nav>
          </Col>

          <Col xs={6}>
            <StyledInputGroup>
              <InputGroupButtonDropdown
                addonType="append"
                isOpen={dropdownOpen}
                toggle={toggleDropDown}
              >
                <DropdownToggle caret>
                  Search by {searchValues.searchType}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    value="title"
                    onClick={(e) => {
                      setSearchValues({
                        ...searchValues,
                        searchType: e.target.value,
                      });
                    }}
                  >
                    Title
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    value="author"
                    onClick={(e) => {
                      setSearchValues({
                        ...searchValues,
                        searchType: e.target.value,
                      });
                    }}
                  >
                    Author
                  </DropdownItem>
                </DropdownMenu>
              </InputGroupButtonDropdown>
              <Input
                onChange={(e) => {
                  setSearchValues({
                    ...searchValues,
                    searchTerm: e.target.value,
                  });
                }}
              />
            </StyledInputGroup>

            <StyledInputGroup className="sort">
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={(e) => {
                  props.sort(e.target.value);
                }}
              >
                <option value="">No Sort</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="ratingA">Rating (Ascending)</option>
                <option value="ratingD">Rating (Descending)</option>
              </Input>
            </StyledInputGroup>
            <a
              className={classes.view}
              onClick={() => {
                setSelectedView(
                  selectedView === views["grid"] ? views["list"] : views["grid"]
                );
              }}
            >
              <i className={selectedView}></i>
            </a>

            {/* {DrowDown for changing view} */}
            {/* <StyledButtonDropdown isOpen={dropdownOpen2} toggle={toggle}>
              <DropdownToggle caret size="sm">
                {view} View
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  value="Grid"
                  onClick={(e) => {
                    setView(e.target.value);
                  }}
                >
                  Grid
                </DropdownItem>
                <DropdownItem
                  value="List"
                  onClick={(e) => {
                    setView(e.target.value);
                  }}
                >
                  List
                </DropdownItem>
              </DropdownMenu>
            </StyledButtonDropdown> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeFilter: state.books.filter,
  };
};

const mapDispatchToProps = {
  changeFilter: setFilter,
  search: searchBooks,
  sort: sortBooks,
  setViewOption,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSortBar);
