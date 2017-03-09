import React from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'

export default class CartDropdown extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.from(el, 0.6, {height: 0, opacity: 0, ease:Back.easeOut, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, {y: 0, opacity: 1}, {y: -40, opacity: 0,  ease:Back.easeIn, onComplete: callback});
  }

  render () {

let rows = this.props.lineItems && this.props.lineItems.map(item => {

    return (
      <div key={item.id}>
        <Row className="show-grid">
          <Col xs={4} >
            <img className="img-responsive" src={item.product.imgUrl} />
          </Col>

          <Col xs={8}  >
           {item.product.name} <br /><br />
           ${item.product.formattedPrice} • Quantity {item.product.quantity}
          </Col>
          <hr />
        </Row>
        <hr />
      </div>
    )
  })




    return (
      <div ref={c => this.container = c} id="cart-dropdown">
        <Grid id="cart-dropdown-items">
          { rows }
        </Grid>
      </div>


    );
  }
}


