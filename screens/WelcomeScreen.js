import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'

export default class Welcome extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>Welcome</Text>
        <Button
          title="Sign In"
          onPress={() => this.props.navigator.push('signIn')}
        />
      </View>
    )
  }

}
