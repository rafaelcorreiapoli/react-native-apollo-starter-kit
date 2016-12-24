import {
  createRouter,
} from '@exponent/ex-navigation'

import SettingsScreen from '../screens/SettingsScreen'
import RootNavigation from './RootNavigation'
import GuestNavigation from './GuestNavigation'
import CuponsScreen from '../screens/CuponsScreen'
import RestaurantesScreen from '../screens/RestaurantesScreen'
import EscanearScreen from '../screens/EscanearScreen'
import VouchersScreen from '../screens/VouchersScreen'
import PromocoesScreen from '../screens/PromocoesScreen'
import RestauranteDetailScreen from '../screens/RestauranteDetail'
import CupomDetailScreen from '../screens/CupomDetail'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

export default createRouter(() => ({
  restaurantes: () => RestaurantesScreen,
  restauranteDetail: () => RestauranteDetailScreen,
  cupomDetail: () => CupomDetailScreen,
  cupons: () => CuponsScreen,
  escanear: () => EscanearScreen,
  promocoes: () => PromocoesScreen,
  vouchers: () => VouchersScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
  guestNavigation: () => GuestNavigation,
  signIn: () => SignInScreen,
  signUp: () => SignUpScreen,
  welcome: () => WelcomeScreen
}))
