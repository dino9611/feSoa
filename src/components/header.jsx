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
import { useSelector, useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.Auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const Logout = () => {
    localStorage.removeItem("SOA");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <Navbar color="light" light expand="md" className="px-5">
        <NavbarBrand href="/">VoucherKu</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
        <NavbarText className="mx-3">{dataUser.email}</NavbarText>
        <button className="btn btn-primary" onClick={Logout}>
          Logout
        </button>
      </Navbar>
    </div>
  );
};

export default Header;
