import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  ListView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import CupomItem from '@components/CupomItem'
import dataSource from '@hocs/dataSource'

class CuponsGrid extends Component {
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

  _renderCupom(cupom, i) {
    return (
      <TouchableOpacity
        key={i}
        style={{marginLeft: 0, marginRight: 0, alignItems: 'center'}}
        onPress={() => this.props.navigator.push('promocaoDetail')}
      >
        <CupomItem
          {...cupom}
          style={styles.cupom}
        />
      </TouchableOpacity>
    )
  }


  render() {
    const {
      rows,
      loading,
      refetch,
      dataSource
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
          renderRow={this._renderCupom}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cupom: {
    width: 200,
    height: 200
  }
})

export default dataSource(CuponsGrid)
