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
      imagemUrl
    } = this.props

    return (
      <Panel style={styles.container}>
        <Image
          source={{uri: imagemUrl }}
          resizeMode={Image.resizeMode.cover}
          style={styles.image}
        >
          <Overlay />
          <Text style={styles.nome}>{nome}</Text>
        </Image>
      </Panel>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
