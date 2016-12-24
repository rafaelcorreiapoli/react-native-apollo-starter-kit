import Exponent from 'exponent'
import React from 'react'
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation'
import {
  FontAwesome,
} from '@exponent/vector-icons'

import Router from './navigation/Router'
import cacheAssetsAsync from './utilities/cacheAssetsAsync'
import Switch from '@containers/Switch'
import { ApolloProvider } from 'react-apollo'
import client from '@apollo/client'
import configureStore from '@store'
export const store = configureStore()

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync()
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/exponent-wordmark.png'),
        ],
        fonts: [
          FontAwesome.font,
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ],
      })
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      )
      console.log(e.message)
    } finally {
      this.setState({appIsReady: true})
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <ApolloProvider client={client} store={store}>
          <View style={styles.container}>
            <NavigationProvider router={Router}>
              <Switch />
            </NavigationProvider>

            {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
            {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          </View>
        </ApolloProvider>
      )
    } else {
      return (
        <Exponent.Components.AppLoading />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})


Exponent.registerRootComponent(AppContainer)
