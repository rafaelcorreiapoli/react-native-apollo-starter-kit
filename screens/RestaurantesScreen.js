import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  Button
} from 'react-native';
import RestaurantesList from '../components/RestaurantesList'
import { PRIMARY_COLOR } from '@resources/colors'

export default class RestaurantesScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Restaurantes',
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
      nome: 'Subway'
    }, {
      nome: 'Mc Donalds'
    }, {
      nome: 'Bob\'s'
    }, {
      nome: 'Ragazzo'
    }, {
      nome: 'Spoletto'
    }]

    return (
      <View style={{flex : 1}}>
        <RestaurantesList rows={rows} />
      </View>
    );
  }

}
