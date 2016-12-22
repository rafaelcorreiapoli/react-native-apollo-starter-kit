import React, {
  Component,
  PropTypes,
} from 'react'

import {
  Text,
  StyleSheet,
  Image
} from 'react-native'

import Overlay from '@components/Overlay'
import Panel from '@components/Panel'

export default class RestauranteItem extends Component {

  static defaultProps = {}

  static propTypes = {
    nome: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      nome,
      backgroundUrl,
      logoUrl
    } = this.props

    return (
      <Panel style={styles.container}>
        <Image
          source={{uri: backgroundUrl}}
          resizeMode={Image.resizeMode.cover}
          style={styles.image}
        >
          <Overlay />
          <Image
            source={{uri: logoUrl}}
            style={styles.logo}
            resizeMode={Image.resizeMode.contain}
          />
          <Text style={styles.nome}>{nome}</Text>
        </Image>
      </Panel>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // backgroundColor: 'red',
    //flex: 1,
    width: 120,
    // alignSelf: 'stretch',
    height: 40
  },
  nome: {
    backgroundColor: 'transparent',
    fontSize: 32,
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 2,
  }
})
