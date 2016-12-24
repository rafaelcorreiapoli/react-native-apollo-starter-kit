import React, {
  Component,
  PropTypes,
} from 'react'
import {
  StackNavigation,
} from '@exponent/ex-navigation'
import {
  View,
  Text
} from 'react-native'

export default class GuestNavigation extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <StackNavigation
        initialRoute="welcome"
      />
    )
  }

}
