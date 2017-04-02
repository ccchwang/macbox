import axios from 'axios'
import { browserHistory } from 'react-router';
import { receiveLineItems } from './cart'

const AUTHENTICATED = 'AUTHENTICATED'

const reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const signup = (username, password, name) =>
  dispatch =>
    axios.post('/api/auth/signup/local',
      {username, password, name})
      .then(() => dispatch(whoami()))
      .then((user) => browserHistory.push('/'))
      .catch(() => dispatch(whoami()))

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/'))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/'))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
