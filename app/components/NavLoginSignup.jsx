import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, NavItem } from 'react-bootstrap'

export default function() {
  return (
    <Nav pullRight>
      <LinkContainer to="/login">
        <NavItem eventKey={2}>LOGIN</NavItem>
      </LinkContainer>
      <LinkContainer to="/signup">
        <NavItem eventKey={2}>SIGN UP</NavItem>
      </LinkContainer>
    </Nav>
  )
}
