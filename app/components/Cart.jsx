import React from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ lineItems, handleRemove, handleUpdate }) {
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
