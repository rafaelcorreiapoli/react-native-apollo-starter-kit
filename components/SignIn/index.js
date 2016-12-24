import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'

import { ACCENT_COLOR } from '@resources/colors'

export default class SignIn extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={[styles.container, styles.background]}>
        <View style={styles.container} />

        <View style={styles.formWrapper}>
          <Text style={styles.title}>Tastefy</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="E-mail"
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
          >
            <Text
              style={styles.forgotPassword}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>

        </View>
        <View style={styles.container} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    backgroundColor: '#Ac56AB'
  },
  inputWrapper: {
    flexDirection: 'row',
    height: 40,
    marginVertical : 10,
    backgroundColor: 'transparent'
  },
  button: {
    backgroundColor: 'red',
    marginBottom: 20,
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF'
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#FFF'
  },
  formWrapper: {
    paddingHorizontal: 15
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 15,
    color: '#FFF'
  }
})
