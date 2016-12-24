import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,

} from 'react-native'
import Welcome from '@components/Welcome'

export default class WelcomeScreen extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Welcome />
      </View>
    )
  }

}
