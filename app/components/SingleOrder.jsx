import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'


export default connect(
  (state, ownProps) => {
    return {
      selectedOrder: state.orders.selectedOrder
    }
  }
)(class extends React.Component {


  render () {
    const order = this.props.selectedOrder;
    const shippingCost = order.shippingCost.toFixed(2);
    const locale = "en-us"
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    const orderDate = new Date(order.created_at)

    const lineItems = order.lineItems.map(item =>
      <div key={item.id}>
        <Row>
          <Col md={2}>
            <img className="img-responsive" src={item.product.imgUrl} />
          </Col>
          <Col md={6}>
            <Link to={`/products/${item.product_id}`}>
              {item.product.name}
              <br />
              Qty {item.quantity}
            </Link>
          </Col>
          <Col md={4} className="text-right">
          ${(item.orderedPrice/100).toFixed(2)}
          </Col>
        </Row>
        <hr />
      </div>
    )


    return (
      <div className="order-padding">
        <Row>
          <Col md={6}>
            <h4>DATE: {orderDate.toLocaleString(locale, options)}</h4>
            <h2>Order No: #{order.id}</h2>
          </Col>
          <Col md={6} className="text-right">
            <h4>TOTAL: ${order.totalPrice}</h4>
          </Col>
        </Row>
        <hr />

        { lineItems }

        <Row>
          <Col md={6} />
          <Col md={6}  className="text-right">
            Subtotal: ${order.totalPrice - shippingCost}
            <br />
            Shipping: ${shippingCost}
            <br />
            TOTAL: ${order.totalPrice}
          </Col>
        </Row>



      </div>
    );
}
})




