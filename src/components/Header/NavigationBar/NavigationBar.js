import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { StyledNavItem, StyledNavbarText } from "./HeaderStyles";
import navigation from "../../../constants/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand tag={Link} to="/">
          BookShelf App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navigation.left.map((nav) => {
              return (
                <StyledNavItem>
                  <NavLink tag={Link} to={nav.to}>
                    {nav.title}
                  </NavLink>
                </StyledNavItem>
              );
            })}
          </Nav>
          {navigation.right.map((nav) => {
            return (
              <StyledNavbarText>
                <NavLink tag={Link} to={nav.to}>
                  {nav.title}
                </NavLink>
              </StyledNavbarText>
            );
          })}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
