import ApolloClient, { createNetworkInterface } from 'apollo-client';

export default new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciwo5qv971vqk010114vq4szb' }),
});
