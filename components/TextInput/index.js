import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  StyleSheet,
  TextInput
} from 'react-native'

export default class MyTextInput extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          {...this.props}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    height: 40,
    marginVertical : 10,
    backgroundColor: 'transparent'
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
})
