import React, {Component} from 'react'
import {View, StatusBar, Text} from 'react-native'
import NavigationRouter from '../navigation/navigationRouter'

// Styles
import styles from './style/rootContainerStyle'

class RootContainer extends Component {
  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content'/>
        <NavigationRouter />
      </View>
    )
  }
}

export default RootContainer
