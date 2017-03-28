import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'


export default function({ handleLogout }) {
  return (
      <Nav pullRight>
        <NavItem eventKey={2} onClick={handleLogout}>LOGOUT</NavItem>
      </Nav>
    );
}
