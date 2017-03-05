import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ products, category, modalOpen }) {

const rows = products && products.map(product =>
  (<Col sm={6} md={3} key={product.id}>

    <div onClick={(e) => modalOpen(e, product)} style={{cursor: "pointer"}}>
      <img src={product.imgUrl} className="img-responsive" />
    </div>
    <div className="main-padding category-product">
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      <div className="mini-stars">
        { `★`.repeat(product.averageRating) }
        { `☆`.repeat(5-product.averageRating) }
      </div>
      ${product.formattedPrice}
    </div>
  </Col>)
)

    return (

        <Grid>
          <Link to={`/`} className="category-link">Shop</Link> / {category}
          <br /><br />
          <Row className="show-grid main-padding">
            { rows }
          </Row>
        </Grid>

    )
}
