import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'

export default class SignUp extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>SignUp</Text>
        <Button
          title="Back"
          onPress={() => this.props.navigator.pop()}
        />
      </View>
    )
  }

}
