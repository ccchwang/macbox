import React from 'react'
import { Grid, Row, Col, Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router';
import ReviewContainer from '../containers/ReviewContainer'


export default function({selectedProduct, reviews, handleCartAdd, user}) {



  return (
    <Grid>
      Shop / <Link to="" className="category-link">{selectedProduct.category}</Link>
      <br /><br />
      <Row className="show-grid product-main">
        <Col sm={6} md={5}>
            <img className="img-responsive" src={selectedProduct.imgUrl} />
        </Col>
        <Col sm={6} md={7} className="product-info">
            <h1> {selectedProduct.name} </h1>
            <div className="rating-stars">
              { `★`.repeat(selectedProduct.averageRating) }
              { `☆`.repeat(5-selectedProduct.averageRating) }
              {" " + reviews.length} Reviews
            </div>
            <h3> ${selectedProduct.formattedPrice} </h3>
            <p>Description:  {selectedProduct.description} </p>

            <Form >
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Quantity:</ControlLabel>
                {" "}
                <FormControl
                  className="quantity-select"
                  componentClass="select"
                  placeholder="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </FormControl>
                <br />
                <Button className="emphasis-btn">
                  <Link to="/cart" onClick={(e) => handleCartAdd(e, user, selectedProduct)}>ADD TO CART</Link>
                </Button>
              </FormGroup>
            </Form>

        </Col>
      </Row>

      <Row>
        <Col sm={12} >
          <ReviewContainer />
        </Col>
      </Row>
    </Grid>
  )
}
