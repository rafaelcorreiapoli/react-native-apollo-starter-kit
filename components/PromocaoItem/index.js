import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {
  Components
} from 'exponent'

export default class PromocaoItem extends Component {

  static defaultProps = {}

  static propTypes = {
    nome: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      nome,
    } = this.props

    return (
      <View style={styles.container}
        shadowColor='black'
        shadowOffset={{width: 0, height: 2}}
        shadowOpacity={0.2}
        shadowRadius={2}
      >

        <Image
          source={{uri: 'https://img.peixeurbano.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000mhGvyMAE/56c30b83e4b08818c3188197.jpg&w=620&h=400'}}
          resizeMode={Image.resizeMode.cover}
          style={styles.image}
        >
          <View style={[styles.absoluteBlur, styles.backDrop]} />
          <Text style={styles.nome}>{nome}</Text>
        </Image>
      </View>
    );
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
