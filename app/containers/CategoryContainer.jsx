import React from 'react'
import { connect } from 'react-redux'
import { Modal, Col, Button, Grid, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import Category from '../components/Category'
import { handleCartAdd } from '../handleCartAdd'

export default connect(
  (state, ownProps) => {
    return {
      products: state.products.products.filter(product => product.category === ownProps.params.category),
      category: ownProps.params.category,
      user: state.auth
    }
  }
)(class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, selectedProduct: {} };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    setTimeout(this.setState({ showModal: false, selectedProduct: {} }), 1000)
  }

  open(e, product) {
    this.setState({ showModal: true, selectedProduct: product })
  }

  render () {
    const product = this.state.selectedProduct;

    return (
      <div>
      <Category
        products={this.props.products}
        category={this.props.category}
        modalOpen={this.open}
      />

      <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
      <Modal.Body>
        <div>
          <Grid>
            <Row>
            <Col xs={4} md={4} >
              <img className="img-responsive" src={product.imgUrl} />
            </Col>

            <Col xs={8} md={8} >
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true" onClick={this.close}>x</span>
              </button>
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
                onClick={(e) => {handleCartAdd(e, this.props.user, product); this.close()}}
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
    </div>
    )}
})
