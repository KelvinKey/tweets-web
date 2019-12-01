import ls from '@/utils/localStorage'
import http from '@/utils/http'
import { isEmpty } from 'lodash'
import * as TYPES from './mutations-types'

export const attemptLogin = ({ dispatch }, payload) =>
  http.post('auth/login', payload)
    .then(data => {
      dispatch('setToken', data.access_token)

      return Promise.resolve()
    })
    .then(() => dispatch('loadUser'))

export const attemptRegister = ({ dispatch }, payload) =>
  http.post('auth/register', payload)
    .then(data => {
      dispatch('setToken', data.token)

      return Promise.resolve()
    })
    .then(() => dispatch('loadUser'))

export const logout = ({ dispatch }) => {
  ls.remove('token')
  dispatch('setToken', null)
  dispatch('setUser', null)
}

export const setUser = ({ commit }, user) => {
  // Commit the mutations
  commit(TYPES.SET_USER, user)

  Promise.resolve(user) // keep promise chain
}

export const setToken = ({ commit }, payload) => {
  // prevent if payload is a object
  const token = isEmpty(payload) ? null : payload.token || payload

  // Commit the mutations
  commit(TYPES.SET_TOKEN, token)

  return Promise.resolve(token) // keep promise chain
}

export const checkUserToken = ({ dispatch, state }) => {
  if (!isEmpty(state.token)) {
    return Promise.resolve(state.token)
  }

  return (
    ls.get('token')
      .then(token => {
        if (isEmpty(token)) {
          // Token is not saved in localstorage
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject('NO_TOKEN') // Reject promise
        }
        // Put the token in the vuex store
        return dispatch('setToken', token) // keep promise chain
      })
      // With the token in hand, retrieves the user's data, validating the token
      .then(() => dispatch('loadUser'))
  )
}

export const loadUser = ({ dispatch }) =>
  http.get('user/me')
    // store user's data
    .then(user => dispatch('setUser', user))
    .catch(logout)
