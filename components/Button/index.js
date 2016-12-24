import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export default class Button extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      title,
      disabled,
      color = '#FFF',
      backgroundColor = 'transparent',
      onPress,
      style,
    } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        disabled={disabled}
        style={style}
      >
        <View style={[styles.button, disabled && {opacity: 0.7 }, { backgroundColor }]}>
          <Text style={[styles.buttonText, { color }]}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
  },
})
