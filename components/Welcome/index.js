import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from 'react-native'
import { PRIMARY_COLOR, ACCENT_COLOR } from '@resources/colors'
import { withNavigation } from '@exponent/ex-navigation'
import ViewPager from 'react-native-viewpager'
  import Button from '@components/Button'

const imageWelcome1 = require('@assets/images/welcome1.png')
const imageWelcome2 = require('@assets/images/welcome2.png')
const imageWelcome3 = require('@assets/images/welcome3.png')

const pages = [{
  imageSource: imageWelcome1,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit lorem at efficitur aliquet. Phasellus at orci ligula. Cras quis faucibus sem, at sagittis velit. Donec in finibus mauris.',
  backgroundColor: PRIMARY_COLOR
}, {
  imageSource: imageWelcome2,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit lorem at efficitur aliquet. Phasellus at orci ligula. Cras quis faucibus sem, at sagittis velit. Donec in finibus mauris.',
  backgroundColor: PRIMARY_COLOR
}, {
  imageSource: imageWelcome3,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit lorem at efficitur aliquet. Phasellus at orci ligula. Cras quis faucibus sem, at sagittis velit. Donec in finibus mauris.',
  backgroundColor: PRIMARY_COLOR
}]
const deviceWidth = Dimensions.get('window').width

@withNavigation
export default class Welcome extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}

    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    })

    this.dataSource = dataSource.cloneWithPages(pages)
    this._renderPage = this._renderPage.bind(this)
  }

  _renderPage(page, i) {
    return (
      <View style={{backgroundColor: page.backgroundColor, width: deviceWidth, paddingVertical: 20}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={page.imageSource}
            resizeMode={Image.resizeMode.contain}
            style={styles.image}
          />
        </View>
        <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>{page.title}</Text>
        </View>
        <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          {
            parseInt(i, 10) === parseInt(pages.length - 1, 10) ?
            <Button
              title="Começar"
                backgroundColor={ACCENT_COLOR}
                onPress={() => this.props.navigator.push('signIn')}

            /> :
            <Button
              title="Próximo"
              onPress={() => this.viewPager.goToPage(this.viewPager.getCurrentPage() + 1)}
            />
          }

        </View>


      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <ViewPager
          ref={(viewPager) => this.viewPager = viewPager}
          style={styles.viewPager}
          dataSource={this.dataSource}
          renderPage={this._renderPage}
        />
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  },
  viewPager: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  },
  image: {
    width: 200,
    height: 200
  },
  text: {
    color: '#FFF',
    paddingHorizontal: 20,
    fontSize: 16
  }
})
