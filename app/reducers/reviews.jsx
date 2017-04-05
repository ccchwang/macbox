import axios from 'axios'

//REDUCER

const initialState = {
  reviews: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "RECEIVE_REVIEWS":
      newState.reviews = action.reviews
      break;

    case "RECEIVE_REVIEW":
      newState.reviews = newState.reviews.concat(action.review)
      break;

    default: return state;
    }
  return newState
}

//ACTION CREATORS

export const receiveReviews = (reviews) => {
  return {
    type: "RECEIVE_REVIEWS",
    reviews
  }
}

export const receiveReview = (review) => {
  return {
    type: "RECEIVE_REVIEW",
    review
  }
}

export const createReview = (review) => {
  return (dispatch) =>
    axios.post(`/api/products/${review.product_id}/reviews`, review)
        .then((created) => dispatch(receiveReview(created.data)))
        .catch(console.error)
}

export default reducer
