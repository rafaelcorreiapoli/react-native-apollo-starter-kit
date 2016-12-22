import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  ListView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'
import { withNavigation } from '@exponent/ex-navigation'
import InfiniteScrollView from 'react-native-infinite-scroll-view'
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
    console.log(this.props.loading)
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
      </View>
    )
  }
}

export default makeDataSource(RestaurantesList)
