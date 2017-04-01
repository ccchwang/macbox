import axios from 'axios'
import {receiveLineItem} from './reducers/cart'
import store from './store'
import {SingleProductContainer} from './containers/SingleProductContainer'
import {toggleAnimation} from './toggleAnimation'

export const handleCartAdd = function(e, user, selectedProduct) {
  e.preventDefault();

  axios.post(`/api/cart/${user.id || 'unauthUser'}`, {
    product: selectedProduct,
    quantity: e.target.quantity && e.target.quantity.value || 1,
    price: selectedProduct.formattedPrice
  })
  .then(createdLineItem =>
    setTimeout(() => {
      toggleAnimation.call(SingleProductContainer, "playCartDrawerAnimation")
      store.dispatch(receiveLineItem(createdLineItem.data))
    }, 2000)
  )
  .catch(console.error)
}
