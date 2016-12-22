import { handleActions } from 'redux-actions'
import { Map } from 'immutable'
import {
  LOGIN_WITH_PASSWORD_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_WITH_PASSWORD_REQUEST,
  LOGOUT_REQUEST,
} from '@actionTypes/login'

const initialState = Map({
  token: null,
  loading: false,
})

export default handleActions({
  [LOGOUT_REQUEST]: (state, action) =>
    state.set('loading', true),
  [LOGIN_WITH_PASSWORD_REQUEST]: (state, action) =>
    state.set('loading', true),
  [LOGIN_WITH_PASSWORD_SUCCESS]: (state, action) =>
    state.set('token', action.payload.token)
    .set('loading', false),
  [LOGOUT_SUCCESS]: (state, action) =>
    state
      .set('token', null)
      .set('loading', false)
}, initialState)
