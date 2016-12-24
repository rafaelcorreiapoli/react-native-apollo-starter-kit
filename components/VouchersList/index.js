import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  ListView,
  RefreshControl,
  TouchableOpacity
} from 'react-native'
import VoucherItem from '@components/VoucherItem'
import dataSource from '@hocs/dataSource'

class VouchersList extends Component {
  static defaultProps = {
    rows: []
  }

  static propTypes = {}

  constructor(props) {
    super(props)
  }

  _renderSeparator(i, j, k) {
    return (
      <View key={j} style={{height: 5}} />
    )
  }

  _renderVoucher(promocao) {
    return (
      <TouchableOpacity
        style={{marginLeft: 0, marginRight: 0}}
        onPress={() => this.props.navigator.push('voucherDetail')}
      >
        <VoucherItem
          {...promocao}
        />
      </TouchableOpacity>
    )
  }

  render() {
    const {
      dataSource,
      loading,
      refetch,
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
          renderRow={this._renderVoucher}
        />
      </View>
    )
  }
}

export default dataSource(VouchersList)
