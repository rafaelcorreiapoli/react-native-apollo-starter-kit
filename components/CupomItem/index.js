import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native'
import moment from 'moment'
import { PRIMARY_TEXT, SECONDARY_TEXT, ACCENT_COLOR} from '@resources/colors'


export default class CupomItem extends Component {

  static defaultProps = {}

  static propTypes = {
    restaurante: PropTypes.shape({
      nome: PropTypes.string,
      logoUrl: PropTypes.string
    }),
    validoAte: PropTypes.string,
    utilizado: PropTypes.bool,
    onResponderPesquisaClick: PropTypes.func,
    vencido: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      _id,
      restaurante,
      validoAte,
      utilizado,
      onResponderPesquisaClick,
      vencido,
      style
    } = this.props

    let subtitulo = vencido ? 'Cupom vencido' :
      utilizado ? 'Pesquisa realizada' : moment().to(validoAte)

    const inativo = vencido || utilizado

    return (
      <View style={[styles.container, inativo && styles.inativo, style]}>
        <View style={styles.dashedContainer}>
          <Image
            resizeMode={Image.resizeMode.contain}
            source={{uri: restaurante && restaurante.logoUrl}}
            style={styles.logo} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titulo}>{restaurante && restaurante.nome} - {moment(validoAte).format('DD/MM')}</Text>
          </View>
          <Text style={[styles.subtitulo, inativo && {marginBottom: 30}]}>{subtitulo}</Text>
        </View>
        { !inativo &&
          <Button
            backgroundColor={'red'}
            title="Responder Giselle"
            color={ACCENT_COLOR}
            onPress={() => {}}
            style={style.button}
          />
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    // borderWidth: 2
  },
  button: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  dashedContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: '#d3d3d3',
    padding: 10,
  },
  inativo: {
    opacity: 0.5,
    backgroundColor: '#ddd'
  },
  titulo: {
    color: PRIMARY_TEXT,
    marginBottom: 5,
    fontSize: 18
  },
  subtitulo: {
    fontSize: 14,
    color: SECONDARY_TEXT,
  },
  logo: {
    height: 75,
    width: 75,
    marginBottom: 5
  }
})
