import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap'
import MotionMenu from './motion-menu'
import { handleCartAdd } from '../handleCartAdd'
import { ShareButtons } from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  GooglePlusShareButton
} = ShareButtons;


export default function ProductModal ({ product, show, close, user }) {
  const socialMediaTitle = product.name + " " + product.category;
  const socialMediaImg = `http://localhost:8080` + product.imgUrl;
  const socialMediaUrl = `http://localhost:8080/products/` + product.id;

  return (

       <Modal show={show} onHide={close} dialogClassName="custom-modal">

          <Modal.Header closeButton>
            <MotionMenu
              type="circle"
              margin={120}
            >
              <div className="button">
                <img style={{marginLeft: '7px', marginTop: '7.5px'}} src="/img/favorite-5-16.png" />
              </div>

              <FacebookShareButton
                picture={socialMediaImg}
                title={socialMediaTitle}
                description={product.description}
                url="grace-shopper-babes.herokuapp.com"
              >
                <img className="share-img" src="/img/facebook-24.png" />
              </FacebookShareButton>

              <div className="button" />

              <div className="button">
                <a id="email-link" href={`mailto:?body=Shop%20my%20find!%20Visit%3A%20${socialMediaUrl}%0A%0A${socialMediaTitle}%0A%0A${product.description}`}>
                  <img className="share-img" src="/img/email-3-24.png" />
                </a>
              </div>

              <PinterestShareButton
                media={socialMediaImg}
                description={socialMediaTitle + " - " + product.description}
                url='www.yahoo.com'
              >
                <img className="share-img" src="/img/pinterest-6-24.png" />
              </PinterestShareButton>

              <GooglePlusShareButton
                url={'http://grace-shopper-babes.herokuapp.com/'}
              >
                <img className="share-img" src="/img/google-plus-24.png" />
              </GooglePlusShareButton>

              <TwitterShareButton
                title={socialMediaTitle}
                via="Macbox"
                url={socialMediaUrl}
              >
                <img className="share-img" src="/img/twitter-24.png" />
              </TwitterShareButton>
            </MotionMenu>
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




