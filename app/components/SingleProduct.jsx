import React from 'react'
import { Grid, Row, Col, Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router';
import ReviewContainer from '../containers/ReviewContainer'
import TransitionGroup from 'react-addons-transition-group';
import Test from '../components/Test'
import Test2 from '../components/Test2'


export default function({selectedProduct, reviews, handleCartAdd, user, playAnimation, toggleAnimation}) {

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
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </FormControl>
                <br />


                <TransitionGroup>
                  { playAnimation && <Test  />}
                </TransitionGroup>

                <Button type="submit" className="emphasis-btn test-btn" onClick={toggleAnimation} style={!playAnimation ? {backgroundColor:'#6df1d5'} : null}>
                  <TransitionGroup>
                    { !playAnimation && <Test2 /> }
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
