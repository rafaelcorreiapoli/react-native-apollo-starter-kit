import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import Exponent, { Components, Permissions } from 'exponent';

export default class Escanear extends Component {

  static defaultProps = {}

  static propTypes = {}

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermission: status === 'granted'
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null
    };
  }

  renderContent() {
    const {
      hasCameraPermission
    } = this.state
    if (hasCameraPermission === null) {
      return (
        <ActivityIndicator
          animating
        />
      )
    } else if (hasCameraPermission === false) {
      return (
        <Text>Dê as permissões de câmera para o aplicativo</Text>
      )
    } else if (hasCameraPermission === true) {
      return (
        <Components.BarCodeScanner
          onBarCodeRead={this._handleBarCodeRead}
          style={styles.camera}
        />
      )
    }
  }
  render() {
    const {
      hasCameraPermission
    } = this.state

    return (
      <View style={{flex: 1}}>
        {this.renderContent()}
      </View>
    );
  }

  _handleBarCodeRead(data) {
    console.log(data)
  }
}

const styles = {
  camera: {
    flex: 1,
    position: 'absolute',
    left: 0, right: 0, top: 0, bottom: 0,
    backgroundColor: 'red'
  }
}
