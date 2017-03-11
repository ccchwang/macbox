import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'

export default class Cartwidget extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.from(el, 0.6, {height: 0, opacity: 0, ease:Back.easeOut, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, {y: 0,opacity: 1}, {y: -40, opacity: 0, ease:Back.easeIn, onComplete: callback});
  }

  render () {
  let total = 0;

  let rows = this.props.lineItems && this.props.lineItems.map(item => {
    let price = (item.product.formattedPrice * item.quantity).toFixed(2)
    total += +price

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
      <div ref={c => this.container = c} id="cart-widget">
        <div>
        <Grid id="cart-widget-items">
          { rows }
        </Grid>
        <Col xs={12} id="cart-widget-checkout">
          <Button className="emphasis-btn widget-btn">CHECK OUT  |  ${total.toFixed(2)}</Button>
        </Col>
        </div>
      </div>



    );
  }
}


