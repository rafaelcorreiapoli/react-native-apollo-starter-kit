import React from 'react'
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native'
import {
  Notifications,
} from 'exponent'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation'
import {
  FontAwesome,
  Ionicons
} from '@exponent/vector-icons'
import { PRIMARY_COLOR } from '@resources/colors'
import Alerts from '../constants/Alerts'
import Colors from '../constants/Colors'
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync'

const defaultRouteConfig = {
  navigationBar: {
    backgroundColor: PRIMARY_COLOR,
    tintColor: '#fff',
  }
}

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
  }

  render() {
    return (
      <TabNavigation
        tabBarStyle={{backgroundColor: PRIMARY_COLOR}}
        tabBarHeight={56}
        initialTab="restaurantes">
        <TabNavigationItem
          id="restaurantes"
          renderIcon={isSelected => this._renderIcon('ios-restaurant', 'ios-restaurant-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute="restaurantes"
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="promocoes"
          renderIcon={isSelected => this._renderIcon('ios-star', 'ios-star-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute="promocoes"
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="escanear"
          renderIcon={isSelected => this._renderIcon('ios-qr-scanner', 'ios-qr-scanner-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute="escanear"
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="cupons"
          renderIcon={isSelected => this._renderIcon('ios-paper', 'ios-paper-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute="cupons"
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="vouchers"
          renderIcon={isSelected => this._renderIcon('ios-ribbon', 'ios-ribbon-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute="vouchers"
          />
        </TabNavigationItem>
      </TabNavigation>
    )
  }

  _renderIcon(name, outlineName, isSelected) {
    return (
      <Ionicons
        name={isSelected ? name : outlineName}
        size={32}
        //  color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
        color={Colors.tabIconDefault}
      />
    )
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync()

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  _handleNotification = ({origin, data}) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
})
