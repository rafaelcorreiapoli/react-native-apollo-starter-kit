import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';
import CuponsGrid from '@components/CuponsGrid'
export default class CuponsScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Cupons',
    },
  }

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rows = [{
      nome: 'Cupom 1'
    }, {
      nome: 'Cupom 2'
    }, {
      nome: 'Cupom 3'
    }, {
      nome: 'Cupom 4'
    }, {
      nome: 'Cupom 5'
    }]
    return (
      <View style={{flex : 1}}>
        <CuponsGrid rows={rows} />
      </View>
    );
  }

}
