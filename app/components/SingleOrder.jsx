import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import LineItem from './LineItem'

export default connect(
  (state, ownProps) => {
    return {
      selectedOrder: state.orders.selectedOrder
    }
  }
)(class extends React.Component {


  render () {
    const order = this.props.selectedOrder;
    const locale = "en-us"
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    const orderDate = new Date(order.created_at)

    const lineItems = order.lineItems.map(item => <LineItem item={item}/>)
    /*
    const orders = this.props.orders.map(order => {
      console.log(+order.totalPrice.toFixed(2))
      const date = new Date(order.created_at)
      return (<Link to={`/orders/${order.id}`} key={order.id}>
        <Row>
          <Col md={4}>
            <h4>{date.toLocaleString(locale, options)}</h4>
          </Col>
          <Col md={4}>
            <h4>Order No. {order.id}</h4>
          </Col>
          <Col md={4}>
            <h4>${(order.totalPrice/100).toFixed(2)}</h4>
          </Col>
        </Row>
        </Link>
      )


    })*/


    return (
      <div className="pane-padding">
        <Row>
          <Col md={6}>
            <h4>Ordered Date: {orderDate.toLocaleString(locale, options)}</h4>
            <h2>Order No: {order.id}</h2>
          </Col>
          <Col md={6}>
            <h4>TOTAL: ${(order.totalPrice/100).toFixed(2)}</h4>
          </Col>
        </Row>

        {
          lineItems
        }




      </div>
    );
}
})




