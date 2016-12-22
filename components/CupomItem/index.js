import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';

export default class CupomItem extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      nome
    } = this.props


    return (
      <View>
        <Text>{nome}</Text>
      </View>
    );
  }

}
