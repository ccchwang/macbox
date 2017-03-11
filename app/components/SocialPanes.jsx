import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SortablePane, Pane } from 'react-sortable-pane';
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap'
import MotionMenu from './motion-menu'
import { handleCartAdd } from '../handleCartAdd'


export default connect(
  (state) => {
    return {
      products: state.products.products
    }
  }
)(class extends React.Component {
    constructor() {
      super()
      this.state = {showModal: false, selectedProduct: {}};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }

  close() { this.setState({ showModal: false }) }

  open(e, product) {
    this.setState({ showModal: true, selectedProduct: product })
  }

  render () {
  const panes = this.props.products && this.props.products.map((product, i) => {
    const backgroundImg = {backgroundImage: `url(${product.imgUrl})`};

    return (
      <Pane
        width={190}
        height={190}
        style={backgroundImg}
        key={i}
        id={product.id}
        className="sort-pane"
        >
          <p className={`p${i}`} onClick={(e) => this.open(e, product)}>{product.name}</p>
      </Pane>)
  })

  const column1 = panes.slice(0,3);
  const column2 = panes.slice(3,6);
  const column3 = panes.slice(6,8);
  const column4 = panes.slice(8);
  const product = this.state.selectedProduct;

  return (
    <div className="pane-padding">
      <h1>Your Wishlist</h1>

      <Col md={3}>
        <div className="pane-header">PRODUCTS</div>
        <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
          style={{position: 'relative', height: '600px', width: '100%', padding: '3%'}}
        >
          { column2 }
        </SortablePane>
      </Col>

      <Col md={3}>
        <div className="pane-header">PRODUCTS</div>
        <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
          style={{position: 'relative', height: '750px', width: '100%', padding: '3%'}}
        >
          { column1 }
        </SortablePane>
       </Col>

       <Col md={3}>
        <div className="pane-header">PRODUCTS</div>
        <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
          style={{position: 'relative', height: '600px', width: '100%', padding: '3%'}}
        >
          { column3 }
        </SortablePane>
       </Col>

       <Col md={3}>
        <div className="pane-header">PRODUCTS</div>
        <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
          style={{position: 'relative', height: '600px', width: '100%', padding: '3%'}}
        >
          { column4 }
        </SortablePane>
       </Col>


       <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <MotionMenu
              type="circle"
              margin={120}
            >
              <div className="button">
                <i className="fa fa-bars" />
              </div>
              <div className="button">
                <i className="fa fa-cogs" />
              </div>
              <div className="button">
                <i className="fa fa-cloud" />
              </div>
              <div className="button">
                <i className="fa fa-home" />
              </div>
              <div className="button">
                <i className="fa fa-home" />
              </div>
              <div className="button">
                <i className="fa fa-home" />
              </div>
              <div className="button">
                <i className="fa fa-home" />
              </div>
            </MotionMenu>
          </Modal.Header>
          <Modal.Body>
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
  );
  }
}
)



