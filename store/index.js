import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '@reducers'
import { createNavigationEnabledStore } from '@exponent/ex-navigation'
import createSagaMiddleware from 'redux-saga'
import loginSaga from '@sagas/login'
import createLogger from 'redux-logger'

const logger = createLogger()
const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
})


export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const loggerMiddleware = createLogger()
  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================

  const enhancer = compose(
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )

  const store = createStoreWithNavigation(rootReducer, initialState, enhancer)

  sagaMiddleware.run(loginSaga)
  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const reducers = require('../reducers/index').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }


  return store
}
