import React from 'react'
import { connect } from 'react-redux'
import TransitionGroup from 'react-addons-transition-group'

import { handleCartAdd } from '../handleCartAdd'
import { toggleAnimation } from '../toggleAnimation'

import SingleProduct from '../components/SingleProduct'
import CartDrawer from '../components/AddCartAnimation/CartDrawer'


export let SingleProductContainer;


export default connect(
  (state) => {
    return {
      selectedProduct: state.products.selectedProduct,
      user: state.auth,
      reviews: state.reviews.reviews,
      handleCartAdd: handleCartAdd,
      lineItems: state.cart.lineItems
    }
  })(class extends React.Component {
    constructor() {
      super();
      this.state = {
        playBtnAnimation: false,
        playCartDrawerAnimation: false
      }
      SingleProductContainer = this;
      this.toggleAnimation = toggleAnimation.bind(this);
    }

    render () {
      return (
        <div>
        <SingleProduct
          playBtnAnimation={this.state.playBtnAnimation}
          toggleAnimation={this.toggleAnimation}
          selectedProduct={this.props.selectedProduct}
          user={this.props.user}
          reviews={this.props.reviews}
          handleCartAdd={this.props.handleCartAdd}
        />

        <TransitionGroup>
          { this.state.playCartDrawerAnimation && <CartDrawer lineItems={this.props.lineItems} /> }
        </TransitionGroup>

      </div>
      );
    }
})

