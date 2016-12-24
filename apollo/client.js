import ApolloClient, { createNetworkInterface } from 'apollo-client'

//const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciwo5qv971vqk010114vq4szb' })
const networkInterface = createNetworkInterface({ uri: 'https://us-west-2.api.scaphold.io/graphql/tdb' })
import { store } from '../main'
import { getToken } from '@selectors/login'

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }
    const state = store.getState()
    const token = getToken(state)
    if (token) {
      req.options.headers.authorization = `Bearer ${token}`
    }
    next()
  }
}])
export default new ApolloClient({
  networkInterface
})
