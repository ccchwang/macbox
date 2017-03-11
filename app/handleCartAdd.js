import axios from 'axios'
import {receiveLineItem} from './reducers/cart'
import store from './store'
import {NavBar} from './components/Navbar'
import {toggleAnimation} from './toggleAnimation'

export const handleCartAdd = function(e, user, selectedProduct) {
  e.preventDefault();

  axios.post(`/api/cart/${user.id || 'unauthUser'}`, {
    product: selectedProduct,
    quantity: e.target.quantity && e.target.quantity.value || 1
  })
  .then(createdLineItem =>
    setTimeout(() => {
      toggleAnimation.call(NavBar)
      store.dispatch(receiveLineItem(createdLineItem.data))
    }, 3000)
  )
  .catch(console.error)
}
