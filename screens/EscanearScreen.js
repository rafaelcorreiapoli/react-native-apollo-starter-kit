import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';
import Escanear from '@components/Escanear'

export default class EscanearScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Escanear',
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
      <View style={{flex : 1}}>
        <Escanear>Escanear</Escanear>
      </View>
    );
  }

}
