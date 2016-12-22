import React, {
  Component,
} from 'react'

import {
  View,
  ListView,
  RefreshControl,
  TouchableOpacity
} from 'react-native'
import PromocaoItem from '@components/PromocaoItem'
import dataSource from '@hocs/dataSource'

class PromocoesList extends Component {
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
  }

  _renderSeparator(i, j, k) {
    return (
      <View key={j} style={{height: 5}} />
    )
  }

  _renderPromocao(promocao) {
    // // console.log(promocao)
    return (
      <TouchableOpacity
        style={{marginLeft: 0, marginRight: 0}}
        onPress={() => this.props.navigator.push('promocaoDetail')}
      >
        <PromocaoItem
          {...promocao}
        />
      </TouchableOpacity>
    )
  }

  render() {
    const {
      dataSource,
      loading,
      refetch
    } = this.props

    // console.log(dataSource)
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
          renderRow={this._renderPromocao}
        />
      </View>
    )
  }
}

export default dataSource(PromocoesList)
