import React, {
  Component,
  PropTypes,
} from 'react'
import {
  withNavigation,
  StackNavigation,
} from '@exponent/ex-navigation'
import Router from '../../navigation/Router'

const isLoggedIn = token => {
  return !!token
}

const getInitialRoute = token => {
  if (isLoggedIn(token)) {
    return 'rootNavigation'
  }
  return 'guestNavigation'
}

@withNavigation
export default class Switch extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.readTokenFromStorage()
  }

  componentWillReceiveProps(nextProps) {
    const {
      token
    } = this.props
    const rootNavigator = this.props.navigation.getNavigator('root')

    if (isLoggedIn(nextProps.token) && !isLoggedIn(token)) {
      rootNavigator.replace(Router.getRoute('rootNavigation'))
    } else if (!isLoggedIn(nextProps.token) && isLoggedIn(token)) {
      rootNavigator.replace(Router.getRoute('guestNavigation'))
    }
  }


  render() {
    const {
      token,
      waitingStorageAnswer
    } = this.props

    console.log(waitingStorageAnswer)
    return (
      <StackNavigation
        id="root"
        initialRoute={Router.getRoute(getInitialRoute(token))} />
    )
  }

}
