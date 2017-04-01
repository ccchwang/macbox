import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'


export default connect(
  (state) => {
    return {
      orders: state.orders.orders
    }
  }
)(class extends React.Component {


  render () {
    const locale = "en-us"
    const options = {year: 'numeric', month: 'long', day: 'numeric'}

    const orders = this.props.orders.map(order => {
      const date = new Date(order.created_at)

      return (<Link to={`/order/${order.id}`} key={order.id}>
        <Row>
          <Col md={4}>
            <h4>{date.toLocaleString(locale, options)}</h4>
          </Col>
          <Col md={4}>
            <h4>Order No. {order.id}</h4>
          </Col>
          <Col md={4}>
            <h4>${order.totalPrice}</h4>
          </Col>
        </Row>
        </Link>
      )
    })

    return (
      <div className="pane-padding">
        <h1>Order History</h1>
        {
          orders
        }


      </div>
    );
}
})




