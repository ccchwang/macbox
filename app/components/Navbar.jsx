import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Badge } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../reducers/auth'
import CartDropdown from './CartDropdown'
import LoginSignUp from './LoginSignUp'
import Logout from './Logout'
import TransitionGroup from 'react-addons-transition-group'
// import { toggleAnimation } from '../toggleAnimation'


const mapState = ({auth, cart, products}) => ({
  auth: auth,
  lineItems: cart.lineItems,
  categories: products.products.map(p => p.category)
});

const mapDispatch = dispatch => ({
  logout: (e) => {
    e.preventDefault();
    dispatch(logout());
    // browserHistory.push('/'); // removed to demo logout instant re-render
  }
});

export let NavBar;

export default connect(mapState, mapDispatch)(class MyNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {playAnimation: false}
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAnimation () {
    console.log('hi')
    this.setState({playAnimation: !this.state.playAnimation})
    setTimeout(() => this.setState({playAnimation: !this.state.playAnimation}), 2000)
  }



  render () {
    NavBar = this;
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

          {this.props.auth ? <Logout /> : <LoginSignUp />}

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
                { this.state.playAnimation && <CartDropdown /> }
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
});
