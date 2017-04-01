import axios from 'axios'

//REDUCER

const initialState = {
  lineItems: [],
  orders: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "RECEIVE_LINE_ITEM":
      let noDupeLineItems = newState.lineItems.filter(item => item.product_id !== action.lineItem.product_id);
      newState.lineItems = [...noDupeLineItems, action.lineItem];
      break;

    case "RECEIVE_LINE_ITEMS":
      newState.lineItems = action.lineItems
      break;

    case "REMOVE_LINE_ITEM":
      newState.lineItems = newState.lineItems.filter(item => item.id !== action.lineItemId)
      break;

    case "UPDATE_LINE_ITEM":
      let itemToUpdate = newState.lineItems.filter(item => item.id === action.lineItemId)
      itemToUpdate[0].quantity = action.quantity
      newState.lineItems = [...newState.lineItems];
      break;

    case "RECEIVE_ORDER":
      newState.orders = [...newState.orders, action.order];
      break;

    default: return state;
    }
  return newState
}

//ACTION CREATORS

export const receiveLineItem = (lineItem) => {
  return {
    type: "RECEIVE_LINE_ITEM",
    lineItem
  }
}

export const receiveLineItems = (lineItems) => {
  return {
    type: "RECEIVE_LINE_ITEMS",
    lineItems
  }
}

export const removeLineItem = (lineItemId) => {
  return {
    type: "REMOVE_LINE_ITEM",
    lineItemId
  }
}

export const receiveOrder = (order) => {
  return {
    type: "RECEIVE_ORDER",
    order
  }
}

export const createOrder = (order, items, userId) => {
  return (dispatch) =>
    axios.post('/api/orders', {order, items, userId})
         .then(order => {
           dispatch(receiveOrder(order))
           dispatch(receiveLineItems([]))
          })
         .catch(console.error)
}
// export const logout = () =>
//   dispatch =>
//     axios.post('/api/auth/logout')
//       .then(() => dispatch(whoami()))
//       .catch(() => dispatch(whoami()))



export default reducer

