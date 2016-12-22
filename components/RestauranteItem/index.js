import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

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
      backgroundUrl
    } = this.props

    return (
      <View style={styles.container}
        shadowColor="black"
        shadowOffset={{width: 0, height: 2}}
        shadowOpacity={0.2}
        shadowRadius={2}
      >

        <Image
          source={{uri: backgroundUrl}}
          resizeMode={Image.resizeMode.cover}
          style={styles.image}
        >
          <View style={[styles.absoluteBlur, styles.backDrop]} />
          <Text style={styles.nome}>{nome}</Text>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: 120,
    //borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 2
  },
  backDrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  absoluteBlur: {
    position: 'absolute',
    left:0,
    right:0,
    top: 0,
    bottom: 0
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
