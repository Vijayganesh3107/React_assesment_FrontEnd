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

const NavBarwithLogout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <Link  className="navbar-brand">Invoice Mnagaement System</Link>
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
              <Link to={routes.home} className="nav-link">Logout</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarwithLogout;