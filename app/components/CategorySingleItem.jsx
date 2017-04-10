import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ product, modalOpen }) {

  return (
    <Col sm={6} md={3}>

      <div onClick={(e) => modalOpen(e, product)} style={{position: 'relative' }}>
        <img src={product.imgUrl} className="img-responsive" />
        <div className='quick-view-hover grid-box-hover'>
          <div className="quick-view-icon">QUICK VIEW</div>
        </div>
      </div>

      <div className="main-padding category-product">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
        <div className="mini-stars">
          { `★`.repeat(product.averageRating) }
          { `☆`.repeat(5-product.averageRating) }
        </div>
        ${product.formattedPrice}
      </div>
      <br />
    </Col>
    )
}
