import React from 'react'
import { connect } from 'react-redux'
import Reviews from '../components/Reviews/Reviews'
import { createReview } from '../reducers/reviews'

export default connect(
  (state) => {
    return {
      reviews: state.reviews.reviews,
      selectedProduct: state.products.selectedProduct,
      user: state.auth
    }
  },
  (dispatch) => {
    return {
      handleReview: function(review, user, product) {
        const newReview = {
          description: review.content,
          rating: review.rating,
          user_id: user.id,
          product_id: product.id
        }

        dispatch(createReview(newReview))
      }
    }
  }
)(class extends React.Component {
    constructor() {
      super();
      this.state = {
        playReviewAdd: false,
        content: '',
        rating: 3
      };
      this.toggleAnimation = this.toggleAnimation.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    toggleAnimation () {
      this.setState({playReviewAdd: !this.state.playReviewAdd})
    }

    handleChange(input, field) {
      this.setState({[field]: input.value})
    }

    handleSubmit(e) {
      e.preventDefault();
      this.setState({playReviewAdd: false, content: '', rating: 3})
      this.props.handleReview(this.state, this.props.user, this.props.selectedProduct)
    }

    render () {
      return (
        <Reviews
          playReviewAdd={this.state.playReviewAdd}
          reviews={this.props.reviews}
          selectedProduct={this.props.selectedProduct}
          toggleAnimation={this.toggleAnimation}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          user={this.props.user}
          rating={this.state.rating}
          content={this.state.content}
        />
      )
    }
})
