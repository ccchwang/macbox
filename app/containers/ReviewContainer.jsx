import React from 'react'
import { connect } from 'react-redux'
import Reviews from '../components/Reviews/Reviews'

export default connect(
  (state) => {
    return {
      reviews: state.reviews.reviews,
      selectedProduct: state.products.selectedProduct
    }
  }
)(class extends React.Component {
    constructor() {
      super();
      this.state = {playReviewAdd: false};
      this.toggleAnimation = this.toggleAnimation.bind(this)
    }
    toggleAnimation () {
      this.setState({playReviewAdd: !this.state.playReviewAdd})
    }

    render () {
      return (
        <Reviews
          playReviewAdd={this.state.playReviewAdd}
          reviews={this.props.reviews}
          selectedProduct={this.props.selectedProduct}
          toggleAnimation={this.toggleAnimation}
        />
      )
    }
})
