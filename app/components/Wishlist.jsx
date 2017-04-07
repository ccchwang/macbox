import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SortablePane, Pane } from 'react-sortable-pane';
import { Col, Popover } from 'react-bootstrap'
import ProductModal from './ProductModal'

export default connect(
  (state) => {
    return {
      products: state.products.products,
      user: state.auth
    }
  }
)(class extends React.Component {
    constructor() {
      super()
      this.state = {showModal: false, selectedProduct: {}};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }

  close() {
    this.setState({ showModal: false })
  }

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

  const lists = [{col: column1, name: 'Birthday'}, {col: column2, name: 'NYC'}, {col: column3, name: 'Decals'}, {col: column4, name: 'Summer'}].map(list => (
    <Col md={3} key={list.name}>
      <div className="pane-header"><h3>{list.name}</h3></div>
      <SortablePane
        direction="vertical"
        margin={20}
        className="wishlist"
      >
        { list.col }
      </SortablePane>
    </Col>
  ))

  return (
    <div className="pane-padding">
      <h1>Your Wishlist</h1>

      <Popover
        id="popover-basic"
        placement="right"
        positionLeft='25%'
        positionTop={-48}
      >
        Click and drag to re-sort the lists!
      </Popover>


      {
        this.props.user ? lists :
         <h4>Please log in to view your wishlists.</h4>
      }


      <ProductModal
        product={this.state.selectedProduct}
        show={this.state.showModal}
        close={this.close}
        user={this.props.user}
      />

    </div>
  );
  }
}
)



