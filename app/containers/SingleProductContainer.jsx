import React from 'react'
import { connect } from 'react-redux'
import SingleProduct from '../components/SingleProduct'
import { handleCartAdd } from '../handleCartAdd'
import { toggleAnimation } from '../toggleAnimation'


export default connect(
  (state) => {
    return {
      selectedProduct: state.products.selectedProduct,
      user: state.auth,
      reviews: state.reviews.reviews,
      handleCartAdd: handleCartAdd
    }
  })(class extends React.Component {
    constructor() {
      super();
      this.state = {playAnimation: false}
      this.toggleAnimation = toggleAnimation.bind(this);
    }

    render () {


      return (
        <SingleProduct
          playAnimation={this.state.playAnimation}
          toggleAnimation={this.toggleAnimation}
          selectedProduct={this.props.selectedProduct}
          user={this.props.user}
          reviews={this.props.reviews}
          handleCartAdd={this.props.handleCartAdd}
        />
      );
    }
})

