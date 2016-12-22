import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';

export default class CupomDetailScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Cupom',
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
        <Text>Cupom</Text>
      </View>
    );
  }

}
