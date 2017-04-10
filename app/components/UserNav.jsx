import React from 'react'
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function({ handleLogout, userName }) {
  return (
      <Nav pullRight>
        <NavDropdown eventKey={2} title={userName} id="basic-nav-dropdown">
            <LinkContainer to="/orders">
              <MenuItem eventKey={`2.1`}>Order History</MenuItem>
            </LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={2} onClick={handleLogout}>Logout</MenuItem>
          </NavDropdown>

      </Nav>
    );
}

