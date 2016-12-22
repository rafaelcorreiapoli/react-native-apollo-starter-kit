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
import CupomItem from '@components/CupomItem'
import listView from '../ListView'
import GridView from 'react-native-grid-view'

class CuponsGrid extends Component {
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

  _renderCupom(cupom, i) {
    return (
      <TouchableOpacity
        key={i}
        style={{marginLeft: 0, marginRight: 0}}
        onPress={() => this.props.navigator.push('promocaoDetail')}
      >
        <CupomItem
          {...cupom}
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
      rows,
    } = this.props

    return (
      <View style={{ flex: 1 }}>
        <GridView
          items={rows}
          itemsPerRow={2}
          renderItem={this._renderCupom}
        />
      </View>
    );
  }
}

export default CuponsGrid
