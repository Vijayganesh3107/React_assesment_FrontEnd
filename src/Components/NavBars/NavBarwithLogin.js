import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';
import {Link} from "react-router-dom"
import routes from "../../routes"

const NavBarwithLogin = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to={routes.home} className="navbar-brand">Invoice Mnagaement System</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
          </Nav>
              <Link to={routes.login} className="nav-link">Login</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarwithLogin;