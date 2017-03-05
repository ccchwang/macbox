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
  })(SingleProduct)

