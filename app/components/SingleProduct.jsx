import React from 'react'
import { Grid, Row, Col, Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router';
import ReviewContainer from '../containers/ReviewContainer'
import TransitionGroup from 'react-addons-transition-group';
import WaitingBtn from '../components/AddCartAnimation/WaitingBtn'
import AddBtn from '../components/AddCartAnimation/AddBtn'


export default function({selectedProduct, reviews, handleCartAdd, user, playBtnAnimation, toggleAnimation}) {

  let quantity = [];

  for (let i=1; i<21; i++) {
    quantity.push(<option value={i} key={i}>{i}</option>)
  }

  return (
    <Grid>
      Shop / <Link to={`/shop/${selectedProduct.category}`} className="category-link">{selectedProduct.category}</Link>
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
            <p>{selectedProduct.description} </p>

            <Form onSubmit={(e) => handleCartAdd(e, user, selectedProduct)}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Quantity:</ControlLabel>
                {" "}
                <FormControl
                  className="quantity-select"
                  componentClass="select"
                  name="quantity">
                  { quantity }
                </FormControl>
                <br />


                <TransitionGroup>
                  { playBtnAnimation && <WaitingBtn  />}
                </TransitionGroup>

                <Button type="submit" className="emphasis-btn add-cart-btn" onClick={() => toggleAnimation('playBtnAnimation')} style={!playBtnAnimation ? {backgroundColor:'rgb(131, 241, 236)'} : null}>
                  <TransitionGroup>
                    { !playBtnAnimation && <AddBtn /> }
                  </TransitionGroup>
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
