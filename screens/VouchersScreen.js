import React, {
  Component,
} from 'react'

import {
  View,
} from 'react-native'
import Vouchers from '@containers/Vouchers'

export default class VouchersScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Vouchers',
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
      <View style={{ flex: 1 }}>
        <Vouchers />
      </View>
    )
  }

}
