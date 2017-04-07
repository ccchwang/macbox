import React from 'react'
import { connect } from 'react-redux'
import Category from '../components/Category'
import ProductModal from '../components/ProductModal'


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

    return (
      <div>
        <Category
          products={this.props.products}
          category={this.props.category}
          modalOpen={this.open}
        />

        <ProductModal
          product={this.state.selectedProduct}
          show={this.state.showModal}
          close={this.close}
          user={this.props.user}
        />
      </div>
    )}
})
