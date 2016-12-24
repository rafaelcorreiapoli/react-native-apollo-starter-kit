import { createAction } from 'redux-actions'

import {
  SET_FORM_VALUE,
  LOGIN_WITH_PASSWORD_REQUEST,
  LOGIN_WITH_PASSWORD_SUCCESS,
  LOGIN_WITH_PASSWORD_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  WRITE_TOKEN_TO_STORAGE,
  READ_TOKEN_FROM_STORAGE,
  CLEAR_TOKEN_FROM_STORAGE
} from '@actionTypes/login'

export const setFormValue = createAction(SET_FORM_VALUE, (key, value) => ({ key, value }))

export const loginWithPasswordFail = createAction(LOGIN_WITH_PASSWORD_FAIL)
export const loginWithPassword = createAction(LOGIN_WITH_PASSWORD_REQUEST, (email, password) => ({ email, password }))
export const loginWithPasswordSuccess = createAction(LOGIN_WITH_PASSWORD_SUCCESS, token => ({ token }))
export const logout = createAction(LOGOUT_REQUEST)
export const logoutSuccess = createAction(LOGOUT_SUCCESS)
export const logoutFail = createAction(LOGOUT_FAIL)

export const writeTokenToStorage = createAction(WRITE_TOKEN_TO_STORAGE, token => ({ token }))
export const readTokenFromStorage = createAction(READ_TOKEN_FROM_STORAGE)
export const clearTokenFromStorage = createAction(CLEAR_TOKEN_FROM_STORAGE)
