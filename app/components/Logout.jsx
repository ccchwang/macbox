import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, NavItem } from 'react-bootstrap'

export default function() {
  return (
      <Nav pullRight>
        <NavItem eventKey={2} onClick={this.props.logout}>LOGOUT</NavItem>
      </Nav>
    );
}
