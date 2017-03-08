'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import SignUp from './components/SignUp'
import WhoAmI from './components/WhoAmI'
import HomePageContainer from './containers/HomePageContainer'
import AppContainer from './containers/AppContainer'
import LoginContainer from './containers/LoginContainer'
import SingleProductContainer from './containers/SingleProductContainer';
import CartContainer from './containers/CartContainer'
import CategoryContainer from './containers/CategoryContainer'
import TestContainer from './containers/TestContainer'

//redux things
import { receiveProducts, receiveProduct } from './reducers/products'
import { receiveReviews } from './reducers/reviews'
import { receiveLineItems } from './reducers/cart'


const loadProductsAndCartItems = (nextState, replace, done) => {
  axios.get('/api/products')
    .then(products => store.dispatch(receiveProducts(products.data)))
    .then(() => {
      let authUser = store.getState().auth.id;

      axios.get(`/api/cart/${authUser || 'unauthUser'}`)
          .then(cart => cart.data)
          .then(cart => store.dispatch(receiveLineItems(cart)))
    })
    .then(() => done())
    .catch(console.error)
}

const loadSingleProduct = (nextState, replace, done) => {
  axios.get(`/api/products/${nextState.params.productId}`)
    .then(productInfo => productInfo.data)
    .then(([product, reviews]) => {
      store.dispatch(receiveProduct(product));
      return store.dispatch(receiveReviews(reviews));
    })
    .then(() => done())
    .catch(console.error);
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignUp} />
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePageContainer} onEnter={loadProductsAndCartItems} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={loadSingleProduct} />
        <Route path="/shop/:category" component={CategoryContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/test" component={TestContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
