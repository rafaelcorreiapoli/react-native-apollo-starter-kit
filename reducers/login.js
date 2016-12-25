import { handleActions } from 'redux-actions'
import { Map } from 'immutable'
import {
  SET_FORM_VALUE,
  LOGIN_WITH_PASSWORD_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_WITH_PASSWORD_REQUEST,
  LOGOUT_REQUEST,
  SET_TOKEN,
} from '@actionTypes/login'

const initialState = Map({
  token: null,
  loading: false,
  waitingStorageAnswer: true,
  login: '',
  password: ''
})

export default handleActions({
  [SET_FORM_VALUE]: (state, action) =>
    state.set(action.payload.key, action.payload.value),
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
      .set('loading', false),
  [SET_TOKEN]: (state, action) =>
    state
      .set('token', action.payload.token)
      .set('waitingStorageAnswer', false)
}, initialState)
