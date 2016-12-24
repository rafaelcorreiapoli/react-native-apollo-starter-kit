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
      style,
      children
    } = this.props
    return (
      <View style={[styles.overlay, style]}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    left: 0, right: 0, top:  0, bottom: 0
  },
})
