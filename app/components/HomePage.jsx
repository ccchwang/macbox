import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'


export default function(props) {
  const boxes = props.products.map((product, index) => {

    if (index === 0 || index % 10 === 0) {
      return (
        <Col xs={6} md={6} className="grid-box" key={product.id} >
          <Link to={`products/${product.id}`}>
            <img src={product.imgUrl} className="img-responsive"/>
            <div className='grid-box-hover'>
              <h3>{product.name}</h3>
              <div className="shop-icon">SHOP IT</div>
            </div>
          </Link>
        </Col>
      )
    }
    else if (index === 7 || index===17 || index===29 ) {
      return (
        <Col xs={6} md={6} className="grid-box float-right" key={product.id} >
          <Link to={`products/${product.id}`}>
            <img src={product.imgUrl} className="img-responsive"/>
            <div className='grid-box-hover'>
              <h3>{product.name}</h3>
              <div className="shop-icon">SHOP IT</div>
            </div>
          </Link>
        </Col>
      )
    }
    else {
      return <Col xs={6} md={3} className="grid-box" key={product.id}>
        <Link to={`products/${product.id}`}>
          <img src={product.imgUrl} className="img-responsive"/>
          <div className='grid-box-hover'>
            <h3>{product.name}</h3>
            <div className="shop-icon">SHOP IT</div>
          </div>
        </Link>
      </Col>
    }
  })


  return (
    <Grid>
       <Row className="show-grid all-products main-padding">
         { boxes }
       </Row>
    </Grid>
  )
}
