import ApolloClient, { createNetworkInterface } from 'apollo-client'

//const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciwo5qv971vqk010114vq4szb' })
const networkInterface = createNetworkInterface({ uri: 'https://us-west-2.api.scaphold.io/graphql/tdb' })

import {
  AsyncStorage
} from 'react-native'

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }

    // get the authentication token from local storage if it exists
    const token = await AsyncStorage.getItem('token')
    console.log(token)
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])
export default new ApolloClient({
  networkInterface
})
