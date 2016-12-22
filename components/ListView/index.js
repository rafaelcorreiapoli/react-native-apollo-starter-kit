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


export default (ComposedComponent) => {
  return class extends Component {
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

      this.state.dataSource = this.getUpdatedDataSource(props);
      this._refresh = this._refresh.bind(this)
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

    _refresh() {
      this.setState({
        loading: true
      })
      console.log('refreshing')
      setTimeout(() => this.setState({
        loading: false
      }), 2000)
    }

    render() {
      return (
        <ComposedComponent
          dataSource={this.state.dataSource}
          {...this.props}
        />
      );
    }
  }
}
