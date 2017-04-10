import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap'
import SocialShareMenu from './SocialShareMenu'
import { handleCartAdd } from '../handleCartAdd'

export default function ProductModal ({ product, show, close, user }) {

  return (
    <Modal show={show} onHide={close} dialogClassName="custom-modal">

      <Modal.Header closeButton>
        <SocialShareMenu product={product} />
      </Modal.Header>

      <Modal.Body style={{padding: '45px 35px'}}>
        <div>
          <Grid>
            <Row>
            <Col xs={4} md={4} >
              <img className="img-responsive" src={product.imgUrl} />
            </Col>

            <Col xs={8} md={8} >
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <div className="mini-stars">
                { `★`.repeat(product.averageRating) }
                { `☆`.repeat(5-product.averageRating) }
              </div>
              <h4>${product.formattedPrice}</h4>

              <Button
                className="emphasis-btn modal-cart-btn"
                type="submit"
                onClick={(e) => {handleCartAdd(e, user, product, false); close()}}
              >ADD TO CART
              </Button>

              <Link to={`/products/${product.id}`}>
                <Button className="emphasis-btn modal-detail-btn" type="submit">VIEW DETAILS</Button>
              </Link>
            </Col>
            </Row>
          </Grid>
        </div>
      </Modal.Body>
    </Modal>


  );

}




