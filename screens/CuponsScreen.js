import React, {
  Component,
} from 'react'

import {
  View,
} from 'react-native'
import Cupons from '@containers/Cupons'

export default class CuponsScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Cupons',
    },
  }

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{flex : 1, backgroundColor: '#eeeeee'}}>
        <Cupons />
      </View>
    )
  }

}
