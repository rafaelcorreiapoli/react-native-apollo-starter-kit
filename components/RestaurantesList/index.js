import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  ListView,
  RefreshControl,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native'
import { withNavigation } from '@exponent/ex-navigation'
import InfiniteScrollView from 'react-native-infinite-scroll-view'
import RestauranteItem from '../RestauranteItem'
import makeDataSource from '@hocs/dataSource'
import Exponent from 'exponent'

@withNavigation
class RestaurantesList extends Component {

  static defaultProps = {
    rows: []
  }

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}

    this.state = {
      loading: false,
    }

    this._renderRestaurante = this._renderRestaurante.bind(this)
  }

  _renderRestaurante(restaurante) {
    return (
      <TouchableOpacity
        style={{marginLeft: 0, marginRight: 0}}
        onPress={() => this.props.navigator.push('restauranteDetail')}
      >
        <RestauranteItem
          {...restaurante}
        />
      </TouchableOpacity>
    )
  }

  async _handleLogin () {
    const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
      '608769742665066', {
        permissions: ['public_profile'],
      })
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`)

        console.log(token)
      Alert.alert(
        token,
        `Hi ${(await response.json()).name}!`,
      )
    } else {
      Alert.alert(
        type
      )
    }
  }

  _renderSeparator(i, j, k) {
    return (
      <View key={j} style={{height: 5}} />
    )
  }

  render() {
    const {
      dataSource,
      loading,
      refetch
    } = this.props

    return (
      <View style={{ flex: 1 }}>
        <ListView
          renderSeparator={this._renderSeparator}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={refetch}
            />
          }
          enableEmptySections
          dataSource={dataSource}
          renderRow={this._renderRestaurante}
        />
        <Button onPress={this._handleLogin}
          title="FB Login"
        />
      </View>
    )
  }
}

export default makeDataSource(RestaurantesList)
