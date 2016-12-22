import React, {
  Component,
  PropTypes,
} from 'react'

import {
  Text,
  StyleSheet,
  Image,
  View
} from 'react-native'
import Overlay from '@components/Overlay'
import Panel from '@components/Panel'

export default class PromocaoItem extends Component {
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
      imagemUrl,
      restaurante
    } = this.props

    return (
      <Panel style={styles.container}>
        <Image
          source={{uri: imagemUrl }}
          resizeMode={Image.resizeMode.cover}
          style={styles.image}
        >
          <Image
            source={{uri: restaurante.logoUrl}}
            resizeMode={Image.resizeMode.contain}
            style={styles.restauranteLogo}
          />
          <Overlay />
          <View style={styles.footerOverlay}>
            <Text style={styles.nome}>{nome} no {restaurante.nome}</Text>
          </View>
        </Image>
      </Panel>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 140,
  },
  footerOverlay: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restauranteLogo: {
    width: 100,
    height: 40,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  nome: {
    backgroundColor: 'transparent',
    fontSize: 24,
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 2,
  }
})
