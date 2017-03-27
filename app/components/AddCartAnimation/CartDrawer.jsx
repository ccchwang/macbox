import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'


export default class CartDrawer extends React.Component {
  componentWillEnter (callback) {
    const d = this.drawer;
    const b = this.backdrop;
    TweenMax.from(b, 0.3, {opacity: 0, ease:Back.easeIn, onComplete: callback});
    TweenMax.from(d, 0.3, {x: 50, opacity: 0, ease:Back.easeIn, onComplete: callback});
  }

  componentWillLeave (callback) {
    const d = this.drawer;
    const b = this.backdrop;
    TweenMax.to(b, 0.3, {opacity: 0, onComplete: callback});
    TweenMax.fromTo(d, 0.4, {x: 0}, {x: 255, onComplete: callback});
  }

  render() {
    let total = 0;

    return (
      <div>

        {/*BACKDROP*/}
        <div ref={c => this.backdrop = c} style={{position: 'relative', zIndex: 1300}}>
        {
          this.props.lineItems && <div className="drawer-backdrop"  />
        }
        </div>


        {/*DRAWER*/}
        <div className='drawer' ref={c => this.drawer = c}>
          <Col xs={12} className="drawer-message">
            <span className="glyphicon glyphicon-ok-sign" aria-hidden="true" />
            <p>Item added to your cart.</p>

          </Col>
          <Col xs={12}><hr style={{marginBottom: 0}} /></Col>
          {
            this.props.lineItems && this.props.lineItems.map(item => {
              let price = (item.product.formattedPrice * item.quantity).toFixed(2);
              total += +price;

              return (
                <div key={item.id}>
                <Row className="drawer-item" key={item.id}>
                  <Col xs={5} >
                    <img className="img-responsive" src={item.product.imgUrl} />
                  </Col>

                  <Col xs={7}  style={{paddingLeft: '5px'}}>
                  <Link to={`/products/${item.product_id}`}>
                    {item.product.name}
                  </Link>
                  <br /><br />
                  ${price} • Qty {item.quantity}
                  </Col>
                </Row>
                <hr style={{margin: '0 15px'}} />
              </div>
              )
            })
          }

          <Col xs={12} className="drawer-total">
            <Button className="emphasis-btn drawer-btn">CHECK OUT | ${total.toFixed(2)}</Button>
          </Col>
        </div>

      </div>

    );
  }
}
