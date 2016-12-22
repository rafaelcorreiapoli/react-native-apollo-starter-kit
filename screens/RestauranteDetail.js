import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';

export default class RestauranteDetailScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Restaurante',
    },
  }

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Restaurante</Text>
      </View>
    );
  }

}
