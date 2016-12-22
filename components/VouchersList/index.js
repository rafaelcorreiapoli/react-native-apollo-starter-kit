import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  ListView,
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import PromocaoItem from '@components/PromocaoItem'
import listView from '../ListView'

class VouchersList extends Component {
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    this._refresh = this._refresh.bind(this)
  }

  _renderSeparator(i, j, k) {
    return (
      <View key={j} style={{height: 5}} />
    )
  }

  _renderPromocao(promocao) {
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

  _refresh() {
    this.setState({
      loading: true
    })
    setTimeout(() => this.setState({
      loading: false
    }), 2000)
  }

  render() {
    const {
      dataSource,
    } = this.props

    return (
      <View style={{ flex: 1 }}>
        <ListView
          renderSeparator={this._renderSeparator}
          refreshControl={
            <RefreshControl
              refreshing={this.state.loading}
              onRefresh={this._refresh}
            />
          }
          enableEmptySections
          dataSource={dataSource}
          renderRow={this._renderPromocao}
        />
      </View>
    );
  }
}

export default listView(VouchersList)
