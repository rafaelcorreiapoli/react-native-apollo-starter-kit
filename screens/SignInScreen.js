import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'
import SignIn from '@containers/SignIn'

export default class SignInScreen extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SignIn />
      </View>
    )
  }

}
