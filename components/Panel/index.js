import React, {
  Component,
} from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

export default class Panel extends Component {

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
      <View
        style={[styles.container, style]}
        shadowColor="black"
        shadowOffset={{width: 0, height: 2}}
        shadowOpacity={0.2}
        shadowRadius={2}
      >
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // height: 120,
    //borderWidth: 1,
    // borderColor: '#eee',
    // borderRadius: 2
  }
})
