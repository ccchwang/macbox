import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ md, product, floatRight }) {

  const className = floatRight ? "grid-box float-right" : "grid-box";

  return (
    <Col xs={6} md={md} className={className}>
      <Link to={`products/${product.id}`}>
        <img src={product.imgUrl} className="img-responsive" />
        <div className='grid-box-hover'>
          <h3>{product.name}</h3>
          <div className="shop-icon">SHOP IT</div>
        </div>
      </Link>
    </Col>
  )


}
