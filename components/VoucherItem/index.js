import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Image,
  StyleSheet,
  Text,
  Button
} from 'react-native'
import { ACCENT_COLOR, PRIMARY_TEXT } from '@resources/colors'
import moment from 'moment'
import Panel from '@components/Panel'

export default class VoucherItem extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      utilizado,
      token,
      restaurante,
      promocao,
      onUtilizarClick,
      utilizadoEm,
      validoAte,
    } = this.props

    const vencido = moment() > validoAte

    return (
      <Panel style={[styles.container, (utilizado || vencido) && styles.utilizado]}>
        <Image
          resizeMode={Image.resizeMode.contain}
          source={{uri: restaurante.logoUrl}}
          style={styles.logo} />

        <View style={styles.leftColumn}>
          <Image
            style={styles.voucherSideImage}
            source={require('@assets/images/voucher_side.png')}
            resizeMode={Image.resizeMode.cover}
          />
        </View>

        <View style={styles.rightColumn}>
          <Text style={styles.voucherText}>Voucher</Text>
          <Text style={styles.promocaoText}>{promocao.nome}</Text>
          {
            vencido ?
              <Text>Voucher vencido em {moment(validoAte).format('DD/MM')}</Text>
            :
              utilizado ?
                <Text>Voucher utilizado em {moment(utilizadoEm).format('DD/MM')}</Text>
              :
              <Button
                onPress={() => {}}
                color={ACCENT_COLOR}
                title={`UTILIZAR ATÉ ${moment(validoAte).format('DD/MM')}`}
              />
          }
        </View>
      </Panel>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'white',
  },
  utilizado: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.5,
  },
  voucherSideImage: {
    flex: 1,
    width: 30,
    height: null,
    opacity: 0.1,
  },
  leftColumn: {
    backgroundColor: ACCENT_COLOR,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 30
  },
  rightColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10
  },
  logo: {
    width: 55,
    height: 40,
    position: 'absolute',
    right: 5,
    top: 5
  },

  voucherText: {
    fontSize: 46,
    color: ACCENT_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  promocaoText: {
    color: PRIMARY_TEXT,
    marginTop: 5,
    marginBottom: 5
  },
})
