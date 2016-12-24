import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import {
  loginWithPasswordFail,
  logoutFail,
  loginWithPasswordSuccess,
  logoutSuccess,
} from '@actions/login'
import { LOGIN_WITH_PASSWORD_REQUEST, LOGOUT_REQUEST, WRITE_TOKEN_TO_STORAGE, READ_TOKEN_FROM_STORAGE, CLEAR_TOKEN_FROM_STORAGE} from '@actionTypes/login'
import { NavigationActions } from '@exponent/ex-navigation'
import { AsyncStorage } from 'react-native'
function* readTokenFromStorageHandler() {
  try {
    const token = yield AsyncStorage.getItem('token')
    if (token) {
      yield put(loginWithPasswordSuccess(token))
    }
  } catch (e) {
    console.log(e)
  }
}

function* clearTokenFromStorageHandler() {
  try {
    yield AsyncStorage.removeItem('token')
    yield put(loginWithPasswordSuccess(null))
  } catch (e) {
    console.log(e)
  }
}

function* writeTokenToStorageHandler(action) {
  try {
    yield AsyncStorage.setItem('token', action.payload.token)
    yield put(loginWithPasswordSuccess(action.payload.token))
  } catch (e) {
    console.log(e)
  }
}
function* loginWithPasswordHandler(action) {
   try {
      yield call(delay, 1000)
      // const navigatorUID = yield select(state => {
      //   return state.navigation.currentNavigatorUID
      // })
      // yield put(NavigationActions.push(navigatorUID, Router.getRoute('main')))
      yield put(loginWithPasswordSuccess('abc'))
   } catch (e) {
     console.log(e)
      const error = new Error(e.error)
      yield put(loginWithPasswordFail(error))
   }
}

function* logoutHandler(action) {
   try {
     yield call(delay, 1000)
    //  const navigatorUID = yield select(state => state.navigation.currentNavigatorUID)
    //  yield put(NavigationActions.popToTop(navigatorUID, Router.getRoute('login')))
    yield put(logoutSuccess())
   } catch (e) {
     console.log(e)
      const error = new Error(e.error)
      yield put(logoutFail(error))
   }
}


export default function* saga() {
  yield takeLatest(LOGIN_WITH_PASSWORD_REQUEST, loginWithPasswordHandler)
  yield takeLatest(LOGOUT_REQUEST, logoutHandler)
  yield takeLatest(WRITE_TOKEN_TO_STORAGE, writeTokenToStorageHandler)
  yield takeLatest(READ_TOKEN_FROM_STORAGE, readTokenFromStorageHandler)
  yield takeLatest(CLEAR_TOKEN_FROM_STORAGE, clearTokenFromStorageHandler)

}
