import React, {
  Component,
} from 'react'

import {
  View,
} from 'react-native'
import RestaurantesList from '../components/RestaurantesList'
import Restaurantes from '@containers/Restaurantes'

export default class RestaurantesScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Restaurantes',
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
        <Restaurantes />
      </View>
    )
  }

}
