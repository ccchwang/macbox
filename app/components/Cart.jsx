import React from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ lineItems, handleRemove, handleUpdate }) {

  let total = 0;

  let rows = lineItems && lineItems.map(item => {
    let price = item.product.formattedPrice * item.quantity
    total += +price;

    return (
      <div key={item.id} >
        <Row className="show-grid main-padding" key={item.id}>
          <Col xs={4} md={4} >
            <img className="img-responsive" src={item.product.imgUrl} />
          </Col>

          <Col xs={8} md={7} >
            <h3>{item.product.name}</h3>
            <h4>${price}</h4>

            <Form onSubmit={(e) => handleUpdate(e, item.id)}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Quantity:</ControlLabel>
                {" "}
                <FormControl
                  componentClass="select"
                  className="quantity-select"
                  defaultValue={item.quantity}
                  name="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </FormControl>
                <br />

                <Button type="submit" >Update Cart</Button>
                <Button onClick={(e) => handleRemove(e, item.id)}>Remove</Button>


              </FormGroup>
            </Form>



          </Col>

        </Row>
        <hr />
      </div>
    )
  })

  if (!rows.length) {
    rows = <h4>You don't have any cuties yet!</h4>
    total = null;
  }
  else {
    total = '$' + total
  }

  return (
    <Grid className="cart-page">
      <h1>Your Cart</h1>

       <Row className="show-grid main-padding">
         <Col sm={12} md={8}>
          <div className="cart-header">PRODUCTS</div>
          { rows }
         </Col>

         <Col sm={12} md={4}>
          <div className="cart-header">TOTAL</div>
          <div className="main-padding">
            <h4>{total}</h4>
            <Button className="emphasis-btn">PROCEED TO CHECKOUT</Button>
          </div>
        </Col>

       </Row>


    </Grid>
  )
}
