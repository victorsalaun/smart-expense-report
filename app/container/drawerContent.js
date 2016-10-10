import React, {Component} from 'react'
import {ScrollView, Image, BackAndroid} from 'react-native'
import styles from './style/drawerContentStyle'
import {Images} from '../theme'
import DrawerButton from '../component/drawerButton'
import {Actions as NavigationActions} from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressHome = () => {
    this.toggleDrawer()
    NavigationActions.homeScreen()
  };

  handlePressNewExpense = () => {
    this.toggleDrawer()
    NavigationActions.newExpenseScreen()
  };

  handlePressExpensesList = () => {
    this.toggleDrawer()
    NavigationActions.expensesListScreen()
  };

  handlePressSettings = () => {
    this.toggleDrawer()
    NavigationActions.settingsScreen()
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Home' onPress={this.handlePressHome} />
        <DrawerButton text='New Expense' onPress={this.handlePressNewExpense} />
        <DrawerButton text='Expenses List' onPress={this.handlePressExpensesList} />
        <DrawerButton text='Settings' onPress={this.handlePressSettings} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
