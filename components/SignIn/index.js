import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native'
import Exponent from 'exponent'
import facebookConfig from '@config/facebook'
import Button from '@components/Button'
import TextInput from '@components/TextInput'
import { PRIMARY_COLOR, ACCENT_COLOR } from '@resources/colors'


export default class SignIn extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  _alertError(description) {
    Alert.alert(
      'Erro',
      description
    )
  }

  async _handleLoginWithFacebook() {
    const {
      writeTokenToStorage,
      loginWithFacebook
    } = this.props

    const { type, token: facebookToken } = await Exponent.Facebook.logInWithReadPermissionsAsync(facebookConfig.appId, {
      permissions: facebookConfig.permissions,
    })

    if (type === 'success') {
      this.setState({
        loading: true
      })
      loginWithFacebook({
        variables: {
          input: {
            access_token: facebookToken,
            connection: 'facebook'
          }
        }
      })
      .then(({ data }) => {
        this.setState({loading: false})
        const token = data.loginUserWithAuth0Social && data.loginUserWithAuth0Social.token
        if (token) {
          writeTokenToStorage(token)
        }
      })
      .catch((error) => {
        this.setState({loading: false})
        console.log('there was an error sending the query', error)
      })
    } else {
      this._alertError(`Erro de login com Facebook: ${type}`)
    }
  }

  _handleLoginWithPassword() {
    const {
      writeTokenToStorage,
      loginWithPassword
    } = this.props

    this.setState({
      loading: true
    })
    const a = () => loginWithPassword({
      variables: {
        input: {
          'username': 'editor',
          'password': 'q1w2e3',
        }
      }
    })
    .then(({ data }) => {
      const token = data.loginUser && data.loginUser.token
      this.setState({
        loading: true
      })
      if (token) {
        writeTokenToStorage(token)
      }
    }).catch((error) => {
      this.setState({
        loading: false
      })
      this._alertError(`Erro enviando mensagem ao servidor ${error.toString()}`)
    })

    setTimeout(a, 2000)
  }

  render() {
    return (
      <View style={[styles.container, styles.background]}>
        <View style={[styles.container, {zIndex: 500}]}>
          <View style={styles.container} />

          <View style={styles.formWrapper}>
            <Text style={styles.title}>Tastefy</Text>
            <TextInput
              placeholder="E-mail"
              editable={!this.state.loading}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Password"
              editable={!this.state.loading}
              autoCapitalize="none"
              secureTextEntry
            />
            <Button
              title="Sign In"
              backgroundColor={ACCENT_COLOR}
              disabled={this.state.loading}
              onPress={this._handleLoginWithPassword.bind(this)}
              style={styles.signInButton}
            />
            <Button
              title="Login with Facebook"
              backgroundColor="rgb(31, 59, 157)"
              disabled={this.state.loading}
              onPress={this._handleLoginWithFacebook.bind(this)}
              style={styles.facebookButton}
            />
            <Button
              title="Forgot Password?"
              disabled={this.state.loading}

            />
          </View>

          <View style={styles.container} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    backgroundColor: PRIMARY_COLOR
  },
  formWrapper: {
    paddingHorizontal: 15
  },
  signInButton: {
    marginVertical: 15,
  },
  facebookButton: {
    marginBottom: 15,
  },
  title: {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 15,
    color: '#FFF'
  }
})
