import React, {Component} from 'react'
import {ScrollView, Text, Image, View} from 'react-native'
import {Images} from '../theme'

// Styles
import styles from './style/homeScreenStyle'

export default class ExpensesListScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Expenses List
            </Text>
          </View>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ by Victor SALAUN</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
