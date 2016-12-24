import React, {
  Component,
  PropTypes,
} from 'react'
import {
  StackNavigation,
} from '@exponent/ex-navigation'
import Router from '../../navigation/Router'

export default class Switch extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      user
    } = this.props

    if (user) {
      return (
        <StackNavigation
          id="root"
          initialRoute={Router.getRoute('rootNavigation')} />
      )
    }

    return (
      <StackNavigation
        id="welcome"
        initialRoute={Router.getRoute('welcome')} />
    )
  }

}
