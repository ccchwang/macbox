import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ item, hrStyle }) {

    return (
      <div>
        <Row className="drawer-item">
          <Col xs={5} >
            <img className="img-responsive" src={item.product.imgUrl} />
          </Col>

          <Col xs={7}  style={{paddingLeft: '5px'}}>
          <Link to={`/products/${item.product_id}`}>
            {item.product.name}
          </Link>
          <br /><br />
          ${item.product.formattedPrice} • Qty {item.quantity}
          </Col>
        </Row>
        <hr style={hrStyle} />
      </div>
    )
}
