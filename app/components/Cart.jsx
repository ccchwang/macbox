import React from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ lineItems, handleRemove, handleUpdate }) {

  let quantity = [];

  for (let i=1; i<21; i++) {
    quantity.push(<option value={i} key={i}>{i}</option>)
  }

  let cartIsEmpty = lineItems.length;
  let total = 0;

  let rows = lineItems && lineItems.map(item => {
    let price = item.orderedPrice;
    total += +price;

    return (
      <div key={item.id} >
        <Row className="show-grid main-padding" key={item.id}>
          <Col xs={5} md={4} >
            <img className="img-responsive" src={item.product.imgUrl} />
          </Col>

          <Col xs={7} md={8} >
            <h3><Link to={`/products/${item.product_id}`}>{item.product.name}</Link></h3>
            <p>{item.product.category}</p>
            <h4>${price.toFixed(2)}</h4>
            <br />
            <Form onSubmit={(e) => handleUpdate(e, item.id)}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Quantity:</ControlLabel>
                {" "}
                <FormControl
                  componentClass="select"
                  className="quantity-select cart-select"
                  defaultValue={item.quantity}
                  name="quantity">
                    { quantity }
                </FormControl>
                <br />

                <Button className="cart-btn" type="submit" >UPDATE CART</Button>
                <Button className="cart-btn" onClick={(e) => handleRemove(e, item.id)}>REMOVE</Button>


              </FormGroup>
            </Form>



          </Col>

        </Row>
        <hr />
      </div>
    )
  })

  return (
    <Grid className="cart-page">
      <h1>Your Cart</h1>

       <Row className="show-grid main-padding">
         <Col sm={12} md={8}>
          <div className="cart-header">PRODUCTS</div>
          { !cartIsEmpty ?  <h4>Your cart is currently empty!</h4> : rows }
         </Col>

         <Col sm={12} md={4} className="cart-checkout-panel">
          <div className="cart-header">TOTAL</div>
          <div className="main-padding">
            { !cartIsEmpty ? null :
                <div>
                  <h3>${total.toFixed(2)}</h3>
                  <br />
                  <Link to="/checkout">
                    <Button className="emphasis-btn">PROCEED TO CHECKOUT</Button>
                  </Link>
                </div>
            }
          </div>
        </Col>

       </Row>


    </Grid>
  )
}
