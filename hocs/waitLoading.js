import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'


export default (ComposedComponent) =>
  class extends Component {
    render() {
      const {
        loading
      } = this.props

      if (loading ) {
        return (
          <ActivityIndicator
            animating={true}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        )
      }

      return (
        <ComposedComponent {...this.props} />
      )
    }
  }


const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
})
