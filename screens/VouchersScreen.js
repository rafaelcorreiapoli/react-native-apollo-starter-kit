import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';
import VouchersList from '@components/VouchersList'

export default class VouchersScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Vouchers',
    },
  }

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rows = [{
      nome: 'Voucher 1'
    }, {
      nome: 'Voucher 1'
    }, {
      nome: 'Voucher 1'
    }, {
      nome: 'Voucher 1'
    }, {
      nome: 'Voucher 1'
    }]
    return (
      <View style={{ flex: 1 }}>
        <VouchersList rows={rows} />
      </View>
    );
  }

}
