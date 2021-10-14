import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

export default function Header() {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          GIT APP
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto">
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null);
                }}
                className="text-white"
              >
                Log Out
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  Sign In
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
