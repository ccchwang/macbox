import React from 'react';
import { Col } from 'react-bootstrap';


export default function({ subtotal, shipping, total, margin }) {
  return (
    <div>
    <Col xs={6} md={6} className="text-right">
      <span className="bold-text" style={{marginBottom: margin}}>Subtotal:</span>
      <br />
      <span className="bold-text" style={{marginBottom: margin}}>Shipping:</span>
      <br />
      <span className="bold-text" style={{marginBottom: margin}}>Total:</span>
    </Col>
    <Col xs={6} md={6} className="text-right">
      <span className="bold-text" style={{marginBottom: margin}}>${subtotal.toFixed(2)}</span>
      <br />
      <span className="bold-text" style={{marginBottom: margin}}>${shipping.toFixed(2)}</span>
      <br />
      <span className="bold-text" style={{marginBottom: margin}}>${total.toFixed(2)}</span>
    </Col>
    </div>
  )
}
