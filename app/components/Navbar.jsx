import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Badge } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../reducers/auth'
import CartDropdown from './CartDropdown'
import TransitionGroup from 'react-addons-transition-group'
import { animationOn, animationOff } from '../toggleAnimation'


class MyNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {playAnimation: false}
    this.renderLoginSignup = this.renderLoginSignup.bind(this)
    this.renderLogout = this.renderLogout.bind(this)
    this.animationOn = animationOn.bind(this);
    this.animationOff = animationOff.bind(this);
  }

  render () {

    return (
      <div>
      <div id="nav-promotions">FREE SHIPPING ON ALL ORDERS $50+</div>
       <Navbar inverse collapseOnSelect fixedTop id="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">MACBOX <span id="brand-star">♦</span></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={2} title="SHOP BY CATEGORY" id="basic-nav-dropdown">
              {
                this.props.categories.map((c, i) =>
                  <LinkContainer to={`/shop/${c}`} key={i}>
                    <MenuItem eventKey={`2.${i}`}>{c}</MenuItem>
                  </LinkContainer>)
              }
            </NavDropdown>
          </Nav>

          <Nav>
            <NavItem>SUBSCRIBE</NavItem>
          </Nav>

        {this.props.auth ? this.renderLogout() : this.renderLoginSignup()}

        <Nav pullRight id="cart-widget">
          <LinkContainer to="/cart">
            <NavItem eventKey={2}>
              <img src="/img/cart-30-24.png" />
              {" "}
              {
              !this.props.lineItems.length ? null :
                <span>
                  <Badge id="nav-cart-count">{this.props.lineItems.reduce((acc, currentItem) => acc + currentItem.quantity, 0)}</Badge>
                </span>
              }

              <TransitionGroup>
                { this.props.lineItems.length && <CartDropdown /> }
              </TransitionGroup>

          </NavItem>
          </LinkContainer>
        </Nav>


        </Navbar.Collapse>
      </Navbar>
      <div id="nav-border" />
    </div>
    )
  }


  renderLoginSignup() {
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

  renderLogout() {
    return (
      <Nav pullRight>
        <NavItem eventKey={2} onClick={this.props.logout}>LOGOUT</NavItem>
      </Nav>
    );
  }
}

const mapState = ({auth, cart, products}) => ({
  auth: auth,
  lineItems: cart.lineItems,
  categories: products.products.map(p => p.category),
  cartAdded: false
});

const mapDispatch = dispatch => ({
  logout: (e) => {
    e.preventDefault();
    dispatch(logout());
    // browserHistory.push('/'); // removed to demo logout instant re-render
  }
});

export default connect(mapState, mapDispatch)(MyNavbar);
