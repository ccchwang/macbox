import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Badge } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../reducers/auth'
import DrawerContainer from './AddCartAnimation/DrawerContainer'
import LoginSignUp from './LoginSignUp'
import Logout from './Logout'
import TransitionGroup from 'react-addons-transition-group'


export let NavBar;

export default connect(
  ({auth, cart, products}) => ({
      auth: auth,
      lineItems: cart.lineItems,
      categories: products.products.map(p => p.category)
  }),
  (dispatch) => ({
    logout: (e) => {
      e.preventDefault();
      dispatch(logout());
    }
  })
)(class MyNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {playAnimation: false}
    NavBar = this;
  }

  render () {
    const lineItems = this.props.lineItems;
    const quantity = lineItems.reduce((acc, currentItem) => acc + currentItem.quantity, 0)

    return (
      <div>
       <Navbar inverse collapseOnSelect fixedTop id="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">MACBOX <span id="brand-star">♦</span></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={2} title="SHOP" id="basic-nav-dropdown">
                  <LinkContainer to={`/shop/Macbook%20Cover`}>
                    <MenuItem eventKey={`2.1`}>Macbook Cover</MenuItem>
                  </LinkContainer>
                  <LinkContainer to={`/shop/Macbook%20Decal`}>
                    <MenuItem eventKey={`2.1`}>Macbook Decal</MenuItem>
                  </LinkContainer>
                  <LinkContainer to={`/shop/Keyboard%20Decal`}>
                    <MenuItem eventKey={`2.1`}>Keyboard Decal</MenuItem>
                  </LinkContainer>

            </NavDropdown>
          </Nav>

          <Nav>
            <LinkContainer to={`/wishlist`}>
            <NavItem>WISHLIST</NavItem>
            </LinkContainer>
          </Nav>

          {this.props.auth ? <Logout /> : <LoginSignUp />}

        <Nav pullRight>
          <LinkContainer to="/cart">
            <NavItem eventKey={2}>
              <img src="/img/cart-30-24.png" />
              {" "}
              {
              !lineItems.length ? null :
                <span>
                  <Badge id="nav-cart-count">{quantity}</Badge>
                </span>
              }
            </NavItem>
          </LinkContainer>
        </Nav>

        <TransitionGroup>
                { this.state.playAnimation && <DrawerContainer quantity={quantity} lineItems={lineItems} /> }
              </TransitionGroup>


        </Navbar.Collapse>
      </Navbar>
      <div id="nav-border" />
    </div>
    )
  }
});
