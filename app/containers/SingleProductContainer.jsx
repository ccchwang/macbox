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

    toggle = () => {
      this.setState({
        showBox: !this.state.showBox
      });
    };

    render () {
      return (
      <SingleProduct
        showBox={this.state.showBox}
        toggle={this.toggle}
        selectedProduct={this.props.selectedProduct}
        user={this.props.user}
        reviews={this.props.reviews}
        handleCartAdd={this.props.handleCartAdd}
      />
      );
    }
})

