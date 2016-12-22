import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  ListView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from '@exponent/ex-navigation'
import InfiniteScrollView from 'react-native-infinite-scroll-view'
import RestauranteItem from '../RestauranteItem'

@withNavigation
export default class RestaurantesList extends Component {

  static defaultProps = {
    rows: []
  }

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: this._rowHasChanged
      }),
      loading: false,
      canLoadMore: true
    };

    // Update the data store with initial data.
    this.state.dataSource = this.getUpdatedDataSource(props);

    this._refresh = this._refresh.bind(this)
    this._renderRestaurante = this._renderRestaurante.bind(this)
    // this._loadMoreContentAsync = this._loadMoreContentAsync.bind(this)
  }

  _rowHasChanged(a, b) {
    return a !== b
  }

  getUpdatedDataSource(props) {
    let rows = props.rows;
    return this.state.dataSource.cloneWithRows(rows);
  }

  componentWillReceiveProps(nextProps) {
    // Trigger a re-render when receiving new props (when redux has more data).
    this.setState({
      dataSource: this.getUpdatedDataSource(nextProps),
    });
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

  _refresh() {
    this.setState({
      loading: true
    })
    console.log('refreshing')
    setTimeout(() => this.setState({
      loading: false
    }), 2000)
  }
  _renderSeparator(i, j, k) {
    return (
      <View key={j} style={{height: 5}} />
    )
  }
  render() {
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
          dataSource={this.state.dataSource}
          renderRow={this._renderRestaurante}
        />
      </View>
    );
  }

}
