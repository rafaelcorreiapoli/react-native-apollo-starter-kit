import SignIn from '@components/SignIn'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  async writeTokenToStorage(token) {
    await AsyncStorage.setItem('token', token)
  },
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


export default compose(
  graphql(createTechnology, {name: 'createTechnology'}),
  graphql(loginWithPassword, {name: 'loginWithPassword'}),
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn)