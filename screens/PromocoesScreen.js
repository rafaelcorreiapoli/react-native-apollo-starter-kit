import React, {
  Component,
} from 'react'

import {
  View,
} from 'react-native'
import Promocoes from '@containers/Promocoes'

export default class PromocoesScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Promocoes',
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
      <View style={{flex : 1}}>
        <Promocoes />
      </View>
    )
  }

}
