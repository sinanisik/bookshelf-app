import styled from "styled-components";
import { NavbarText, InputGroup, ButtonDropdown, Container } from "reactstrap";

export const StyledNavbarText = styled(NavbarText)`
  margin-left: 15px;
  color: ${(props) => (props.active ? "#FF8247" : "#035491")};
  cursor: pointer;
`;

export const StyledInputGroup = styled(InputGroup)`
  display: inline-flex;
  width: 60%;

  &.sort {
    width: 30%;
    align-self: flex-end;
  }
`;

export const StyledButtonDropdown = styled(ButtonDropdown)`
  width: 10%;
`;
