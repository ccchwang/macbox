import axios from 'axios'
import {receiveLineItem} from './reducers/cart'
import store from './store'

export const handleCartAdd = function(user, selectedProduct, quantity) {

  axios.post(`/api/cart/${user.id || 'unauthUser'}`, {
    product: selectedProduct,
    quantity: quantity
  })
  .then(createdLineItem => store.dispatch(receiveLineItem(createdLineItem.data)))
  .catch(console.error)
}

export const handleCartAddDelay = function(e, user, selectedProduct) {
  e.preventDefault();
  const quantity = e.target.quantity && e.target.quantity.value || 1;
  setTimeout(() => handleCartAdd(user, selectedProduct, quantity), 2000)
}
