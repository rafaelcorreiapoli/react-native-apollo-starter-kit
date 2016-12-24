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
} from 'react-native'
import { withNavigation } from '@exponent/ex-navigation'
import RestauranteItem from '../RestauranteItem'
import makeDataSource from '@hocs/dataSource'


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
    this._handleLogout = this._handleLogout.bind(this)
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
  _handleLogout() {
    this.props.logout()
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
        <Button onPress={this._handleLogout}
          title="LOGOUT"
        />
      </View>
    )
  }
}

export default makeDataSource(RestaurantesList)
