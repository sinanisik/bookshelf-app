import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import navigation from "../../../constants/navigation";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          BookShelf App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navigation.left.map((nav) => {
              return (
                <NavItem>
                  <NavLink tag={Link} to={nav.to}>
                    {nav.title}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
          {navigation.right.map((nav) => {
            return (
              <NavbarText>
                <NavLink tag={Link} to={nav.to}>
                  {nav.title}
                </NavLink>
              </NavbarText>
            );
          })}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
