import React, {
  Component,
} from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

export default class Overlay extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      style
    } = this.props
    return (
      <View style={[styles.overlay, style]} />
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    left: 0, right: 0, top:  0, bottom: 0
  },
})
