import React from 'react'
import { connect } from 'react-redux'
import SingleProduct from '../components/SingleProduct'
import { handleCartAddDelay } from '../handleCartAdd'
import { animationOn, animationOff } from '../toggleAnimation'

export default connect(
  (state) => {
    return {
      selectedProduct: state.products.selectedProduct,
      user: state.auth,
      reviews: state.reviews.reviews,
      handleCartAddDelay: handleCartAddDelay
    }
  })(class extends React.Component {
    constructor() {
      super();
      this.state = {playAnimation: false}
      this.animationOn = animationOn.bind(this);
      this.animationOff = animationOff.bind(this);
    }

    render () {
      return (
        <SingleProduct
          playAnimation={this.state.playAnimation}
          animationOn={this.animationOn}
          selectedProduct={this.props.selectedProduct}
          user={this.props.user}
          reviews={this.props.reviews}
          handleCartAddDelay={this.props.handleCartAddDelay}
        />
      );
    }
})

