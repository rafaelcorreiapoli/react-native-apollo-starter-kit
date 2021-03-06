import SignIn from '@components/SignIn'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { writeTokenToStorage, setFormValue } from '@actions/login'
import { getLogin, getPassword } from '@selectors/login'

const mapStateToProps = state => ({
  login: getLogin(state),
  password: getPassword(state)
})

const mapDispatchToProps = dispatch => ({
  writeTokenToStorage(token) {
    dispatch(writeTokenToStorage(token))
  },
  setFormValue(key, value) {
    dispatch(setFormValue(key, value))
  }
})

const createTechnology = gql`
  mutation createTechnology($input:CreateTechnologyInput!) {
    createTechnology(input:$input) {
      changedTechnology {
        name
        techId
        status
      }
    }
  }
`

const loginWithPassword = gql`
  mutation LoginUser($input:LoginUserInput!) {
    loginUser(input:$input) {
      token
    }
  }
`

const loginWithFacebook = gql`
  mutation LoginWithFacebook($input: LoginUserWithAuth0SocialInput!) {
    loginUserWithAuth0Social(input:$input) {
      token
    }
  }
`


export default compose(
  graphql(createTechnology, {name: 'createTechnology'}),
  graphql(loginWithPassword, {name: 'loginWithPassword'}),
  graphql(loginWithFacebook, { name: 'loginWithFacebook'}),
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn)
