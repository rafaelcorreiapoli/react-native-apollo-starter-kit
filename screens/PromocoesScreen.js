import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';
import PromocoesList from '@components/PromocoesList'
export default class PromocoesScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Promocoes',
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
      nome: 'Promocao 1'
    }, {
      nome: 'Promo 2'
    }, {
      nome: 'Promo 3'
    }]

    return (
      <View style={{flex : 1}}>
        <PromocoesList rows={rows} />
      </View>
    );
  }

}
