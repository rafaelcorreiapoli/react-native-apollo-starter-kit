import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';

export default class SecondScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Links',
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
        <Text>Title</Text>
      </View>
    );
  }

}
