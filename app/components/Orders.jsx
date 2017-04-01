import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'




export default connect(
  (state) => {
    return {
      orders: state.orders.orders
    }
  }
)(class extends React.Component {


  render () {
console.log(this.props.orders)
  return (
    <div className="pane-padding">
      <h1>Order History</h1>
    </div>
  );
  }
})




