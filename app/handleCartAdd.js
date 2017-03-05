import axios from 'axios'
import {receiveLineItem} from './reducers/cart'
import store from './store'

export const handleCartAdd = function(e, user, selectedProduct) {
  e.preventDefault();
  axios.post(`/api/cart/${user.id}`, {product: selectedProduct})
    .then(createdLineItem => store.dispatch(receiveLineItem(createdLineItem.data)))
    .catch(console.error)
}
