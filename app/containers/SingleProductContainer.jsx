import React from 'react'
import { connect } from 'react-redux'
import SingleProduct from '../components/SingleProduct'
import { handleCartAdd } from '../handleCartAdd'


export default connect(
  (state) => {
    return {
      selectedProduct: state.products.selectedProduct,
      user: state.auth,
      reviews: state.reviews.reviews,
      handleCartAdd: handleCartAdd
    }
  })(class extends React.Component {
    state = {
      showBox: false
    };

    scrollUpAdd = () => {
      this.setState({showBox: false})
    }
    scrollDownAdd = () => {
      this.setState({showBox: !this.state.showBox})
      // setTimeout(this.scrollUpAdd, 2000)
    };

    render () {
      return (
      <SingleProduct
        showBox={this.state.showBox}
        scroll={this.scrollDownAdd}
        selectedProduct={this.props.selectedProduct}
        user={this.props.user}
        reviews={this.props.reviews}
        handleCartAdd={this.props.handleCartAdd}
      />
      );
    }
})

